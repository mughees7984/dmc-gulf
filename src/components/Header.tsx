import type React from "react";
import { Menu } from "lucide-react";
import Button from "./Button";

interface HeaderProps {
  onMenuClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const navItems = [
    "Destinations",
    "Services",
    "Experiences",
    "About",
    "Contact",
  ];

  return (
    <header className="fixed top-0 w-full z-50 border bg-[#00000000] border-b-[#E6C98E33] ">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <img src="div.png" alt="logo" />

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-inter text-[16px]">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm text-foreground hover:text-primary transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Contact Info & CTA */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-4 text-sm">
            <a
              href="tel:+97144445555"
              className="text-foreground hover:text-primary transition-colors"
            >
              📞 +971 4444 5555
            </a>
            <a
              href="mailto:info@dmcgulf.com"
              className="text-foreground hover:text-primary transition-colors"
            >
              ✉️ info@dmcgulf.com
            </a>
          </div>
          {/* Button */}
          <Button />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={onMenuClick}
          className="md:hidden text-foreground hover:text-primary transition-colors"
        >
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
};
