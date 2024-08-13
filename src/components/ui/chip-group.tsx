import * as React from 'react'
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group'
import type { VariantProps } from 'class-variance-authority'

import { cn } from '~/utils/cn'
import { chipVariants } from '~/components/ui/chip'
import ChipCheck from '~/assets/chip_check.svg'

const ChipGroupContext = React.createContext<VariantProps<typeof chipVariants>>(
  {
    size: 'default',
    variant: 'default',
  },
)

const ChipGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> &
    VariantProps<typeof chipVariants>
>(({ className, variant, size, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Root
    ref={ref}
    className={cn('flex items-center justify-center gap-1', className)}
    {...props}
  >
    <ChipGroupContext.Provider value={{ variant, size }}>
      {children}
    </ChipGroupContext.Provider>
  </ToggleGroupPrimitive.Root>
))

ChipGroup.displayName = ToggleGroupPrimitive.Root.displayName

const ChipGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> &
    VariantProps<typeof chipVariants>
>(({ className, children, variant, size, ...props }, ref) => {
  const context = React.useContext(ChipGroupContext)

  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={cn(
        chipVariants({
          variant: context.variant || variant,
          size: context.size || size,
        }),
        className,
      )}
      {...props}
    >
      {variant === 'secondary' && <ChipCheck />}
      {children}
    </ToggleGroupPrimitive.Item>
  )
})

ChipGroupItem.displayName = ToggleGroupPrimitive.Item.displayName

export { ChipGroup, ChipGroupItem }
