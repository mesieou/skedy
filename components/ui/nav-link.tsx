import { cn } from "@/utils";
import { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "desktop" | "mobile";
}

export const NavLink = ({ 
  href, 
  children, 
  className, 
  onClick, 
  variant = "desktop" 
}: NavLinkProps) => {
  const baseClasses = "transition-colors duration-200";
  
  const variantClasses = {
    desktop: "text-foreground/80 hover:text-foreground relative group",
    mobile: "block px-4 py-2 text-foreground/80 hover:text-foreground hover:bg-accent/50 rounded-lg"
  };

  const desktopUnderline = variant === "desktop" && (
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full" />
  );

  return (
    <a
      href={href}
      className={cn(baseClasses, variantClasses[variant], className)}
      onClick={onClick}
    >
      {children}
      {desktopUnderline}
    </a>
  );
}; 