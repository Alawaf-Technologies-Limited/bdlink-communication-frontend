import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '@/components/ui/Button'
import { Container } from '@/components/layout/Container'
import { COMPANY } from '@/data/site'
import { cn } from '@/lib/cn'

type Slide = {
  src: string
  object?: string
  lead: string
  bold: string
  blurb: string
  cta: { label: string; to: string }
}

const slides: Slide[] = [
  {
    src: '/assets/heroes/home-hero.jpg',
    object: 'object-right',
    lead: 'Premium Network',
    bold: 'Quality',
    blurb: COMPANY.tagline,
    cta: { label: 'International', to: '/services/international' },
  },
  {
    src: '/assets/heroes/international-hero.jpg',
    lead: 'Global',
    bold: 'Connectivity',
    blurb: 'International terrestrial cable & internet gateway services.',
    cta: { label: 'Our Services', to: '/services/international' },
  },
  {
    src: '/assets/heroes/domestic-bokeh.jpg',
    lead: 'Domestic',
    bold: 'Excellence',
    blurb: 'Fiber networks engineered for Bangladesh enterprises.',
    cta: { label: 'Domestic', to: '/services/domestic' },
  },
]

export function HeroSlider() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const slide = slides[active]

  useEffect(() => {
    if (paused) return
    const timer = window.setInterval(() => {
      setActive((i) => (i + 1) % slides.length)
    }, 5500)
    return () => window.clearInterval(timer)
  }, [paused])

  return (
    <section
      className="relative min-h-[70vh] overflow-hidden bg-charcoal text-white sm:min-h-[78vh]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Highlights"
    >
      {slides.map((item, i) => (
        <img
          key={item.src}
          src={item.src}
          alt=""
          className={cn(
            'absolute inset-0 h-full w-full object-cover transition-opacity duration-700',
            item.object ?? 'object-center',
            i === active ? 'opacity-100' : 'opacity-0',
          )}
          aria-hidden={i !== active}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/30 to-black/10" />
      <div className="absolute inset-0 bg-black/15" />

      <Container className="relative z-10 flex min-h-[70vh] flex-col justify-end pb-14 pt-32 sm:min-h-[78vh] sm:pb-20 sm:pt-40">
        <div key={`${slide.lead}-${slide.bold}`} className="animate-fade-up">
          <h1 className="max-w-4xl font-sans text-4xl font-extrabold uppercase leading-[1.05] tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] sm:text-6xl lg:text-7xl">
            {slide.lead} <span className="font-black">{slide.bold}</span>
          </h1>
          <p className="mt-5 flex items-center gap-3 text-base text-white/95 sm:text-lg">
            <span className="inline-block h-8 w-[3px] shrink-0 bg-cta" aria-hidden />
            {slide.blurb}
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-5">
          <ButtonLink to={slide.cta.to} icon={<ArrowRight className="size-4" />}>
            {slide.cta.label}
          </ButtonLink>

          <div className="flex gap-2" role="tablist" aria-label="Slides">
            {slides.map((item, i) => (
              <button
                key={item.src}
                type="button"
                role="tab"
                aria-selected={i === active}
                aria-label={`Slide ${i + 1}`}
                onClick={() => setActive(i)}
                className={cn(
                  'h-1 w-10 rounded-full transition-colors',
                  i === active ? 'bg-cta' : 'bg-white/35 hover:bg-white/55',
                )}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
