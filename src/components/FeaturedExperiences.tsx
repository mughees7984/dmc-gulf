import ExperienceCard from "./ExperienceCard";
import Button from "./Button";

export default function FeaturedExperiences() {
  const featured = [
    {
      id: 1,
      title: "Luxury Golf Yacht Charter",
      description:
        "Experience world-class golfing aboard a luxury yacht, combining two passions in one unforgettable journey.",
      price: 2500,
      image: "/moments.png",
      tag: "FEATURED",
      size: "large",
    },
    {
      id: 2,
      title: "February Experience",
      description:
        "Discover the magic of winter in the world's most exclusive destinations.",
      price: 1800,
      image: "/experience.png",
      tag: "SEASONAL",
      size: "small",
    },
    {
      id: 3,
      title: "Royal Sea Retreat",
      description:
        "An exclusive maritime escape designed for the most discerning travelers.",
      price: 3200,
      image: "/experience.png",
      tag: "EXCLUSIVE",
      size: "small",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Large featured card on left */}
          <div className="md:col-span-2">
            <FeaturedLargeCard experience={featured[0]} />
          </div>
          {/* Stacked cards on right */}
          <div className="flex flex-col gap-6">
            <ExperienceCard experience={featured[1]} />
            <ExperienceCard experience={featured[2]} />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedLargeCard({ experience }: { experience: any }) {
  return (
    <div className="group bg-card border border-border/20 rounded-lg overflow-hidden hover:border-accent/50 transition h-full">
      <div className="relative h-64 overflow-hidden bg-muted">
        <img
          src={experience.image || "/placeholder.svg"}
          alt={experience.title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
        />
        {experience.tag && (
          <div className="absolute top-4 left-4 px-3 py-1 bg-accent/20 text-accent text-xs font-semibold rounded">
            {experience.tag}
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{experience.title}</h3>
        <p className="text-sm text-muted-foreground mb-6">
          {experience.description}
        </p>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-muted-foreground">Starting from</p>
            <p className="text-3xl font-bold text-accent">
              ${experience.price}
            </p>
          </div>
          <Button>
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
}
