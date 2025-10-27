import type React from "react";
import { Menu } from "lucide-react";
import Button from "./Button";
import { useTranslation } from "react-i18next";

interface HeaderProps {
  onMenuClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const { t, i18n } = useTranslation();

  const navItems = [
    { key: "destinations", link: "#" },
    { key: "services", link: "#" },
    { key: "experiences", link: "#" },
    { key: "about", link: "#" },
    { key: "contact", link: "#" },
  ];

  const switchLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  };

  return (
    <header className="fixed top-0 w-full z-50 border bg-[#00000000] border-b-[#E6C98E33]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <img src="div.png" alt="logo" />

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-inter text-[16px]">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.link}
              className="text-sm text-foreground hover:text-primary transition-colors duration-300"
            >
              {t(`nav.${item.key}`)}
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
              {t("header.phone")}
            </a>
            <a
              href="mailto:info@dmcgulf.com"
              className="text-foreground hover:text-primary transition-colors"
            >
              {t("header.email")}
            </a>
          </div>
          {/* Button */}
          {/* <Button label={t("header.button")} /> */}
          <Button labelKey="header.button" />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={onMenuClick}
          className="md:hidden text-foreground hover:text-primary transition-colors"
        >
          <Menu size={24} />
        </button>

        {/* Language Switcher */}
        <div className="hidden md:flex items-center gap-2 ml-4">
          <button
            onClick={() => switchLanguage("en")}
            className="text-sm hover:text-primary transition"
          >
            EN
          </button>
          <span className="text-gray-400">|</span>
          <button
            onClick={() => switchLanguage("ar")}
            className="text-sm hover:text-primary transition"
          >
            AR
          </button>
        </div>
      </div>
    </header>
  );
};
