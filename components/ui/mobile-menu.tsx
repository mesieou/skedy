import { Button } from "./button";
import { Menu, X } from "lucide-react";
import { cn } from "@/utils";
import { ReactNode } from "react";

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
  children: ReactNode;
  className?: string;
}

export const MobileMenu = ({ 
  isOpen, 
  onToggle, 
  children,
  className 
}: MobileMenuProps) => {
  return (
    <>
      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <Button
          onClick={onToggle}
          variant="ghost"
          size="sm"
          className="rounded-full"
        >
          {isOpen ? (
            <X className="size-5" />
          ) : (
            <Menu className="size-5" />
          )}
        </Button>
      </div>

      {/* Mobile Menu Content */}
      <div
        className={cn(
          "md:hidden transition-all duration-300 ease-in-out overflow-hidden",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
          className
        )}
      >
        <div className="py-4 space-y-2 border-t border-border/50">
          {children}
        </div>
      </div>
    </>
  );
}; 