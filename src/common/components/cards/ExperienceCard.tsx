import Image from "next/image";

import classNames from "classnames";

const ExperienceCard = ({ image, isLast }: ExperienceCardProps) => {
  return (
    <li className="text-left flex gap-6">
      <div
        className={classNames(
          { "-mb-[80px]": !isLast },
          "w-max flex flex-col justify-center pt-10"
        )}
      >
        <div className="w-max">
          <Image src={image} width="24" height="24" alt={image} />
        </div>
        <hr
          className={classNames(
            { "w-0": isLast },
            "w-[1px] h-full bg-white-darkest ml-3 mt-4"
          )}
        />
      </div>
      <div>
        <div className="mb-4">
          <h4 className="text-white-dark text-sm">Frontend Developer</h4>
          <h3 className="font-bold text-3xl text-white-full">
            Name of the company
          </h3>
          <p className="font-source font-medium text-sm text-white-darkest">
            August 2023 - Current
          </p>
        </div>
        <p className="text-white-description">
          Maintaining and developing new features for a React.js project, as
          well as integrating its functionality with a REST API are my primary
          responsibilities as a Developer.
        </p>
      </div>
    </li>
  );
};

type ExperienceCardProps = {
  image: string;
  isLast?: boolean;
};

export default ExperienceCard;
