import { Fragment } from "react";

import {
  Contact,
  Education,
  Experience,
  Footer,
  Header,
  Hero,
  Projects,
} from "@/sections";

const Page = () => {
  return (
    <Fragment>
      <Header />
      <Hero />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </Fragment>
  );
};

export default Page;
