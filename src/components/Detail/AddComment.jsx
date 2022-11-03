import React from "react";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { __addComment } from "../../redux/modules/commentsSlice";

const AddComment = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const [comment, setComment] = useState({
    comment: "",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setComment({
      ...comment,
      [name]: value,
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (comment.comment.trim() === "") {
      return alert("모든항목을 입력해주세요");
    }

    dispatch(__addComment({ postId: id, ...comment }));
    setComment({
      comment: "",
    });
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <Container>
        <CommentForm>
          <User src="https://t1.kakaocdn.net/together_image/common/avatar/avatar04.png" />
          <UserInput
            value={comment.comment}
            type="text"
            name="comment"
            onChange={onChangeHandler}
          />
        </CommentForm>
      </Container>
      <Commentdown>
        <AddButton>등록</AddButton>
      </Commentdown>
    </form>
  );
};

export default AddComment;

const Container = styled.div`
  justify-content: center;
  text-align: center;
  align-items: center;

  display: flex;
  flex-wrap: wrap;
  position: relative;
`;
const CommentForm = styled.div`
  justify-content: center;
  display: flex;
  width: 710px;
  height: 85px;
  align-items: center;
`;

const AddButton = styled.button`
  position: relative;
  margin-top: -3px;
  left: 310px;
  cursor: pointer;
  outline: none;
  border: none;
  background-color: #999999;
  color: white;
  font-size: 15px;
  font-family: "KakaoBigRegular";
  border-radius: 10px 10px 10px 10px;
  width: 80px;
  height: 35px;
  line-height: 35px;
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;
`;

const Commentdown = styled.div`
  justify-content: center;
  text-align: center;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  position: relative;
`;

const User = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 100%;
  margin: 10px;
`;

const UserInput = styled.input`
  width: 700px;
  height: 60px;
  border-radius: 10px;
  background-color: #f7f8f9;
  outline: none;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 10px;
`;
