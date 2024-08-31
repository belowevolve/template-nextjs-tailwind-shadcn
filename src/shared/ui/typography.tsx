import { cn } from '@/shared/lib/utils'
import { cva, VariantProps } from 'class-variance-authority'
import * as React from 'react'

const typographyVariants = cva('text-primary', {
  variants: {
    variant: {
      h1: 'scroll-m-20 text-5xl font-extrabold tracking-tight text-balance lg:text-6xl',
      h2: 'scroll-m-20 text-4xl font-extrabold tracking-tight text-balance ',
      h3: 'scroll-m-20 text-2xl leading-none text-balance font-bold tracking-tight',
      h4: 'scroll-m-20 text-xl font-medium tracking-tight text-balance',
      p: 'text-lg font-medium',
    },
    type: {
      muted: 'text-muted-foreground',
      card: 'text-card-foreground text-balance',
    },
  },
  defaultVariants: {
    variant: 'p',
  },
})

export interface TypographyProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof typographyVariants> {
  as?: 'p' | 'h1' | 'h2' | 'h3' | 'h4'
}

const Typography = React.forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ className, variant, as, type, ...props }, ref) => {
    const Comp = as || variant || 'p'
    return <Comp className={cn(typographyVariants({ variant, type, className }))} ref={ref} {...props} />
  }
)
Typography.displayName = 'Typography'

export { Typography, typographyVariants }
