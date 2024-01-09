import { ExperienceCard } from '../cards';

const Experience = () => {
  return (
    <section id="experience">
      <h3 className="text-xl mb-8 text-center">My experience</h3>
      <ul className="flex flex-col gap-14">
        <ExperienceCard image="/small-planet-1.png" />
        <ExperienceCard image="/small-planet-2.png" />
        <ExperienceCard image="/small-planet-3.png" isLast />
      </ul>
    </section>
  );
};

export default Experience;
