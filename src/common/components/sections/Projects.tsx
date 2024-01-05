import { ProjectCard } from "../cards";

const Projects = () => {
  return (
    <section>
      <ul className="flex flex-col gap-16">
        <ProjectCard image="/project-1-desktop.png" />
        <ProjectCard image="/project-2.png" hasRing />
        <ProjectCard image="/project-3.png" />
      </ul>
    </section>
  );
};

export default Projects;
