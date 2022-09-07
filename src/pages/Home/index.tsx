import React from "react";
import { useHistory } from "react-router-dom";

import Header from "../../components/Header/index";
import Count from "../../components/Count/index";
import { useCount } from "../../context/Count.js";

import {
  TextContent,
  HomeContent,
  HomeBlock,
  ImagesBlock,
  TextBlock,
  Image,
  ImageBackground,
  ButtonStart,
} from "./styles";

const PagesHome: React.FC = () => {
  const { count } = useCount();

  const history = useHistory();

  function handleClick() {
    localStorage.setItem("count", count);
    history.push("/verification");
  }

  return (
    <>
      <HomeBlock>
        <Header />
        <HomeContent>
          <ImagesBlock>
            <Image src="/group.svg" alt="group" />
            <ImageBackground
              src="/groupBackground.svg"
              alt="group Background"
            />
          </ImagesBlock>
          <TextBlock>
            <h2>How many questions do you want to answer?</h2>
            <TextContent>
              <Count />
              <ButtonStart onClick={handleClick}>Start</ButtonStart>
            </TextContent>
          </TextBlock>
        </HomeContent>
      </HomeBlock>
    </>
  );
};

export default PagesHome;
