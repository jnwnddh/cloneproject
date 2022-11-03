import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Titles>
        <Title>카카 5조 같이가치</Title>
        <Comment>
          5조의 착한 마음을 응원합니다. 더 좋은 세상을 꿈꾼다면 지금
          시작해보세요
        </Comment>
      </Titles>
      <Team>
        <Back>Team List For Back 정유성 김보경 조혜수 </Back>
        <Front>For Fornt 노희진 이중오</Front>
      </Team>
    </Container>
  );
};

export default Footer;

const Team = styled.div`
  position: relative;
  top: 60px;
`;

const Container = styled.div`
  height: 250px;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #202020;
`;
const Title = styled.div`
  right: 250px;
  position: relative;
  top: 100px;
`;
const Titles = styled.div`
  display: flex;
  color: white;
  font-family: "KakaoBigRegular";
  font-style: normal;
  font-size: 20px;
  opacity: 0.6;
  text-align: center;
  justify-content: center;
  align-items: center;

  position: relative;
`;
const Comment = styled.div`
  font-family: "KakaoBigRegular";
  font-size: 14px;
  left: 400px;

  width: 300px;
  height: 50px;
  position: relative;

  top: 110px;
`;
const Front = styled.div`
  position: relative;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  left: 19px;
  font-size: 14px;
  color: white;
  font-family: "KakaoBigRegular";
  opacity: 0.7;
`;
const Back = styled.div`
  color: white;

  font-family: "KakaoBigRegular";
  font-size: 14px;

  position: relative;
  opacity: 0.7;
  flex-direction: column;
  align-items: center;
  display: flex;
  justify-content: center;
`;
