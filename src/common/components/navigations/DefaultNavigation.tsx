const DefaultNavigation = () => {
  return (
    <nav className="flex flex-col gap-6 font-bold">
      <li>
        <a href="#projects">Projects</a>
      </li>
      <li className="text-black-quarternary hover:text-white-full transition">
        <a href="#experience">Experience</a>
      </li>
      <li className="text-black-quarternary hover:text-white-full transition">
        <a href="#education">Education</a>
      </li>
      <li className="text-black-quarternary hover:text-white-full transition">
        <a href="#contact">Contact</a>
      </li>
    </nav>
  );
};

export default DefaultNavigation;
