"use client";

import { useState } from "react";
import { NavContainer } from "./ui/nav-container";
import { Logo } from "./ui/logo";
import { NavLink } from "./ui/nav-link";
import { ThemeToggle } from "./ui/theme-toggle";
import { MobileMenu } from "./ui/mobile-menu";
import { defaultNavItems, type NavItem } from "./nav-config";

interface NavProps {
  navItems?: NavItem[];
  brandName?: string;
  showLogo?: boolean;
  variant?: "default" | "transparent";
  className?: string;
}

export const Nav = ({
  navItems = defaultNavItems,
  brandName = "Skedy",
  showLogo = true,
  variant = "default",
  className
}: NavProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuClose = () => setIsMobileMenuOpen(false);

  return (
    <NavContainer variant={variant} className={className}>
      {/* Logo/Brand */}
      {showLogo && (
        <div className="flex items-center">
          <Logo brandName={brandName} />
        </div>
      )}

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            href={item.href}
            variant="desktop"
          >
            {item.label}
          </NavLink>
        ))}
      </div>

      {/* Desktop Actions */}
      <div className="hidden md:flex items-center space-x-2">
        <ThemeToggle variant="icon" />
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            href={item.href}
            variant="mobile"
            onClick={handleMobileMenuClose}
          >
            {item.label}
          </NavLink>
        ))}
        <div className="px-4 py-2">
          <ThemeToggle 
            variant="full" 
            onClick={handleMobileMenuClose}
          />
        </div>
      </MobileMenu>
    </NavContainer>
  );
};
