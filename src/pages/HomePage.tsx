import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Server, Activity, Headphones, Lock, Receipt, Gauge } from 'lucide-react'
import { ButtonLink } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Container } from '@/components/layout/Container'
import { HeroSlider } from '@/components/home/HeroSlider'
import { COMPANY, HOME_SERVICES, NETWORK_FEATURES, PARTNERS } from '@/data/site'

const featureIcons = [Shield, Server, Activity, Headphones, Lock, Receipt, Gauge]

export function HomePage() {
  return (
    <>
      <HeroSlider />

      <section className="bg-surface py-14 sm:py-20">
        <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <SectionHeading>International Services</SectionHeading>
            <p className="mt-4 max-w-xl text-ink-muted leading-relaxed">
              We provide International Terrestrial Cable (ITC) and International Internet Gateway
              (IIG) service.
            </p>
            <ButtonLink
              to="/services/international"
              className="mt-6"
              icon={<ArrowRight className="size-4" />}
            >
              International
            </ButtonLink>
          </div>
          <div className="overflow-hidden rounded-[var(--radius-card)] bg-charcoal shadow-card">
            <img
              src="/assets/heroes/world-network.jpg"
              alt="Global network connectivity map"
              className="aspect-[16/9] w-full object-cover object-center"
            />
          </div>
        </Container>

        <Container className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {HOME_SERVICES.map((service) => (
            <Link
              key={service.title}
              to={service.to}
              className="group relative min-h-[140px] rounded-[var(--radius-card)] border border-border bg-white p-6 shadow-soft transition hover:-translate-y-0.5 hover:shadow-card"
            >
              <span className="inline-flex size-11 items-center justify-center rounded-full bg-cta text-white">
                <Server className="size-5" aria-hidden />
              </span>
              <h3 className="mt-4 pr-10 text-base font-bold text-ink">{service.title}</h3>
              {service.subtitle ? (
                <p className="mt-1 pr-10 text-sm text-ink-muted">{service.subtitle}</p>
              ) : null}
              <span className="absolute bottom-5 right-5 inline-flex size-8 items-center justify-center rounded-full border border-border text-ink-muted transition group-hover:border-cta group-hover:text-cta">
                <ArrowRight className="size-4" />
              </span>
            </Link>
          ))}
        </Container>
      </section>

      <section className="relative overflow-hidden py-16 text-white sm:py-24">
        <img
          src="/assets/heroes/domestic-bokeh.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
          aria-hidden
        />
        <div className="absolute inset-0 bg-black/35" aria-hidden />
        <Container className="relative z-10 max-w-2xl">
          <SectionHeading light>Domestic Services</SectionHeading>
          <p className="mt-4 text-white/90 leading-relaxed">
            We&apos;re committed to being a leader in the telecom community and believe that a
            strong network of like-minded partners is critical to that goal.
          </p>
          <ButtonLink
            to="/services/domestic"
            className="mt-6"
            icon={<ArrowRight className="size-4" />}
          >
            Domestic
          </ButtonLink>
        </Container>
      </section>

      <section className="bg-charcoal py-16 text-white sm:py-20">
        <Container>
          <SectionHeading light>Expanding Global Network</SectionHeading>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {NETWORK_FEATURES.map((feature, i) => {
              const Icon = featureIcons[i % featureIcons.length]
              return (
                <div key={feature.title} className="flex gap-4">
                  <span className="mt-1 inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-cta text-white">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-bold leading-snug">{feature.title}</h3>
                    <p className="mt-1 text-sm text-white/65">{feature.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      <section className="bg-surface py-16 sm:py-20">
        <Container>
          <h2 className="font-sans text-4xl font-extrabold text-ink">Partners</h2>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {PARTNERS.map((partner) => (
              <div
                key={partner.name}
                className="flex h-24 items-center justify-center rounded-[var(--radius-card)] border border-border bg-white px-3 sm:h-28"
              >
                <img
                  src={partner.src}
                  alt={partner.name}
                  className="max-h-14 max-w-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cta py-16 text-white sm:py-20">
        <Container className="text-center">
          <SectionHeading light>Contact Us</SectionHeading>
          <p className="mx-auto mt-4 max-w-2xl text-white/95">
            {COMPANY.addressLines.join(', ')}
          </p>
          <p className="mt-2 text-sm text-white/90">
            IP PABX: {COMPANY.pabx} · Mobile: {COMPANY.mobile} · Email: {COMPANY.email}
          </p>
          <ButtonLink
            to="/contact"
            variant="white"
            className="mt-8"
            icon={<ArrowRight className="size-4" />}
          >
            Contact Us
          </ButtonLink>
        </Container>
      </section>
    </>
  )
}
