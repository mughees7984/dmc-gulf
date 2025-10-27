import React from "react";
import SocialLinks from "./SocialLinks";

// Types
interface FooterLink {
  label: string;
  href: string;
}

// Footer Component
const Footer: React.FC = () => {
  const quickLinks: FooterLink[] = [
    { label: "Destinations", href: "#destinations" },
    { label: "Services", href: "#services" },
    { label: "Experiences", href: "#experiences" },
    { label: "About Us", href: "#about" },
    { label: "Travel Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ];

  const serviceLinks: FooterLink[] = [
    { label: "Hotel Reservations", href: "#hotels" },
    { label: "Flight Bookings", href: "#flights" },
    { label: "Desert Adventures", href: "#desert" },
    { label: "Corporate Events", href: "#corporate" },
    { label: "Luxury Tours", href: "#luxury" },
    { label: "Custom Packages", href: "#packages" },
  ];

  const legalLinks: FooterLink[] = [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" },
    { label: "Cookie Policy", href: "#cookies" },
  ];

  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <img src="footerlogo.png" alt="logo" />
            <p className="text-[#F4F4F4CC] font-inter font-normal text-sm leading-relaxed mb-6 mt-5 max-w-md">
              Your premier destination management company in the Gulf region. We
              create extraordinary luxury experiences that exceed expectations
              and forge lasting memories across Qatar, UAE, Oman, Saudi Arabia,
              and Bahrain.
            </p>

            {/* Social Links */}
            <SocialLinks />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#E6C98E] font-inter font-bold text-lg mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-[#E5E7EB] text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-[#E6C98E] font-inter font-bold text-lg mb-6">
              Our Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-[#E5E7EB] text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2024 DMC Gulf. All rights reserved. | Licensed Travel Agency
              #04-2024-001
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-500 hover:text-gray-300 transition-colors text-sm"
                >
                  {link.label}
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
