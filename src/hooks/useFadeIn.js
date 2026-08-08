import { useEffect, useRef, useState } from 'react'

/**
 * Hook que retorna uma ref e um booleano indicando se o elemento
 * está visível na viewport — usado para animações de fade-in ao rolar.
 */
export function useFadeIn(threshold = 0.15) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, visible]
}
