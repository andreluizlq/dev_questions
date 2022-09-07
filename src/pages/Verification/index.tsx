import React, { useEffect, useState } from "react";
import ButtonLink from "../../components/ButtonLink";
import Header from "../../components/Header/index";
import { VerificationBlock, Image, ButtonBlock } from "./styles";

const PagesVerification: React.FC = () => {
  const [count, setCount] = useState<string | null>("");

  useEffect(() => {
    setCount(localStorage.getItem("count"));
  }, []);

  return (
    <>
      <Header />
      <VerificationBlock>
        <h2>You choose {count} questions, shall we start the challenge?</h2>
        <ButtonBlock>
          <ButtonLink text={"Cancel"} link={"/"} />
          <ButtonLink text={"Start"} link={"/questions"} />
        </ButtonBlock>
      </VerificationBlock>
      <Image src="/vectorDown.svg" alt="Vector Down" />
    </>
  );
};

export default PagesVerification;
