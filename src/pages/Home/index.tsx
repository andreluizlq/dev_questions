import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setCount, resetCount } from "../../redux/slices/counter";
import Header from "../../components/Header/index";
import Count from "../../components/Count/index";

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
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetCount());
  }, [dispatch]);

  function handleClick() {
    dispatch(setCount());
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
