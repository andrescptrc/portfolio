import { Fragment } from 'react';
import { Footer, Header, Hero, PageContent } from '@/sections';

const Page = () => {
  return (
    <Fragment>
      <Header />
      <Hero>
        <PageContent />
      </Hero>
      <Footer />
    </Fragment>
  );
};

export default Page;
