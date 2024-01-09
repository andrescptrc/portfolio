import HeroImage from './HeroImage';
import { Contact, Education, Experience, Projects } from '.';

const PageContent = () => {
  return (
    <div>
      <HeroImage />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </div>
  );
};

export default PageContent;
