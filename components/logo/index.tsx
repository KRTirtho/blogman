import { FC } from "react";

interface LogoProps {
  size?: "small" | "medium" | "large";
}
const sizes = {
  small: "text-sm",
  medium: "text-base",
  large: "text-2xl",
};

const Logo: FC<LogoProps> = ({ size = "medium" }) => {
  return (
    <div
      className="text-accent bg-primary px-4 inline-block rounded"
      style={{ transform: "skew(-20deg)" }}
    >
      <span
        className={`inline-block select-none ${sizes[size]}`}
        style={{ transform: "skew(20deg)" }}
      >
        Blogman
      </span>
    </div>
  );
};

export default Logo;
