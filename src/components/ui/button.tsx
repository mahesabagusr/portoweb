import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

// DESIGN.md button system — Cursor warm-cream editorial.
// CTA radius defaults to md (8px). Single brand color: Cursor Orange, used scarcely.
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-1 focus-visible:ring-offset-canvas",
  {
    variants: {
      variant: {
        // button-primary — Cursor Orange CTA
        default: 'bg-brand text-on-brand hover:bg-brand-active',
        // button-secondary — white card pill with strong hairline
        secondary:
          'bg-surface text-ink border border-hairline-strong hover:bg-canvas-soft',
        // button-download — ink CTA on cream
        download: 'bg-ink text-canvas hover:bg-ink/90',
        // button-tertiary-text — inline ink text link
        ghost: 'text-ink hover:bg-hairline-soft',
        link: 'text-brand underline-offset-4 hover:underline',
        destructive: 'bg-destructive text-white hover:bg-destructive/90',
        outline:
          'border border-hairline-strong bg-surface text-ink hover:bg-canvas-soft',
      },
      size: {
        default: 'h-10 px-[18px] py-[10px] has-[>svg]:px-4', // 40px primary
        sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-11 rounded-md px-5 has-[>svg]:px-4', // 44px download
        icon: 'size-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
