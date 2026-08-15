'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type Variant = 'default' | 'secondary' | 'download' | 'ghost' | 'outline';

export interface GlassButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: Variant;
}

/**
 * Editorial CTA (DESIGN.md). Defaults to the ink "download" button.
 * No glass/blur, no drop shadow — hairline + ink-on-cream depth only.
 */
const GlassButton = React.forwardRef<HTMLButtonElement, GlassButtonProps>(
  ({ className, children, variant = 'download', ...props }, ref) => {
    return (
      <Button
        ref={ref}
        variant={variant}
        size="lg"
        className={cn('font-medium', className)}
        {...props}
      >
        {children}
      </Button>
    );
  }
);

GlassButton.displayName = 'GlassButton';

export { GlassButton };
