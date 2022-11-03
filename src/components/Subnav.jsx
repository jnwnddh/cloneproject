import React from 'react';
import styled from 'styled-components';

export const Subnav = () => {
  return (
    <div>
      <TogetherNavbar>
        <div>
          <NavButton>모금중</NavButton>
          <NavButton>모금후기</NavButton>
          <NavButton>나눔캠페인</NavButton>
        </div>
      </TogetherNavbar>
    </div>
  );
};

export default Subnav;

//전체 영역
const TogetherNavbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #cbc7c7;
  height: 70px;

  border-bottom: 1px solid #eeeeee;
`;

//메뉴 버튼
const NavButton = styled.button`
  font-family: KakaoBigBold, sans-serif;
  text-align: center;
  align-items: center;
  justify-content: center;

  font-weight: 400;
  line-height: 24px;
  font-size: 14px;
  color: #202020;

  background-color: transparent;
  border: transparent;

  margin: 20px 20px 0px 20px;

  padding-bottom: 20px;

  :hover {
    /* border-bottom: 2px solid black; */
    cursor: pointer;
  }
`;
