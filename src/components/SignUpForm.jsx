import React, { useState } from 'react';

import logo_kakao from '../images/logo_kakao.png';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addMemberThunk } from '../redux/modules/authSlice';

const SignUpForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isLoding, setIsLoding] = useState(false);

  // 입력 정보 관리
  const [signUp, setSignUp] = useState({
    nickname: '',
    emailId: '',
    password: '',
    passwordConfirm: '',
  });
  // error 메세지 관리
  const [errorMsg, setErrorMsg] = useState('');

  // 입력시 표기
  const onChangeSignUp = (e) => {
    const { name, value } = e.target;
    setSignUp({ ...signUp, [name]: value });
  };

  // 회원가입 클릭 버튼
  const onClickSignUp = () => {
    signUp.nickname = signUp.nickname.toLowerCase();

    dispatch(
      addMemberThunk({
        nickname: signUp.nickname,
        emailId: signUp.emailId,
        password: signUp.password,
        passwordConfirm: signUp.passwordConfirm,
      })
    ).then((res) => {
      // 유효성 검사
      console.log(res);
      if (
        signUp.nickname.trim() === '' ||
        signUp.emailId.trim() === '' ||
        signUp.password.trim() === '' ||
        signUp.passwordConfirm.trim() === ''
      ) {
        setErrorMsg('모든 항목을 입력해주세요.');
        setIsLoding(true);
        return;
      } else if (signUp.password !== signUp.passwordConfirm) {
        setErrorMsg('비밀번호가 일치하지 않습니다.');
        setIsLoding(true);
        return;
      }

      if (res.payload.success === false) {
        setErrorMsg(res.payload.error.message);
      } else {
        setIsLoding(false);
        alert('회원가입 완료!');
        navigate('/login');
      }
    });
  };

  //enter 입력
  const onKeyPress = (e) => {
    if (e.key === 'Enter') onClickSignUp();
  };

  return (
    <SignUpWrap>
      <div>
        <KakaoImg src={logo_kakao} alt='' />
        <SignUpContainer>
          <SignForm>
            <SignUpFormTitle>회원가입</SignUpFormTitle>
            <SignUpInputContainer>
              <SignInput
                type='email'
                placeholder='이메일을 작성해주세요'
                name='emailId'
                onChange={onChangeSignUp}
                onKeyPress={onKeyPress}
              />
              <SignInput
                type='text'
                placeholder='별명을 작성해주세요'
                name='nickname'
                onChange={onChangeSignUp}
                onKeyPress={onKeyPress}
              />
              <SignInput
                type='password'
                placeholder='비밀번호를 작성해주세요'
                name='password'
                onChange={onChangeSignUp}
                onKeyPress={onKeyPress}
              />
              <SignInput
                type='password'
                placeholder='비밀번호를 다시 작성해주세요'
                name='passwordConfirm'
                onChange={onChangeSignUp}
                onKeyPress={onKeyPress}
              />
            </SignUpInputContainer>
            <ErrorMsg>{isLoding && <div>{errorMsg}</div>}</ErrorMsg>

            <SignUpBtnContainer>
              <SignUpBtn onClick={onClickSignUp} onKeyPress={onKeyPress}>
                가입완료
              </SignUpBtn>
              <CancelBtn
                onClick={() => {
                  navigate('/login');
                }}
              >
                취소
              </CancelBtn>
            </SignUpBtnContainer>
          </SignForm>
        </SignUpContainer>
      </div>
    </SignUpWrap>
  );
};

export default SignUpForm;

const SignUpWrap = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignUpContainer = styled.div`
  width: 420px;

  border: 1px solid #e9e9e9;
`;

const SignForm = styled.div`
  display: flex;
  flex-direction: column;
`;

const SignUpFormTitle = styled.div`
  font-family: 'Roboto-Regular';

  font-size: 16px;
  font-weight: bold;
  margin: 30px 0px 0px 35px;
`;

const KakaoImg = styled.img`
  width: 90px;
  height: 30px;

  padding-top: 50px;

  margin: 0px 0px 20px 170px;
`;

const SignUpInputContainer = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  margin: 20px 0px 0px 0px;
`;

const SignInput = styled.input`
  border: transparent;
  border-bottom: 2px solid #e5e5e5;

  width: 350px;
  height: 25px;
  margin-bottom: 10px;
`;

const SignUpBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SignUpBtn = styled.button`
  width: 350px;
  height: 35px;

  margin-bottom: 15px;
  background-color: #fee500;
  border: transparent;

  font-family: Roboto-Regular;
  font-weight: bold;

  :hover {
    cursor: pointer;
    background-color: #efd800;
  }
`;

const CancelBtn = styled.button`
  width: 350px;
  height: 35px;

  margin-bottom: 15px;

  background-color: #e5e5e5;
  border: transparent;
  font-weight: bold;

  font-family: Roboto-Regular;
  :hover {
    cursor: pointer;
    background-color: rgb(0, 0, 0, 0.15);
  }
`;

const ErrorMsg = styled.div`
  font-size: 12px;
  font-weight: bold;

  /* background-color: blue; */
  margin-left: 35px;

  width: 350px;
  height: 25px;

  text-align: center;
  color: red;
  font-family: Roboto-Regular;
`;
