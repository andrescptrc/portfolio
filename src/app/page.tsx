import { Fragment } from "react";

import {
  Contact,
  Education,
  Experience,
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
    </Fragment>
  );
};

export default Page;
