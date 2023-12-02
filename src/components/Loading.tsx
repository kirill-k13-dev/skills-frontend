import React from "react";
import {keyframes, styled} from "styled-components";


const rotation = keyframes`
  to {
    transform: rotate(360deg);
  }
`;
const crossingFirst = keyframes`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(-45deg);
  }
`;
const crossingSecond = keyframes`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(45deg);
  }
`;

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1F8A70;
  width: 100vw;
  height: 100vh;
`;
const StarsBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  position: absolute;
`;
const Stars  = styled.img`
  width: 210px;
  height: 210px;
  animation-name: ${rotation};
  animation-duration: 4s;
  animation-iteration-count: infinite;
`;
const ArrowsBlock = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
`;
const Arrow = styled.img`
  height: 100px;
  position: absolute;
`;
const ArrowLeft = styled(Arrow)`
  animation-duration: 0.7s;
  animation-name: ${crossingFirst};
  animation-direction: alternate;
  animation-iteration-count: infinite;
`;
const ArrowRight = styled(Arrow)`
  animation-duration: 0.7s;
  animation-name: ${crossingSecond};
  animation-direction: alternate;
  animation-iteration-count: infinite;
`;
const Title = styled.h2`
  margin-top: 220px;
  font-family: monospace;
  font-size: 22px;
`;

const Loading: React.FC = () => (
    <Container>
        <StarsBlock>
            <Stars src="https://svgshare.com/i/108f.svg" alt="stars"/>
        </StarsBlock>
        <ArrowsBlock>
            <ArrowLeft src="https://i.postimg.cc/sXKxk6yR/she.png" alt="arrow left" />
            <Arrow src="https://i.postimg.cc/sXKxk6yR/she.png" alt="arrow top" />
            <ArrowRight src="https://i.postimg.cc/sXKxk6yR/she.png" alt="arrow right" />
        </ArrowsBlock>
        <Title>Loading...</Title>
    </Container>
);

export default Loading;
