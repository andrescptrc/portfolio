import Link from "next/link";

import { Download, GitHub, Linkedin } from "react-feather";

const Hero = () => {
  return (
    <section className="flex flex-col items-center text-white-full text-center">
      <p className="text-blue-300 font-manrope font-semibold text-lg">
        Front-end developer out of this world
      </p>
      <p className="font-source text-6xl font-semibold">Brayan Carreño</p>
      <hr className="text-blue-300 w-full my-6" />
      <p className="font-manrope mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
        Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
        mattis ligula consectetur, ultrices mauris.
      </p>
      <div className="flex justify-between gap-6 text-white-dark text-base font-manrope">
        <Link href="https://github.com/andrescptrc" target="_blank">
          <div className="flex gap-[10px]">
            <GitHub />
            <p>Github</p>
          </div>
        </Link>
        <Link
          href="https://www.linkedin.com/in/brayan-carre%C3%B1o-460b70217"
          target="_blank"
        >
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
    </section>
  );
};

export default Hero;
