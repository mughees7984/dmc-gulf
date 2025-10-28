import React from "react";
import { useTranslation } from "react-i18next";
import SocialLinks from "./SocialLinks";

interface FooterLink {
  labelKey: string;
  href: string;
}

const Footer: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const quickLinks: FooterLink[] = [
    { labelKey: "footer.quickLinks.destinations", href: "#destinations" },
    { labelKey: "footer.quickLinks.services", href: "#services" },
    { labelKey: "footer.quickLinks.experiences", href: "#experiences" },
    { labelKey: "footer.quickLinks.about", href: "#about" },
    { labelKey: "footer.quickLinks.blog", href: "#blog" },
    { labelKey: "footer.quickLinks.contact", href: "#contact" },
  ];

  const serviceLinks: FooterLink[] = [
    { labelKey: "footer.services.hotels", href: "#hotels" },
    { labelKey: "footer.services.flights", href: "#flights" },
    { labelKey: "footer.services.desert", href: "#desert" },
    { labelKey: "footer.services.corporate", href: "#corporate" },
    { labelKey: "footer.services.luxury", href: "#luxury" },
    { labelKey: "footer.services.packages", href: "#packages" },
  ];

  const legalLinks: FooterLink[] = [
    { labelKey: "footer.legal.privacy", href: "#privacy" },
    { labelKey: "footer.legal.terms", href: "#terms" },
    { labelKey: "footer.legal.cookies", href: "#cookies" },
  ];

  return (
    <footer
      className="bg-black text-white border-t border-gray-800"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 ${
            isRTL ? "text-right" : "text-left"
          }`}
        >
          {/* Company Info */}
          <div
            className={`lg:col-span-2 flex flex-col ${
              isRTL ? "items-end text-right" : "items-start text-left"
            }`}
          >
            <img
              src="footerlogo.png"
              alt="logo"
              className={`${isRTL ? "ml-auto" : "mr-auto"}`}
            />
            <p className="text-[#F4F4F4CC] font-inter font-normal text-sm leading-relaxed mb-6 mt-5 max-w-md">
              {t("footer.description")}
            </p>

            <div
              className={`${isRTL ? "justify-end" : "justify-start"} w-full`}
            >
              <SocialLinks />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#E6C98E] font-inter font-bold text-lg mb-6">
              {t("footer.quickLinks.title")}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-[#E5E7EB] text-sm hover:text-[#E6C98E] transition"
                  >
                    {t(link.labelKey)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-[#E6C98E] font-inter font-bold text-lg mb-6">
              {t("footer.services.title")}
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-[#E5E7EB] text-sm hover:text-[#E6C98E] transition"
                  >
                    {t(link.labelKey)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div
            className={`flex flex-col md:flex-row justify-between items-center gap-4 ${
              isRTL ? "md:flex-row-reverse" : ""
            }`}
          >
            <p className="text-gray-500 text-sm">
              © 2024 DMC Gulf. {t("footer.rights")}
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-500 hover:text-gray-300 transition-colors text-sm"
                >
                  {t(link.labelKey)}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
