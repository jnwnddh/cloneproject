import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
const category = () => {
  // const data = useSelector((state) => state.posting.category);

  return (
    <Container>
      <Btn>
        <Earth src='https://t1.kakaocdn.net/together_image/ico_all_221018.png' />
        <Font>전체</Font>
      </Btn>
      <Btn>
        <Earth src='https://t1.kakaocdn.net/together_image/ico_kidz.png' />
        <Font>어린이</Font>
      </Btn>
      <Btn>
        <Glove src='https://t1.kakaocdn.net/together_image/ico_young.png' />
        <Font>청년</Font>
      </Btn>
      <Btn>
        <Animal src='https://t1.kakaocdn.net/together_image/ico_woman_221018.png' />
        <Font>여성</Font>
      </Btn>
      <Btn>
        <Animal src='https://t1.kakaocdn.net/together_image/ico_old_221018.png' />
        <Font>어르신</Font>
      </Btn>
      <Btn>
        <Animal src='https://t1.kakaocdn.net/together_image/ico_accessible.png' />
        <Font>장애인</Font>
      </Btn>
      <Btn>
        <Animal src='https://t1.kakaocdn.net/together_image/ico_social.png' />
        <Font>우리사회</Font>
      </Btn>
      <Btn>
        <Animal src='https://t1.kakaocdn.net/together_image/ico_earth.png' />
        <Font>지구촌</Font>
      </Btn>
      <Btn>
        <Animal src='https://t1.kakaocdn.net/together_image/ico_neighborhood.png' />
        <Font>어려운이웃</Font>
      </Btn>
      <Btn>
        <Animal src='https://t1.kakaocdn.net/together_image/ico_animal.png' />
        <Font>동물</Font>
      </Btn>
      <Btn>
        <Animal src='https://t1.kakaocdn.net/together_image/ico_culture.png' />
        <Font>환경</Font>
      </Btn>
    </Container>
  );
};

export default category;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 35px;
  /* left: 87vh; */

  position: relative;
  /* width: 300px; */
`;
const Btn = styled.button`
  outline: none;
  border: none;
  background-color: white;
  cursor: pointer;
  margin: 10px;

  margin-left: 20px;
`;
const Font = styled.h2`
  font-family: 'KakaoBigBold';
  font-size: 12px;
  position: relative;
  left: 2px;
`;
const Glove = styled.img`
  width: 40px;
  left: 1px;
  position: relative;
`;
const Animal = styled.img`
  width: 40px;
  position: relative;
  left: 1px;
`;
const Earth = styled.img`
  width: 40px;
`;
