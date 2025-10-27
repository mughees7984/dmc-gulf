import type React from "react";
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

const DESTINATIONS = [
  { value: "dubai", label: "Dubai" },
  { value: "abu-dhabi", label: "Abu Dhabi" },
  { value: "qatar", label: "Qatar" },
  { value: "oman", label: "Oman" },
  { value: "saudi-arabia", label: "Saudi Arabia" },
] as const;

const CONTACT_INFO = [
  {
    icon: MapPin,
    title: "Head Office",
    lines: ["Al Sadd Street, Tower 15, Floor 12", "Doha, Qatar"],
  },
  {
    icon: Phone,
    title: "Phone",
    lines: ["+974 4444 5555", "+971 4 123 4567"],
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["info@dmcgulf.com", "bookings@dmcgulf.com"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    lines: ["Sunday - Thursday: 8:00 AM - 6:00 PM", "24/7 Emergency Support"],
  },
] as const;

const CONTACT_SECTION_TEXT = {
  badge: "Get in Touch",
  heading: "Plan Your Gulf",
  headingAccent: "Escape Today",
  description:
    "Ready to experience the magic of the Gulf? Our expert team is here to create your perfect luxury travel experience.",
  formTitle: "Start Planning Your Journey",
  submitButton: "Send My Request",
  submittingButton: "Sending...",
  successMessage: "Your request was sent — we'll contact you soon.",
  contactTitle: "Contact Information",
  socialTitle: "Follow Our Journey",
  socialDescription:
    "Stay updated with our latest adventures and exclusive offers on social media.",
} as const;

// const INITIAL_FORM_DATA = {
//   firstName: "",
//   lastName: "",
//   email: "",
//   phone: "",
//   destination: "",
//   message: "",
// }

// const FORM_SUBMISSION_DELAY = 2000

// interface ContactFormData {
//   firstName: string
//   lastName: string
//   email: string
//   phone: string
//   destination: string
//   message: string
// }

export default function Contact() {
  return (
    <>
      <section className=" px-4 bg-background">
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
              {CONTACT_SECTION_TEXT.badge}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 mt-6">
              {CONTACT_SECTION_TEXT.heading}{" "}
              <span style={{ color: CONTACT_COLORS.accent }}>
                {CONTACT_SECTION_TEXT.headingAccent}
              </span>
            </h2>
            <p
              className="font-inter font-normal max-w-2xl mx-auto"
              style={{ color: CONTACT_COLORS.textMuted }}
            >
              {CONTACT_SECTION_TEXT.description}
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
                {CONTACT_SECTION_TEXT.formTitle}
              </h3>
              <div className="space-y-4">
                {/* Name Fields */}
                <div className="grid grid-cols-2 gap-4">
                  <FormField label="First Name" placeholder="John" />
                  <FormField label="Last Name" placeholder="Doe" />
                </div>

                {/* Email */}
                <FormField
                  label="Email Address"
                  type="email"
                  placeholder="john@example.com"
                />

                {/* Phone */}
                <FormField
                  label="Phone Number"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                />

                {/* Destination */}
                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: CONTACT_COLORS.gold }}
                  >
                    Preferred Destination
                  </label>
                  <select
                    className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent opacity-75"
                    style={{
                      backgroundColor: CONTACT_COLORS.inputBg,
                      borderColor: CONTACT_COLORS.goldMuted,
                      color: "var(--foreground)",
                    }}
                  >
                    <option>Select a destination</option>
                    {DESTINATIONS.map((dest) => (
                      <option key={dest.value} value={dest.value}>
                        {dest.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <FormField
                  label="Tell us about your ideal trip"
                  placeholder="Describe your travel preferences, dates, group size, and any special requirements..."
                  rows={4}
                />

                {/* Submit Button */}
                <Button
                  type="button"
                  className="rounded-lg text-center px-[215px] py-3 opacity-75 cursor-not-allowed text-[#0D0D0D]"
                >
                  {CONTACT_SECTION_TEXT.submitButton}
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
                  {CONTACT_SECTION_TEXT.contactTitle}
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
                <h4 className="font-semibold mb-4">
                  {CONTACT_SECTION_TEXT.socialTitle}
                </h4>
                <SocialLinks />
                <p
                  className="text-lg"
                  style={{ color: CONTACT_COLORS.textLight }}
                >
                  {CONTACT_SECTION_TEXT.socialDescription}
                </p>
              </div>
            </div>
          </div>
          <GulfAdventureCTA />
        </div>
      </section>
    </>
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

