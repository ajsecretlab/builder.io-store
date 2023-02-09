import NextLink from "next/link";
import { ReactElement } from "react";

const Link = ({
  href,
  children,
  subtext,
}: {
  href: string;
  children: ReactElement;
  subtext: string;
}) => {
  return (
    <NextLink href={href!}>
      <a>{children}</a>
      <p>{subtext}</p>
    </NextLink>
  );
};

export default Link;
