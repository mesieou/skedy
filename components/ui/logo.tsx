import { cn } from "@/utils";

interface LogoProps {
  brandName?: string;
  className?: string;
  showIcon?: boolean;
}

export const Logo = ({ 
  brandName = "Skedy", 
  className,
  showIcon = true 
}: LogoProps) => {
  return (
    <div className={cn("flex items-center space-x-2", className)}>
      {showIcon && (
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
          <div className="w-4 h-4 bg-primary-foreground rounded-sm"></div>
        </div>
      )}
      <span className="text-xl font-semibold text-foreground">{brandName}</span>
    </div>
  );
}; 