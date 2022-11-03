import React, { useState } from 'react';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { __getPrice, __postPrice } from '../../redux/modules/cheerSlice';
import styled from 'styled-components';

import fullHeart from '../../images/heart-solid.svg';
import emptyHeart from '../../images/heart-regular.svg';
import { useNavigate } from 'react-router-dom';

const FooterNav = ({ posts, showModal }) => {
  const [liked, setLike] = useState(false);
  const [heartData, setHeartData] = useState('');
  const [cookie, setCookie, removeCookie] = useCookies();
  const navigate = useNavigate();
  const postId = useSelector((state) => state.posting.posting);

  const dispatch = useDispatch();

  //하트클릭시 응원기부 추가
  const addPriceHandler = () => {
    if (!cookie.Access) {
      alert('로그인 해주세요.');
    }

    dispatch(__postPrice({ id: postId.id })).then((res) => {
      console.log('post', res);
      if (res.payload.success === false) {
        alert(res.payload.error.message);
      } else {
        window.location.reload();
      }
    });
  };

  //디테일 페이지 클릭시 하트 클릭유무/ 응원 개수 불러오기
  useEffect(() => {
    console.log('get', posts.id);
    dispatch(__getPrice({ id: posts.id })).then((res) => {
      console.log(res);
      if (res.payload.data.cheerYn === false) {
        //미클릭
        setLike(false);
        setHeartData(res.payload.data.cheerTotalCnt);
      } else if (res.payload.data.cheerYn === true) {
        setLike(true);
        setHeartData(res.payload.data.cheerTotalCnt);
      }
    });
  });

  return (
    <PriceBtnContainer>
      <CherrBtn onClick={addPriceHandler}>
        <HeartImg src={liked ? fullHeart : emptyHeart} />
        응원 {heartData}
      </CherrBtn>
      <div>
        <CheerUpBtn>기부하기</CheerUpBtn>
      </div>
    </PriceBtnContainer>
  );
};

export default FooterNav;

const PriceBtnContainer = styled.div`
  width: 100%;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  left: 0;
  right: 0;
  bottom: 30px;
`;

const CherrBtn = styled.button`
  background-color: #434343;
  border: transparent;
  width: 250px;
  height: 50px;

  font-family: 'KakaoBigBold';
  color: white;

  :hover {
    cursor: pointer;
  }
`;

const CheerUpBtn = styled.button`
  background-color: #dc287c;
  border: transparent;
  width: 250px;
  height: 50px;

  font-family: 'KakaoBigBold';
  color: white;

  :hover {
    cursor: pointer;
  }
`;

const HeartImg = styled.img`
  width: 10px;
  margin-right: 5px;
`;
