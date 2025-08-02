import { Button } from "./button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/utils";

interface ThemeToggleProps {
  variant?: "icon" | "full";
  className?: string;
  onClick?: () => void;
}

export const ThemeToggle = ({ 
  variant = "icon", 
  className,
  onClick 
}: ThemeToggleProps) => {
  const { theme, setTheme } = useTheme();

  const handleToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    onClick?.();
  };

  const iconClasses = cn(
    "rounded-full hover:bg-accent/50 transition-all duration-200",
    className
  );

  const fullClasses = cn(
    "w-full justify-start",
    className
  );

  return (
    <Button
      onClick={handleToggle}
      variant="ghost"
      size="sm"
      className={variant === "icon" ? iconClasses : fullClasses}
    >
      {theme === "dark" ? (
        <Sun className="size-4" />
      ) : (
        <Moon className="size-4" />
      )}
      {variant === "full" && (
        <span className="ml-2">
          {theme === 'dark' ? "Light" : "Dark"} Mode
        </span>
      )}
    </Button>
  );
}; 