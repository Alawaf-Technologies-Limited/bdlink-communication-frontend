import { WifiOff } from 'lucide-react'
import { ButtonLink } from '@/components/ui/Button'
import { Container } from '@/components/layout/Container'

export function OfflinePage() {
  return (
    <section className="bg-charcoal py-32 text-white">
      <Container className="max-w-2xl text-center">
        <WifiOff className="mx-auto size-12 text-cta" aria-hidden />
        <h1 className="mt-6 text-3xl font-extrabold uppercase tracking-wide">You are offline</h1>
        <p className="mt-4 text-white/75 leading-relaxed">
          BD Link works as a Progressive Web App. Previously visited pages and static assets may
          still be available from cache. Live contact submission requires connectivity.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ButtonLink to="/">Go Home</ButtonLink>
          <ButtonLink to="/contact" variant="ghost">
            Contact details
          </ButtonLink>
        </div>
      </Container>
    </section>
  )
}
