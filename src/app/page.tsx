import { Fragment } from "react";

import { Education, Experience, Header, Hero, Projects } from "@/sections";

const Page = () => {
  return (
    <Fragment>
      <Header />
      <Hero />
      <Projects />
      <Experience />
      <Education />
    </Fragment>
  );
};

export default Page;
