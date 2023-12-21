import { Download, GitHub, Linkedin } from "react-feather";

const Hero = () => {
  return (
    <div className="flex flex-col items-center text-white-full text-center">
      <p className="text-blue-300 font-manrope font-semibold text-lg">
        Front-end developer out of this world
      </p>
      <h2 className="font-source text-6xl font-semibold">Brayan Carreño</h2>
      <hr className="text-blue-300 w-full my-6" />
      <p className="font-manrope mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
        Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
        mattis ligula consectetur, ultrices mauris.
      </p>
      <div className="flex justify-between gap-6 text-white-dark text-base font-manrope">
        <div className="flex gap-[10px]">
          <GitHub />
          <p>Github</p>
        </div>
        <div className="flex gap-[10px]">
          <Linkedin />
          <p>Linkedin</p>
        </div>
        <div className="flex gap-[10px]">
          <Download />
          <p>Resume</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
