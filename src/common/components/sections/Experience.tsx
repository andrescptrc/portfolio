import { ExperienceCard } from "../cards";

const Experience = () => {
  return (
    <section>
      <h3 className="text-xl mb-8 text-center">My experience</h3>
      <ul className="flex flex-col gap-14">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard isLast />
      </ul>
    </section>
  );
};

export default Experience;
