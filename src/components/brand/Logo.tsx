import { Link } from 'react-router-dom'
import { COMPANY } from '@/data/site'
import { cn } from '@/lib/cn'

type Props = {
  variant?: 'light' | 'dark' | 'colour'
  className?: string
  showWordmark?: boolean
}

export function Logo({ variant = 'light', className, showWordmark = true }: Props) {
  return (
    <Link
      to="/"
      className={cn('inline-flex items-center gap-3 no-underline', className)}
      aria-label={COMPANY.name}
    >
      <img
        src="/assets/logo/emblem.png"
        alt=""
        className="h-10 w-10 shrink-0 object-contain sm:h-11 sm:w-11"
        width={44}
        height={44}
      />
      {showWordmark ? (
        <span
          className={cn(
            'font-display leading-tight',
            variant === 'dark' || variant === 'colour' ? 'text-brand-navy' : 'text-white',
          )}
        >
          <span className="block text-[15px] font-semibold tracking-[-0.02em] sm:text-base">
            BD Link
          </span>
          <span className="block text-[11px] font-medium tracking-wide opacity-90 sm:text-xs">
            Communication Ltd.
          </span>
        </span>
      ) : null}
    </Link>
  )
}
