import { useEffect, useState } from 'react'
import { useRegisterSW } from 'virtual:pwa-register/react'
import { Button } from '@/components/ui/Button'

export function PwaUpdatePrompt() {
  const {
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegisteredSW(_swUrl, registration) {
      if (registration) {
        setInterval(() => {
          void registration.update()
        }, 60 * 60 * 1000)
      }
    },
  })

  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(needRefresh)
  }, [needRefresh])

  if (!visible) return null

  return (
    <div
      role="status"
      className="fixed bottom-4 left-1/2 z-[80] w-[min(92vw,420px)] -translate-x-1/2 rounded-2xl border border-white/10 bg-charcoal p-4 text-white shadow-card"
    >
      <p className="text-sm font-semibold">A new version of BD Link is available.</p>
      <p className="mt-1 text-xs text-white/70">Reload to update the installed app.</p>
      <div className="mt-3 flex gap-2">
        <Button
          type="button"
          size="sm"
          onClick={() => {
            void updateServiceWorker(true)
          }}
        >
          Update
        </Button>
        <Button
          type="button"
          size="sm"
          variant="ghost"
          onClick={() => {
            setNeedRefresh(false)
            setVisible(false)
          }}
        >
          Later
        </Button>
      </div>
    </div>
  )
}
