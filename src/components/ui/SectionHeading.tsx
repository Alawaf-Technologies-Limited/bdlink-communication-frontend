import { cn } from '@/lib/cn'

type Props = {
  children: string
  as?: 'h1' | 'h2' | 'h3'
  className?: string
  light?: boolean
}

export function SectionHeading({ children, as: Tag = 'h2', className, light }: Props) {
  const words = children.trim().split(/\s+/)
  const last = words.pop() ?? ''
  const lead = words.join(' ')

  return (
    <Tag
      className={cn(
        'font-sans text-3xl tracking-tight sm:text-4xl',
        light ? 'text-white' : 'text-ink',
        className,
      )}
    >
      {lead ? <span className="font-medium">{lead} </span> : null}
      <span className="font-extrabold">{last}</span>
    </Tag>
  )
}
