import Link from 'next/link';
import { ReactNode } from 'react';

import { Download, GitHub, Linkedin } from 'react-feather';
import { DefaultNavigation } from '../navigations';

const Hero = ({ children }: HeroProps) => {
  return (
    <div className="sm:flex sm:gap-20  sm:m-10 lg:m-72">
      <section className="flex flex-col items-center sm:items-start text-white-full text-center sm:sticky sm:top-28 sm:self-start sm:text-left">
        <p className="text-blue-300 font-manrope font-semibold text-lg">
          Front-end developer out of this world
        </p>
        <p className="font-source text-6xl font-semibold">Brayan Carreño</p>
        <hr className="text-blue-300 w-full my-6" />
        <p className="font-manrope mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in
          hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur,
          ultrices mauris.
        </p>
        <div className="flex justify-between gap-6 text-white-dark text-base font-manrope mb-16">
          <Link href="https://github.com/andrescptrc" target="_blank">
            <div className="flex gap-[10px]">
              <GitHub />
              <p>Github</p>
            </div>
          </Link>
          <Link href="https://www.linkedin.com/in/brayan-carre%C3%B1o-460b70217" target="_blank">
            <div className="flex gap-[10px]">
              <Linkedin />
              <p>Linkedin</p>
            </div>
          </Link>
          <Link href="/curriculum/brayan-carreño-resume.pdf" target="_blank">
            <div className="flex gap-[10px]">
              <Download />
              <p>Resume</p>
            </div>
          </Link>
        </div>
        <DefaultNavigation />
      </section>
      {children}
    </div>
  );
};

type HeroProps = {
  children: ReactNode;
};

export default Hero;
