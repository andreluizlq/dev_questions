import React from "react";
import type { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import ButtonLink from "../../components/ButtonLink";
import Header from "../../components/Header/index";
import { VerificationBlock, Image, ButtonBlock } from "./styles";

const PagesVerification = () => {
  const count = useSelector((state: RootState) => state.counter.value);

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
