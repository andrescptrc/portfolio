import { AlignJustify } from "react-feather";

const Header = () => {
  return (
    <div className="flex justify-between py-8">
      <h1 className="text-white-full font-source text-sm">
        Primordium<span className="text-blue-300">.com</span>
      </h1>
      <AlignJustify className="text-white-full" />
    </div>
  );
};

export default Header;
