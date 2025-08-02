import { cn } from "@/utils";
import { ReactNode } from "react";

interface NavContainerProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "transparent";
}

export const NavContainer = ({ 
  children, 
  className,
  variant = "default" 
}: NavContainerProps) => {
  const baseClasses = "fixed top-0 left-0 right-0 z-50";
  
  const variantClasses = {
    default: "bg-background/80 backdrop-blur-md border-b border-border/50",
    transparent: "bg-transparent"
  };

  return (
    <nav className={cn(baseClasses, variantClasses[variant], className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {children}
        </div>
      </div>
    </nav>
  );
}; 