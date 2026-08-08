import { useState } from 'react'
import { useFadeIn } from '../../hooks/useFadeIn'
import styles from './Contact.module.css'
import artist from '../../data/artist'

const INITIAL = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const [ref, visible] = useFadeIn()
  const [fields, setFields] = useState(INITIAL)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const validate = () => {
    const e = {}
    if (!fields.name.trim())    e.name    = 'Nome é obrigatório.'
    if (!fields.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'E-mail inválido.'
    if (!fields.subject.trim()) e.subject = 'Assunto é obrigatório.'
    if (fields.message.trim().length < 10) e.message = 'Mensagem muito curta.'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFields((f) => ({ ...f, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    setStatus('sending')
    try {
      const res = await fetch(artist.contact.formspreeEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(fields),
      })
      if (res.ok) { setStatus('success'); setFields(INITIAL) }
      else setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contato" className={`section ${styles.section}`} aria-label="Contato">
      <div className="container">
        <div ref={ref} className={`fade-in ${visible ? 'visible' : ''} ${styles.grid}`}>
          {/* Info */}
          <div className={styles.info}>
            <h2 className="section__title"><span>Contato</span></h2>
            <p className={styles.desc}>
              Para assessoria de imprensa, contratação de shows ou mensagem de fã,
              use o formulário ao lado.
            </p>
            <p className={styles.emailFallback}>
              Ou envie direto para:{' '}
              <a href={`mailto:${artist.contact.email}`} className={styles.emailLink}>
                {artist.contact.email}
              </a>
            </p>
          </div>

          {/* Formulário */}
          <form
            className={styles.form}
            onSubmit={handleSubmit}
            noValidate
            aria-label="Formulário de contato"
          >
            <div className={styles.row}>
              <div className={styles.field}>
                <label htmlFor="contact-name" className={styles.label}>Nome *</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={fields.name}
                  onChange={handleChange}
                  className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                  aria-describedby={errors.name ? 'err-name' : undefined}
                  aria-invalid={!!errors.name}
                />
                {errors.name && <span id="err-name" className={styles.error} role="alert">{errors.name}</span>}
              </div>

              <div className={styles.field}>
                <label htmlFor="contact-email" className={styles.label}>E-mail *</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={fields.email}
                  onChange={handleChange}
                  className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                  aria-describedby={errors.email ? 'err-email' : undefined}
                  aria-invalid={!!errors.email}
                />
                {errors.email && <span id="err-email" className={styles.error} role="alert">{errors.email}</span>}
              </div>
            </div>

            <div className={styles.field}>
              <label htmlFor="contact-subject" className={styles.label}>Assunto *</label>
              <select
                id="contact-subject"
                name="subject"
                value={fields.subject}
                onChange={handleChange}
                className={`${styles.input} ${errors.subject ? styles.inputError : ''}`}
                aria-describedby={errors.subject ? 'err-subject' : undefined}
                aria-invalid={!!errors.subject}
              >
                <option value="">Selecione…</option>
                <option value="Imprensa">Imprensa / Assessoria</option>
                <option value="Contratação">Contratação de show</option>
                <option value="Fã">Mensagem de fã</option>
                <option value="Outro">Outro</option>
              </select>
              {errors.subject && <span id="err-subject" className={styles.error} role="alert">{errors.subject}</span>}
            </div>

            <div className={styles.field}>
              <label htmlFor="contact-message" className={styles.label}>Mensagem *</label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                value={fields.message}
                onChange={handleChange}
                className={`${styles.input} ${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                aria-describedby={errors.message ? 'err-message' : undefined}
                aria-invalid={!!errors.message}
              />
              {errors.message && <span id="err-message" className={styles.error} role="alert">{errors.message}</span>}
            </div>

            <button
              type="submit"
              className={`btn btn--primary ${styles.submit}`}
              disabled={status === 'sending'}
              aria-disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Enviando…' : 'Enviar mensagem'}
            </button>

            {status === 'success' && (
              <p className={styles.successMsg} role="status">
                ✅ Mensagem enviada com sucesso! Entraremos em contato em breve.
              </p>
            )}
            {status === 'error' && (
              <p className={styles.errorMsg} role="alert">
                ❌ Ocorreu um erro. Tente novamente ou envie um e-mail diretamente.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
