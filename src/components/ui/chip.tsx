import * as React from 'react'
import * as TogglePrimitive from '@radix-ui/react-toggle'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '~/utils/cn'

const chipVariants = cva(
  'inline-flex items-center justify-center rounded-lg text-normal font-normal ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 gap-2',
  {
    variants: {
      variant: {
        default:
          'border border-meetie-gray-20 bg-transparent hover:bg-primary/10 hover:text-primary data-[state=on]:bg-primary/10 data-[state=on]:text-primary data-[state=on]:border-primary',
        secondary:
          'border border-meetie-gray-20 bg-background hover:bg-primary/10 hover:text-primary data-[state=on]:bg-primary/10 data-[state=on]:text-primary data-[state=on]:border-primary',
        muted:
          'bg-meetie-gray-20 border border-meetie-gray-40/80 text-meetie-gray-40/80',
      },
      size: {
        default: 'px-3 py-2',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

const Chip = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    VariantProps<typeof chipVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(chipVariants({ variant, size, className }))}
    {...props}
  />
))

Chip.displayName = TogglePrimitive.Root.displayName

export { Chip, chipVariants }
