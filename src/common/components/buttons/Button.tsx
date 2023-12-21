const Button = ({ title, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="bg-white-full/20 py-2 px-4 border border-black-quinary rounded text-white-full"
    >
      {title}
    </button>
  );
};

type ButtonProps = {
  title: string;
  onClick?: () => void;
};

export default Button;
