import { ButtonLink } from '@/components/ui/Button'
import { Container } from '@/components/layout/Container'

export function NotFoundPage() {
  return (
    <section className="bg-surface py-32">
      <Container className="max-w-xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-cta">404</p>
        <h1 className="mt-3 text-3xl font-extrabold text-ink">Page not found</h1>
        <p className="mt-3 text-ink-muted">
          The page you requested is not part of the BD Link application.
        </p>
        <ButtonLink to="/" className="mt-8">
          Back to Home
        </ButtonLink>
      </Container>
    </section>
  )
}
