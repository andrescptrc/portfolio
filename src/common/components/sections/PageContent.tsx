import Image from "next/image";
import { Contact, Education, Experience, Projects } from ".";

const PageContent = () => {
  return (
    <div>
      <Image  src="/hero-image.png" width={684} height={881} alt="Hero image" className="mb-52 ml-16" />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </div>
  );
};

export default PageContent;
