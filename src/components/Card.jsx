import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
export default function Cardbox({ post }) {
  const navigate = useNavigate();

  const goToDetailpage = () => {
    navigate(`/detail/${post.id}`);
  };

  return (
    <div>
      <CardBox onClick={goToDetailpage}>
        <div>
          <ImgBox src={post.thumbnail} />
          <TextBox>
            <Title>{post.title}</Title>

            <Name>{post.author}작성자</Name>
          </TextBox>
        </div>
      </CardBox>
    </div>
  );
}

const ImgBox = styled.img`
  /* background: url("https://cdn.pixabay.com/photo/2017/07/09/07/14/shadow-2486373_960_720.jpg")
    no-repeat; */
  background-position: center;
  background-size: cover;
  align-items: center;
  justify-content: center;
  align-items: center;
  display: flex;
  cursor: pointer;

  width: 230px;
  height: 130px;
  border-radius: 10px;

  :hover {
    transform: scale(1.1);
    transition: 1.1s;
  }
`;

const CardBox = styled.div`
  font-family: 'Gowun Dodum', sans-serif;
  display: flex;

  margin-bottom: 30px;
  margin: 20px;
  width: 230px;
`;

const TextBox = styled.div`
  width: 240px;
  overflow: hidden;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  font-size: 15px;
  display: block;
  text-decoration: none;
  color: #333;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-family: 'KakaoBigRegular';
  cursor: pointer;
  line-height: 23px;
  word-break: normal;
`;

const Name = styled.div`
  font-family: 'KakaoBigRegular';
  font-size: 13px;
  line-height: 20px;
  margin-left: -135px;
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  left: 430px;
`;

const Btn = styled.button`
  outline: none;
  border: none;
  margin: 10px;
  cursor: pointer;
`;

// const TextLine = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;
