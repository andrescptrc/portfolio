import classNames from "classnames";
import Image from "next/image";

const ExperienceCard = ({ isLast }: ExperienceCardProps) => {
  return (
    <li className="text-left flex gap-6">
      <div className={classNames("w-max flex flex-col justify-center  pt-10")}>
        <div className="w-max">
          <Image
            src="/small-planet-1.png"
            width="24"
            height="24"
            alt="small-planet-1"
          />
        </div>
        {!isLast && <hr className="w-[1px] h-full bg-white-darkest ml-3" />}
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
  isLast?: boolean;
};

export default ExperienceCard;
