import classNames from "classnames";
import { ButtonHTMLAttributes } from "react";

const Button = ({ title, onClick, className, ...props }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        className,
        "bg-white-full/20 py-2 px-4 border border-black-quinary rounded text-white-full font-source"
      )}
      {...props}
    >
      {title}
    </button>
  );
};

type ButtonProps = {
  title: string;
  onClick?: () => void;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default Button;
