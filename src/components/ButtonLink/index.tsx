import React from "react";
import { Link } from "react-router-dom";
import { ButtonBlock } from "./styles";

type ButtonProps = {
  text: string;
  link: string;
};

const ButtonLink: React.FC<ButtonProps> = ({ text, link }) => {
  return (
    <>
      <Link to={link}>
        <ButtonBlock>{text}</ButtonBlock>
      </Link>
    </>
  );
};

export default ButtonLink;
