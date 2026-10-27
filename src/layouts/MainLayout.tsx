import { Outlet, ScrollRestoration, useNavigation } from 'react-router-dom'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { NetworkStatus } from '@/components/system/NetworkStatus'
import { PwaUpdatePrompt } from '@/components/system/PwaUpdatePrompt'
import { cn } from '@/lib/cn'

export function MainLayout() {
  const navigation = useNavigation()
  const busy = navigation.state === 'loading'

  return (
    <div className="flex min-h-dvh flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" className={cn('flex-1', busy && 'opacity-90')}>
        <Outlet />
      </main>
      <Footer />
      <NetworkStatus />
      <PwaUpdatePrompt />
      <ScrollRestoration />
    </div>
  )
}
