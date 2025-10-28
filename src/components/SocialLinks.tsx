
import React from "react";
import { useTranslation } from "react-i18next";

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  labelKey: string;
}

const SocialLinks: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const socialLinks: SocialLink[] = [
    {
      icon: <img src="/instagram.png" alt="Instagram" className="w-5 h-5" />,
      href: "#instagram",
      labelKey: "contact.social.instagram",
    },
    {
      icon: <img src="/facebook.png" alt="Facebook" className="w-5 h-5" />,
      href: "#facebook",
      labelKey: "contact.social.facebook",
    },
    {
      icon: <img src="/twitter.png" alt="Twitter" className="w-5 h-5" />,
      href: "#twitter",
      labelKey: "contact.social.twitter",
    },
    {
      icon: <img src="/linkedin.png" alt="LinkedIn" className="w-5 h-5" />,
      href: "#linkedin",
      labelKey: "contact.social.linkedin",
    },
  ];

  return (
    <div
      className={`flex gap-3 ${isRTL ? "flex-row-reverse" : "flex-row"}`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.href}
          aria-label={t(social.labelKey)}
          title={t(social.labelKey)}
          className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#40B5AD] transition-colors duration-300"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
