import Image from "next/image";

import { TechnologyItem } from "../items";
import { Button } from "../buttons";

const ProjectCard = ({ image, hasRing }: ProjectCardProps) => {
  return (
    <li>
      <div className="flex justify-center max-w-xl sm:w-auto mb-6 relative">
        {hasRing && (
          <Image
            src="/ring.svg"
            className="absolute -top-[9%] -left-[7%] w-[42%]"
            width="170"
            height="171"
            alt="Ring"
          />
        )}
        <Image src={image} className="w-full h-full" width="473" height="396" alt="Project 1" />
      </div>
      <div className="text-white-full text-center mb-4">
        <h2 className="font-bold text-white-full text-3xl mb-2">
          Name of the project
        </h2>
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

type ProjectCardProps = {
  image: string;
  hasRing?: boolean;
};

export default ProjectCard;
