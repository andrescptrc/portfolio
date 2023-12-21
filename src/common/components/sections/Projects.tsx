import { ProjectCard } from "../cards";

const Projects = () => {
  return (
    <ul className="flex flex-col gap-16">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </ul>
  );
};

export default Projects;
