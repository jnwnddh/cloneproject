import axios from 'axios';
import React from 'react';
import { useState } from 'react';

import { useEffect } from 'react';
import { useCookies } from 'react-cookie';

import { useDispatch } from 'react-redux';

import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { __deleteComment } from '../../redux/modules/commentsSlice';
import { __getPost } from '../../redux/modules/postsSlice';
import FooterNav from './FooterNav';
const CommentList = ({ posts }) => {
  const { id } = useParams();

  const [cookie, setCookie, removeCookie] = useCookies();

  console.log(posts);

  const dispatch = useDispatch();

  // const onDeleteButtonHandler = (commentId) => {
  //   // const result = window.confirm('삭제하겟습니까?');
  //   // if (result) {

  //   //   });
  //   // } else {
  //   //   console.log('fg');
  //   //   return;
  //   // }
  //   console.log(commentId);
  //   dispatch(__deleteComment(commentId));
  // };

  const onDeleteButtonHandler = (commentId) => {
    axios.defaults.headers.delete['authorization'] = cookie.Access;
    axios.defaults.headers.delete['Refresh-Token'] = cookie.Refresh;
    axios
      .delete(`http://3.35.173.42:8080/api/comment/${commentId}`)
      .then((res) => {
        if (res.data.success) {
          console.log('1');
          alert('삭제되었습니다.');
        } else {
          console.log('2');
          alert(res.data.error.message);
        }
        window.location.reload();
      });
  };

  useEffect(() => {
    dispatch(() => {
      __getPost(id);
    }, [dispatch, id]);
  });

  return (
    //?데이터가없을때 옵셔널체이닝
    <div>
      {posts?.commentResponseDtoList?.map((post) => (
        <div key={post.id}>
          <Nickname>{post.nickname}</Nickname>
          <Container>
            <CommentForm>
              <User src='https://t1.kakaocdn.net/together_image/common/avatar/avatar03.png' />
              <UserCommentList>
                <Comment>{post.comment}</Comment>
              </UserCommentList>
            </CommentForm>
            <DeleteButton
              onClick={() => {
                onDeleteButtonHandler(post.id);
              }}
            >
              삭제
            </DeleteButton>
          </Container>
        </div>
      ))}
    </div>
  );
};
export default CommentList;
const DeleteButton = styled.div`
  margin-top: -3px;
  cursor: pointer;
  outline: none;
  border: none;
  background-color: #999999;
  color: white;
  font-size: 15px;
  font-family: 'KakaoBigRegular';
  border-radius: 10px 10px 10px 10px;
  position: relative;
  text-align: center;
  margin-left: 10px;
  width: 80px;
  height: 35px;
  line-height: 35px;
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;
`;
const Container = styled.div`
  justify-content: center;
  align-items: center;
  left: 42px;
  display: flex;
  flex-wrap: wrap;
  position: relative;
`;
const Comment = styled.div`
  position: relative;
  top: 20px;
  margin-left: 10px;
`;
const CommentForm = styled.div`
  justify-content: center;
  display: flex;
  width: 710px;
  height: 85px;
  align-items: center;
`;
const User = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 100%;
  margin: 10px;
`;
const UserCommentList = styled.div`
  width: 700px;
  height: 60px;
  border-radius: 10px;
  background-color: #f7f8f9;
  outline: none;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 10px;
  font-family: 'KakaoBigRegular';
  font-style: normal;
  font-size: 15px;
  line-height: 23px;
`;
const Nickname = styled.div`
  font-size: 15px;
  font-family: 'KakaoBigBold';
  font-style: normal;
  text-align: center;
  position: relative;
  right: 230px;
  margin-bottom: -10px;
`;
