import type React from "react";
import { useTranslation } from "react-i18next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Button from "./Button";
import SocialLinks from "./SocialLinks";
import GulfAdventureCTA from "./GulfAdventureCTA";

const CONTACT_COLORS = {
  accent: "#40B5AD",
  gold: "#E6C98E",
  goldLight: "#E6C98E33",
  goldMuted: "#E6C98E4D",
  goldBg: "#8A15384D",
  darkBg: "#0F1A2E80",
  inputBg: "#1B1B1B80",
  textMuted: "#F4F4F4B2",
  textLight: "#F4F4F4",
  dark: "#0D0D0D",
} as const;

export default function Contact() {
  const { t } = useTranslation();

  const DESTINATIONS = [
    { value: "dubai", label: t("contact.destinations.dubai") },
    { value: "abu-dhabi", label: t("contact.destinations.abu-dhabi") },
    { value: "qatar", label: t("contact.destinations.qatar") },
    { value: "oman", label: t("contact.destinations.oman") },
    { value: "saudi-arabia", label: t("contact.destinations.saudi-arabia") },
  ];

  const CONTACT_INFO = [
    {
      icon: MapPin,
      title: t("contact.info.headOffice.title"),
      lines: t("contact.info.headOffice.lines", {
        returnObjects: true,
      }) as string[],
    },
    {
      icon: Phone,
      title: t("contact.info.phone.title"),
      lines: t("contact.info.phone.lines", { returnObjects: true }) as string[],
    },
    {
      icon: Mail,
      title: t("contact.info.email.title"),
      lines: t("contact.info.email.lines", { returnObjects: true }) as string[],
    },
    {
      icon: Clock,
      title: t("contact.info.hours.title"),
      lines: t("contact.info.hours.lines", { returnObjects: true }) as string[],
    },
  ];

  return (
    <section className="px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="rounded-full px-3 py-3 font-inter text-xs font-medium tracking-[0.3em] uppercase inline-block"
            style={{
              backgroundColor: CONTACT_COLORS.goldBg,
              color: CONTACT_COLORS.gold,
            }}
          >
            {t("contact.badge")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 mt-6">
            {t("contact.heading")}{" "}
            <span style={{ color: CONTACT_COLORS.accent }}>
              {t("contact.headingAccent")}
            </span>
          </h2>
          <p
            className="font-inter font-normal max-w-2xl mx-auto"
            style={{ color: CONTACT_COLORS.textMuted }}
          >
            {t("contact.description")}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div
            className="border rounded-lg p-8"
            style={{
              borderColor: CONTACT_COLORS.goldLight,
              backgroundColor: CONTACT_COLORS.darkBg,
            }}
          >
            <h3 className="text-2xl font-bold mb-6">
              {t("contact.formTitle")}
            </h3>
            <div className="space-y-4">
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <FormField label={t("contact.firstName")} placeholder="John" />
                <FormField label={t("contact.lastName")} placeholder="Doe" />
              </div>

              {/* Email */}
              <FormField
                label={t("contact.email")}
                type="email"
                placeholder="john@example.com"
              />

              {/* Phone */}
              <FormField
                label={t("contact.phone")}
                type="tel"
                placeholder="+1 (555) 000-0000"
              />

              {/* Destination */}
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  style={{ color: CONTACT_COLORS.gold }}
                >
                  {t("contact.destination")}
                </label>
                <select
                  className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent opacity-75"
                  style={{
                    backgroundColor: CONTACT_COLORS.inputBg,
                    borderColor: CONTACT_COLORS.goldMuted,
                    color: "var(--foreground)",
                  }}
                >
                  <option>{t("contact.destinations.select")}</option>
                  {DESTINATIONS.map((dest) => (
                    <option key={dest.value} value={dest.value}>
                      {dest.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <FormField
                label={t("contact.message")}
                placeholder={t("contact.messagePlaceholder")}
                rows={4}
              />

              {/* Submit Button */}
              <Button
                type="button"
                className="rounded-lg text-center px-[215px] py-3 opacity-75 cursor-not-allowed text-[#0D0D0D]"
              >
                {t("contact.submitButton")}
              </Button>
            </div>
          </div>

          {/* Contact Info Section */}
          <div>
            {/* Contact Info */}
            <div
              className="border rounded-lg p-8"
              style={{
                borderColor: CONTACT_COLORS.goldLight,
                backgroundColor: CONTACT_COLORS.darkBg,
              }}
            >
              <h3 className="text-2xl font-bold mb-6">
                {t("contact.contactTitle")}
              </h3>

              {CONTACT_INFO.map((info, idx) => (
                <div key={idx} className="mb-6 last:mb-0">
                  <div className="flex items-start gap-4">
                    <info.icon
                      size={24}
                      style={{ color: CONTACT_COLORS.gold, flexShrink: 0 }}
                    />
                    <div>
                      <h4 className="font-semibold mb-2">{info.title}</h4>
                      {info.lines.map((line, lineIdx) => (
                        <p
                          key={lineIdx}
                          style={{ color: CONTACT_COLORS.textMuted }}
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div
              className="flex flex-col space-y-4 mt-8 border rounded-lg p-8"
              style={{
                borderColor: CONTACT_COLORS.goldLight,
                backgroundColor: CONTACT_COLORS.darkBg,
              }}
            >
              <h4 className="font-semibold mb-4">{t("contact.socialTitle")}</h4>
              <SocialLinks />
              <p
                className="text-lg"
                style={{ color: CONTACT_COLORS.textLight }}
              >
                {t("contact.socialDescription")}
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <GulfAdventureCTA />
      </div>
    </section>
  );
}

interface FormFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  rows?: number;
}

function FormField({ label, rows, ...props }: FormFieldProps) {
  const isTextarea = rows !== undefined;

  return (
    <div>
      <label
        className="block text-sm font-medium mb-2"
        style={{ color: CONTACT_COLORS.gold }}
      >
        {label}
      </label>
      {isTextarea ? (
        <textarea
          {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          rows={rows}
          className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent resize-none opacity-75"
          style={{
            backgroundColor: CONTACT_COLORS.inputBg,
            borderColor: CONTACT_COLORS.goldMuted,
            color: "var(--foreground)",
          }}
        />
      ) : (
        <input
          {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
          className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent opacity-75"
          style={{
            backgroundColor: CONTACT_COLORS.inputBg,
            borderColor: CONTACT_COLORS.goldMuted,
            color: "var(--foreground)",
          }}
        />
      )}
    </div>
  );
}
