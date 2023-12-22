import { Fragment } from "react";

import { Experience, Header, Hero, Projects } from "@/sections";

const Page = () => {
  return (
    <Fragment>
      <Header />
      <Hero />
      <Projects />
      <Experience />
    </Fragment>
  );
};

export default Page;
