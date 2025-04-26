import React from "react"
import { cn } from "@/lib/utils"

export function Container({ 
  children, 
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div 
      className={cn(
        "container mx-auto px-4 md:px-6 max-w-[1400px]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
} 