import React, { useState } from 'react';

import logo_kakao from '../../images/logo_kakao.png';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { checkInMemberThunk } from '../../redux/modules/authSlice';
import axios from 'axios';
import { useCookies } from 'react-cookie';

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [errorMsg, setErrorMsg] = useState('');

  const [cookie, setCookie, removeCookie] = useCookies();
  const [signIn, setSignIn] = useState({
    emailId: '',
    password: '',
  });

  const onChangeSignIn = (e) => {
    const { name, value } = e.target;
    setSignIn({ ...signIn, [name]: value });
  };

  const onClickSignIn = () => {
    const loginInfo = {
      emailId: signIn.emailId,
      password: signIn.password,
    };

    // if (data.success === true) {
    //           setCookie('Access', data.request.getResponseHeader('Authorization'), {
    //             expires: 30,
    //           });
    //           setCookie('Refresh', data.request.getResponseHeader('Refresh-Token'), {
    //             expires: 30,
    //           });
    //           return thunkAPI.fulfillWithValue(data);
    //         }

    axios
      .post('https://bkyungkeem.shop/api/member/login', loginInfo)
      .then((res) => {
        if (res.data.success) {
          console.log(res.data.data.emailId);
          setCookie('Access', res.request.getResponseHeader('authorization'), {
            path: '/',
          });
          setCookie('Refresh', res.request.getResponseHeader('refresh-token'), {
            path: '/',
          });
          localStorage.setItem('emailId', res.data.data.emailId);
          navigate('/');
        } else {
          setErrorMsg(res.data.error.message);
        }
      });
  };

  return (
    <LoginUpWrap>
      <div>
        <KakaoImg src={logo_kakao} alt='' />
        <LoginContainer>
          <LoginFormContainer>
            <LoginInputContainer>
              <LoginInput
                type='text'
                name='emailId'
                placeholder='이메일을 작성해주세요'
                value={signIn.emailId}
                onChange={onChangeSignIn}
              />
              <LoginInput
                type='password'
                name='password'
                placeholder='비밀번호를 작성해주세요'
                value={signIn.password}
                onChange={onChangeSignIn}
              />
            </LoginInputContainer>
            <ErrorMsg>{errorMsg}</ErrorMsg>
            <LoginBtnContainer>
              <LoginBtn onClick={onClickSignIn}>로그인</LoginBtn>
              <CancelBtn
                onClick={() => {
                  navigate('/');
                }}
              >
                취소
              </CancelBtn>
            </LoginBtnContainer>
          </LoginFormContainer>
          <BottomBtnBox>
            <SignUpBtn
              onClick={() => {
                navigate('/signup');
              }}
            >
              회원가입
            </SignUpBtn>
            <RightBox>
              <SearchId>계정찾기 </SearchId>
              <SearchPw>비밀번호 찾기</SearchPw>
            </RightBox>
          </BottomBtnBox>
        </LoginContainer>
      </div>
    </LoginUpWrap>
  );
};

export default LoginForm;

const LoginUpWrap = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginContainer = styled.div`
  width: 420px;
  height: 380px;

  border: 1px solid #e9e9e9;
`;

const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const KakaoImg = styled.img`
  width: 90px;
  height: 30px;

  padding-top: 50px;

  margin: 0px 0px 20px 170px;
`;

const LoginInputContainer = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  margin: 50px 0px 15px 0px;
`;

const LoginInput = styled.input`
  border: transparent;
  border-bottom: 2px solid #e5e5e5;

  width: 350px;
  height: 25px;
  margin-bottom: 10px;
`;

const LoginBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginBtn = styled.button`
  width: 350px;
  height: 35px;
  margin: 30px 15px 20px 15px;

  background-color: #fee500;
  border: transparent;

  font-family: Roboto-Regular;
  font-weight: bold;
`;

const CancelBtn = styled.button`
  width: 350px;
  height: 35px;

  background-color: #e5e5e5;
  border: transparent;

  font-family: Roboto-Regular;
  font-weight: bold;
`;

const BottomBtnBox = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 60px 20px 0px 30px;
`;

const SignUpBtn = styled.div`
  float: left;
  font-family: Roboto-Regular;
  font-size: 12px;
  color: #191919;
`;

const RightBox = styled.div`
  display: flex;
  float: right;
`;

const SearchId = styled.div`
  font-family: Roboto-Regular;
  font-size: 12px;
  color: #191919;
  margin-right: 5px;
`;

const SearchPw = styled.div`
  font-family: Roboto-Regular;
  font-size: 12px;
  color: #191919;
`;

const ErrorMsg = styled.div`
  font-size: 12px;
  font-weight: bold;

  /* background-color: blue; */
  margin-left: 35px;

  width: 350px;
  height: 5px;

  text-align: center;
  color: red;
  font-family: Roboto-Regular;
`;
