import Image from 'next/image';

const HeroImage = () => {
  return (
    <Image
      src="/hero-image.png"
      width={684}
      height={881}
      alt="Hero image"
      className="mb-52 ml-16"
    />
  );
};

export default HeroImage;
