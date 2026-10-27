import { useEffect, useState } from 'react'
import { WifiOff } from 'lucide-react'
import { Link } from 'react-router-dom'

export function NetworkStatus() {
  const [online, setOnline] = useState(
    typeof navigator === 'undefined' ? true : navigator.onLine,
  )

  useEffect(() => {
    const on = () => setOnline(true)
    const off = () => setOnline(false)
    window.addEventListener('online', on)
    window.addEventListener('offline', off)
    return () => {
      window.removeEventListener('online', on)
      window.removeEventListener('offline', off)
    }
  }, [])

  if (online) return null

  return (
    <div
      role="status"
      className="fixed inset-x-0 bottom-0 z-[70] border-t border-white/10 bg-charcoal px-4 py-3 text-center text-sm text-white shadow-card"
    >
      <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-3">
        <WifiOff className="size-4 text-cta" aria-hidden />
        <span>You are offline. Cached pages remain available.</span>
        <Link to="/offline" className="font-semibold underline underline-offset-2">
          Offline help
        </Link>
      </div>
    </div>
  )
}
