import ExperienceCard from "./ExperienceCard";
import Button from "./Button";

export default function ExperienceGrid() {
  const experiences = [
    {
      id: 4,
      title: "Luxury Golf Yacht Charter",
      description: "Experience world-class golfing aboard a luxury yacht.",
      price: 2500,
      image: "/experience.png",
    },
    {
      id: 5,
      title: "Arabian Nights Dinner",
      description:
        "An enchanting evening under the stars with authentic cuisine.",
      price: 1200,
      image: "/experience.png",
    },
    {
      id: 6,
      title: "Arabian Nights Dinner",
      description:
        "An enchanting evening under the stars with authentic cuisine.",
      price: 1200,
      image: "/experience.png",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>
        <div className="flex gap-4 justify-center">
          <Button className="text-black font-inter font-bold">View All Experiences</Button>
          <button className="px-8 py-3 border border-[#E6C98E] text-[#E6C98E] hover:bg-accent/10 transition rounded-full text-sm font-medium">
            Create Custom Package
          </button>
        </div>
      </div>
    </section>
  );
}
