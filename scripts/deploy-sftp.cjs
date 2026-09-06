const fs = require('fs')
const path = require('path')
const Client = require('ssh2-sftp-client')

async function main() {
  const cfgPath = path.resolve(__dirname, '..', '.vscode', 'sftp.json')
  if (!fs.existsSync(cfgPath)) {
    console.error('sftp.json not found at', cfgPath)
    process.exit(1)
  }

  const cfg = JSON.parse(fs.readFileSync(cfgPath, 'utf8'))
  const { host, port, username, password, remotePath, context } = cfg
  const localDir = path.resolve(__dirname, '..', context || 'dist')

  if (!fs.existsSync(localDir)) {
    console.error('Local directory not found:', localDir)
    process.exit(1)
  }

  const sftp = new Client()
  try {
    await sftp.connect({ host, port, username, password })
    console.log('Connected to', host)

    // Ensure remote path exists
    const mkdirRecursive = async (rpath) => {
      const parts = rpath.split('/').filter(Boolean)
      let cur = ''
      for (const p of parts) {
        cur += '/' + p
        try {
          await sftp.mkdir(cur)
        } catch (e) {
          // ignore exists
        }
      }
    }

    await mkdirRecursive(remotePath)

    // Upload files recursively
    async function uploadDir(local, remote) {
      const items = fs.readdirSync(local, { withFileTypes: true })
      for (const it of items) {
        const lpath = path.join(local, it.name)
        const rpath = remote + '/' + it.name
        if (it.isDirectory()) {
          try { await sftp.mkdir(rpath) } catch (e) {}
          await uploadDir(lpath, rpath)
        } else if (it.isFile()) {
          await sftp.fastPut(lpath, rpath)
          console.log('Uploaded', lpath, '->', rpath)
        }
      }
    }

    await uploadDir(localDir, remotePath)
    console.log('Deploy completed')
    await sftp.end()
  } catch (err) {
    console.error('Deploy failed:', err.message)
    process.exit(1)
  }
}

main()
