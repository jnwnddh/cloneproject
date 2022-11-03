import React from 'react';
import styled, { keyframes } from 'styled-components';
import car from '../../images/car.png';
import family from '../../images/family.png';
import man from '../../images/man.png';

const AddComment = ({ posts }) => {
  return (
    <Container>
      <People>
        <Title>기부금{posts.priceState}원</Title>
        <Price>{posts.price}원 목표</Price>
        <TotalPrice>직접 기부:{posts.directDnCnt}</TotalPrice>
        <TotalPrice>참여 기부:{posts.participateDnCnt}</TotalPrice>
        <TotalPrice>응원기부:{posts.cheerDnCnt}</TotalPrice>
        <TotalPrice>뎃글기부:{posts.commentDnCnt}</TotalPrice>

        <Donation src='https://cdn.pixabay.com/photo/2022/01/11/17/04/city-6931092_960_720.jpg' />

        <Family src={family} alt='Family' />
        <Bike src={man} alt='Bike' />
        <Car src={car} alt='car' />
      </People>
    </Container>
  );
};
const flow = keyframes`

 0% {
    left: 20%;
    opacity: 0;
  }
  70% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    left: 74%;
    opacity: 0;
  }
  
`;

const carFlow = keyframes`
0% {
    right: 20%;
    opacity: 0;
  }
  70% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    right: 65%;
    opacity: 0;
  }

`;

const Car = styled.img`
  animation: ${carFlow} linear 7s infinite;
  position: absolute;
  bottom: -10px;
  width: 300px;
`;

const Family = styled.img`
  animation: ${flow} linear 20s infinite;
  position: absolute;
  bottom: 15px;
`;
const Bike = styled.img`
  animation: ${flow} linear 9s infinite;
  position: absolute;
  bottom: 180px;
`;

export default AddComment;

const Container = styled.div`
  justify-content: center;
  text-align: center;
  align-items: center;

  display: flex;
  flex-wrap: wrap;
  position: relative;
`;
const People = styled.div`
  background-size: cover;
  justify-content: center;
  align-items: center;
`;
const Donation = styled.img`
  opacity: 0.5;
  border-radius: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;
const Title = styled.div`
  font-size: 50px;
  line-height: 75px;
  font-weight: 400;
  color: #dc287c;
  position: relative;
  top: 280px;
  font-family: 'KakaoBigBold';
  z-index: 1;
`;

const Price = styled.div`
  font-size: 20px;
  line-height: 30px;
  font-weight: 400;
  color: black;
  position: relative;
  top: 280px;
  font-family: 'KakaoBigBold';
  z-index: 1;
`;

const TotalPrice = styled.div`
  font-size: 15px;
  line-height: 30px;
  font-weight: 400;
  color: black;
  position: relative;
  top: 280px;
  font-family: 'KakaoBigBold';
  z-index: 1;
`;
