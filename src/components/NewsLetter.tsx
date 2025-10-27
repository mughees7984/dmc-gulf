import Button from "./Button";

export default function NewsletterUI() {
  const features = [
    {
      image: "/deals.png",
      title: "Exclusive Deals",
      description: "Member-only discounts",
    },
    {
      image: "/guides.png",
      title: "Travel Guides",
      description: "Insider destination tips",
    },
    {
      image: "/updates.png",
      title: "Event Updates",
      description: "Curated events & itineraries",
    },
    {
      image: "/offers.png",
      title: "Special Offers",
      description: "Seasonal promotions",
    },
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="bg-[#E6C98E33] rounded-full px-3 py-3 font-inter text-[#E6C98E] text-xs font-normal tracking-[0.3em] uppercase">
            Stay Connected
          </span>
          <h2 className="text-4xl text-[#F4F4F4] md:text-5xl font-bold mb-4 mt-6">
            Never Miss a{" "}
            <span className="text-[#40B5AD] font-bold">Gulf Adventure</span>
          </h2>
          <p className="text-[#F4F4F4CC] font-inter font-normal max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about exclusive
            offers, new destinations, and insider travel tips from the Gulf
            region.
          </p>
        </div>

        {/* Email Subscription Form */}
        <div className="relative w-[1000px] h-[200px] left-[10%] bg-[#0D0D0D80] mb-10 rounded-lg border border-[#E6C98E33]">
          <div className="absolute top-[20%] left-[20%] max-w-2xl mx-auto">
            <form className="flex gap-3 mb-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-[#1B1B1B80] border border-[#E6C98E4D] rounded-lg text-foreground placeholder:text-[#ADAEBC] placeholder:font-inter focus:outline-none focus:ring-2 focus:ring-accent"
              />

              <Button className="rounded-lg px-10 text-[#0D0D0D] font-bold font-inter">
                Subscribe Now
              </Button>
            </form>
            <p className="text-lg text-[#F4F4F499] text-center">
              Join 5,000+ travelers who trust DMC Gulf for their luxury
              experiences. Unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* Features Grid (with Images) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-[#E6C98E33] border border-[#E5E7EB] flex items-center justify-center">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-6 h-6 object-contain"
                  />
                </div>
              </div>
              <h3 className="text-lg font-inter font-semibold mb-2 text-[#F4F4F4]">
                {feature.title}
              </h3>
              <p className="text-sm font-inter text-[#F4F4F499]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
