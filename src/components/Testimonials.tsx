import React from "react";
import { Star } from "lucide-react";
import { useTranslation } from "react-i18next";

// ⭐ Star Rating Component
const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
  <div className="flex gap-1 mb-4">
    {[...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating
            ? "fill-[#E6C98E] text-[#E6C98E]"
            : "fill-gray-600 text-gray-600"
        }`}
      />
    ))}
  </div>
);

// 🧩 Testimonial Card Component
const TestimonialCard: React.FC<{ testimonial: any }> = ({ testimonial }) => (
  <div className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50 hover:border-teal-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10 h-full flex flex-col">
    <StarRating rating={testimonial.rating} />
    <p className="text-gray-300 text-base leading-relaxed mb-6 flex-grow">
      "{testimonial.text}"
    </p>
    <div className="flex items-center gap-4 pt-4 border-t border-gray-700/50">
      <img
        src={testimonial.author.avatar}
        alt={testimonial.author.name}
        className="w-12 h-12 rounded-full object-cover ring-2 ring-gray-700/50"
      />
      <div>
        <h4 className="text-white font-semibold text-base">
          {testimonial.author.name}
        </h4>
        <p className="text-gray-500 text-sm">{testimonial.author.title}</p>
      </div>
    </div>
  </div>
);

// 🌟 Main Testimonials Section
const Testimonials: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { badge, title, highlight, subtitle, cards } = t("testimonials", {
    returnObjects: true,
  }) as any;

  return (
    <div
      className={`min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-20 px-4 ${
        i18n.language === "ar" ? "rtl text-right" : "ltr text-left"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="bg-[#8A15384D] rounded-full px-3 py-3 font-inter text-[#E6C98E] text-xs font-normal tracking-[0.3em] uppercase">
            {badge}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F4F4F4] mb-6 mt-4">
            {title}{" "}
            <span className="text-[#40B5AD] font-bold">{highlight}</span>
          </h2>
          <p className="text-[#F4F4F4B2] font-inter text-base md:text-m max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((testimonial: any) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* Optional glow elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
