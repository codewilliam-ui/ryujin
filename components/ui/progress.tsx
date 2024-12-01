"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import { cn } from "@/lib/utils"

interface ProgressProps extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  index: number;
}

const Progress = React.forwardRef<React.ElementRef<typeof ProgressPrimitive.Root>, ProgressProps>(
  ({ className, value, index, ...props }, ref) => {
    
    const indicatorColor = index % 2 === 0 ? "bg-rc_purple" : "bg-rc_pink";

    return (
      <ProgressPrimitive.Root
        ref={ref}
        className={cn(
          "relative h-2 w-full overflow-hidden rounded-full bg-primary/20",
          className
        )}
        {...props}
      >
        <ProgressPrimitive.Indicator
          className={`h-full w-full flex-1 rounded-full transition-all ${indicatorColor}`}
          style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
        />
      </ProgressPrimitive.Root>
    );
  }
);

Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress }
