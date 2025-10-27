// components/SocialLinks.tsx
import React from "react";

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

const SocialLinks: React.FC = () => {
  const socialLinks: SocialLink[] = [
    {
      icon: <img src="/instagram.png" alt="Instagram" className="w-5 h-5" />,
      href: "#instagram",
      label: "Instagram",
    },
    {
      icon: <img src="/facebook.png" alt="Facebook" className="w-5 h-5" />,
      href: "#facebook",
      label: "Facebook",
    },
    {
      icon: <img src="/twitter.png" alt="Twitter" className="w-5 h-5" />,
      href: "#twitter",
      label: "Twitter",
    },
    {
      icon: <img src="/linkedin.png" alt="LinkedIn" className="w-5 h-5" />,
      href: "#linkedin",
      label: "LinkedIn",
    },
  ];

  return (
    <div className="flex gap-3">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.href}
          aria-label={social.label}
          className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-teal-500 transition-colors duration-300"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
