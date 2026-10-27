import { Link } from 'react-router-dom'
import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/cn'

type Variant = 'primary' | 'secondary' | 'ghost' | 'white'
type Size = 'sm' | 'md' | 'lg'

const variants: Record<Variant, string> = {
  primary: 'bg-cta text-white shadow-[0_8px_20px_rgba(214,0,0,0.35)] hover:bg-cta-hover',
  secondary: 'bg-charcoal text-white hover:bg-ink',
  ghost: 'border border-white/30 bg-transparent text-white hover:border-white',
  white: 'bg-white text-cta hover:bg-line-light',
}

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-2.5 text-sm',
  lg: 'px-8 py-3 text-sm tracking-wide',
}

function buttonClass(variant: Variant, size: Size, className?: string) {
  return cn(
    'inline-flex items-center justify-center gap-2 rounded-full font-semibold uppercase transition-colors focus-visible:outline-cta disabled:opacity-50',
    variants[variant],
    sizes[size],
    className,
  )
}

type Shared = {
  children: ReactNode
  variant?: Variant
  size?: Size
  className?: string
  icon?: ReactNode
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  icon,
  ...props
}: Shared & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={buttonClass(variant, size, className)} {...props}>
      {children}
      {icon}
    </button>
  )
}

export function ButtonLink({
  to,
  children,
  variant = 'primary',
  size = 'md',
  className,
  icon,
}: Shared & { to: string }) {
  const classNameFinal = buttonClass(variant, size, className)
  const content = (
    <>
      {children}
      {icon}
    </>
  )

  if (/^(https?:|mailto:|tel:)/.test(to)) {
    return (
      <a href={to} className={classNameFinal}>
        {content}
      </a>
    )
  }

  return (
    <Link
      to={to}
      className={classNameFinal}
      onClick={() => {
        const hash = to.includes('#') ? to.split('#')[1] : null
        if (!hash) return
        requestAnimationFrame(() => {
          document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' })
        })
      }}
    >
      {content}
    </Link>
  )
}
