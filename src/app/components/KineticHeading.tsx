import { Fragment } from "react";

type KineticHeadingProps = {
  children: string;
  className?: string;
};

export default function KineticHeading({ children, className }: KineticHeadingProps) {
  const words = children.trim().split(/\s+/);
  const headingClassName = className
    ? `kinetic-heading ${className}`
    : "kinetic-heading";

  return (
    <h2 className={headingClassName}>
      <span className="kinetic-heading-visual">
        {words.map((word, index) => (
          <Fragment key={`${word}-${index}`}>
            <span className="kinetic-word">
              <span>{word}</span>
            </span>
            {index < words.length - 1 ? " " : null}
          </Fragment>
        ))}
      </span>
    </h2>
  );
}
