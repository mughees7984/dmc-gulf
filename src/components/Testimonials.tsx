import React from "react";
import { Star } from "lucide-react";

// Types
interface Testimonial {
  id: number;
  rating: number;
  text: string;
  author: {
    name: string;
    title: string;
    avatar: string;
  };
}

// Star Rating Component
const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
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
};

// Testimonial Card Component
const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({
  testimonial,
}) => {
  return (
    <div className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50 hover:border-teal-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10 h-full flex flex-col">
      {/* Star Rating */}
      <StarRating rating={testimonial.rating} />

      {/* Testimonial Text */}
      <p className="text-gray-300 text-base leading-relaxed mb-6 flex-grow">
        "{testimonial.text}"
      </p>

      {/* Author Info */}
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
};

// Main Testimonials Section Component
const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      rating: 5,
      text: "DMC Gulf transformed our corporate retreat into an unforgettable experience. Every detail was perfectly orchestrated, from the luxury accommodations to the cultural experiences. Truly exceptional service.",
      author: {
        name: "Sarah Johnson",
        title: "CEO, Global Innovations",
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      },
    },
    {
      id: 2,
      rating: 5,
      text: "Our family vacation to the Gulf was absolutely magical. The team's attention to detail and local knowledge made every moment special. We can't wait to return!",
      author: {
        name: "Michael Chen",
        title: "Travel Enthusiast",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
      },
    },
    {
      id: 3,
      rating: 5,
      text: "The luxury yacht experience was beyond our expectations. Professional, elegant, and perfectly executed. DMC Gulf knows how to deliver premium experiences.",
      author: {
        name: "Emma Rodriguez",
        title: "Luxury Travel Enthusiast",
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      },
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          {/* <p className="text-amber-400 text-xs md:text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            Client Testimonials
          </p> */}
          <span className="bg-[#8A15384D] rounded-full px-3 py-3 font-inter text-[#E6C98E] text-xs font-normal tracking-[0.3em] uppercase">
            Client Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F4F4F4] mb-6 mt-4">
            Stories of{" "}
            <span className="text-[#40B5AD] font-bold">Excellence</span>
          </h2>
          <p className="text-[#F4F4F4B2] font-inter text-base md:text-m max-w-3xl mx-auto">
            Hear from our valued clients who have experienced the magic of the
            Gulf through our expert guidance and personalized service.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* Optional: Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
