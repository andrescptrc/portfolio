import Image from "next/image";

import { TechnologyItem } from "../items";
import { Button } from "../buttons";

const ProjectCard = () => {
  return (
    <li>
      <div className="flex justify-center mb-6">
        <Image src="/project-1.svg" width={358} height={300} alt="Project 1" />
      </div>
      <div className="text-white-full text-center mb-4">
        <h2 className="font-bold text-3xl mb-2">Name of the project</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
          mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices mauris.
        </p>
      </div>
      <div className="text-white-full flex gap-4 flex-wrap justify-center mb-8">
        <TechnologyItem title="TypeScript" />
        <TechnologyItem title="React.js" />
        <TechnologyItem title="Next.js" />
        <TechnologyItem title="Node.js" />
      </div>
      <div className="flex justify-center">
        <Button title="View project" />
      </div>
    </li>
  );
};

export default ProjectCard;
