import React from 'react';
import styled from 'styled-components';
export const Banner = ({ posts }) => {
  return (
    <Wrap>
      <Title>{posts.title}</Title>
      <Name>by 사회복지법인 어린이재단</Name>
      <ImoWrap>
        <Imo src='https://mud-kage.kakaocdn.net/dn/bzTQmA/btqcJUAvEOE/wH8jPKYXKobYQDkuLdeTt1/img.png' />
        <Imo src='https://mud-kage.kakaocdn.net/dn/cB3Gmf/btqcKGu6Qp6/qSBStjKCEpZvnrgz9F4jL0/img.png' />
      </ImoWrap>
      <BannerImg src={posts.thumbnail} />
    </Wrap>
  );
};

export default Banner;

const Title = styled.h1`
  font-size: 32px;
  line-height: 44px;

  text-align: center;
  color: white;
  font-weight: 400px;
  position: relative;
  bottom: -150px;
  margin-bottom: -30px;
`;
const ImoWrap = styled.div`
  position: relative;
  bottom: -250px;
  margin-bottom: -95px;
`;

const Imo = styled.img`
  margin: 10px;
  width: 73px;
`;

const BannerImg = styled.img`
  width: 100%;
  height: 400px;
  border-radius: 1px 1px 11% 11%;
`;

const Wrap = styled.div`
  width: 100%;
  height: 376px;
  border-radius: 5px 5px 30% 30%;
  justify-content: center;
  text-align: center;
  align-items: center;
`;
const Name = styled.div`
  font-family: 'KakaoBigRegular';
  color: white;
  line-height: 23px;
  font-size: 15px;
  font-weight: 400px;
  position: relative;
  bottom: -180px;
  margin-bottom: -60px;
  opacity: 0.8;
`;
