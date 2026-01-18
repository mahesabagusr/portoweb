import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface GlassButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const GlassButton = React.forwardRef<HTMLButtonElement, GlassButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn(
          "group relative overflow-hidden backdrop-blur-xl bg-primary/20 hover:bg-primary/30 border-2 border-primary/30 hover:border-primary/50 text-foreground px-10 py-6 text-lg font-semibold rounded-full shadow-2xl shadow-primary/30 hover:shadow-primary/60 transition-all duration-300 hover:scale-105",
          className
        )}
        {...props}
      >
        <span className="relative z-10">{children}</span>
        <span className="absolute inset-0 bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></span>
      </Button>
    );
  }
);

GlassButton.displayName = "GlassButton";

export { GlassButton };
