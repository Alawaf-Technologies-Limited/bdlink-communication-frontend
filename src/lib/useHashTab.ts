import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export function useHashTab(fallback: string) {
  const { hash } = useLocation()
  const [active, setActive] = useState(() => hash.replace('#', '') || fallback)

  useEffect(() => {
    const id = hash.replace('#', '')
    if (!id) return
    setActive(id)
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    })
  }, [hash])

  return [active, setActive] as const
}
