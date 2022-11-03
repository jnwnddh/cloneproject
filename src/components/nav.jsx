import React from 'react';
import styled from 'styled-components';
import { ReactComponent as logo_pc } from '../images/logo_pc.svg';
import { AiOutlineSearch } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { checkOutMemberThunk } from '../redux/modules/authSlice';
import { useCookies } from 'react-cookie';
import { useState } from 'react';
import axios from 'axios';

const Nav = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [cookie, setCookie, removeCookie] = useCookies();

  const goToWritepage = () => {
    cookie.Access ? navigate('/Write') : alert('로그인 해주세요.');
  };

  const goToLoginpage = () => {
    navigate('/login');
  };

  const logOutHandler = () => {
    axios.defaults.headers.post['authorization'] = cookie.Access;
    axios.defaults.headers.post['refresh-token'] = cookie.Refresh;
    localStorage.removeItem('emailId');
    removeCookie('Access', { path: '/' });
    removeCookie('Refresh', { path: '/' });

    axios
      .post('https://bkyungkeem.shop/api/auth/member/logout')
      .then((res) => {
        if (res.data.success) alert('로그아웃에 성공했습니다.');
        else alert(res.data.error.message);
        window.location.reload();
      })
      .catch((err) => {
        alert('logout failed');
        window.location.reload();
      });
  };

  return (
    <div>
      <TogetherNavbar>
        <TitleIcon
          onClick={() => {
            navigate('/');
            window.location.reload();
          }}
        />
        <NavBtnBox>
          <NavButton
            onClick={() => {
              navigate('/');
              window.location.reload();
            }}
          >
            같이기부
          </NavButton>
          <NavButton>모두의행동</NavButton>
          <NavButton>마음날씨</NavButton>
          <NavButton>더보기</NavButton>
        </NavBtnBox>

        <MenuButtonContainer>
          <MenuWriteButton onClick={goToWritepage}>글쓰기</MenuWriteButton>
          <div>
            {cookie.Access ? (
              <MenuLoginButton onClick={logOutHandler}>
                로그아웃
              </MenuLoginButton>
            ) : (
              <MenuLoginButton onClick={goToLoginpage}>로그인</MenuLoginButton>
            )}
          </div>
          <SearchIcon>
            <AiOutlineSearch />
          </SearchIcon>
        </MenuButtonContainer>
      </TogetherNavbar>
    </div>
  );
};

export default Nav;

//전체 영역
const TogetherNavbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 70px;

  border-bottom: 1px solid #eeeeee;
`;

//카카오같이가치 아이콘
const TitleIcon = styled(logo_pc)`
  /* background-color: skyblue; */

  :hover {
    cursor: pointer;
  }
`;

const NavBtnBox = styled.div`
  /* background-color: red; */
  display: flex;
  justify-content: center;
  align-items: center;

  padding-left: 140px;
  height: 100%;
`;

//메뉴 버튼
const NavButton = styled.div`
  font-family: KakaoBigBold, sans-serif;
  font-weight: 400;
  line-height: 24px;
  font-size: 14px;

  color: #202020;

  margin-left: 40px;

  background-color: transparent;

  border: transparent;

  @media (hover: hover) {
    :hover {
      text-decoration: 2px black underline;
      text-underline-offset: 28px;

      cursor: pointer;
    }
  }
`;

// 로그인, 글쓰기 버튼

const MenuButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MenuWriteButton = styled.button`
  background-color: transparent;
  height: 24px;

  padding-left: 17px;
  padding-right: 17px;

  margin-right: 15px;
  margin-left: 130px;

  font-size: 12px;
  border: 1px solid #e9e9e9;
  border-radius: 15px;

  :hover {
    cursor: pointer;
  }
`;

const MenuLoginButton = styled.button`
  background-color: transparent;
  height: 24px;

  padding-left: 17px;
  padding-right: 17px;

  margin-right: 15px;

  font-size: 12px;
  border: 1px solid #e9e9e9;
  border-radius: 15px;

  :hover {
    cursor: pointer;
  }
`;

//검색 버튼
const SearchIcon = styled.div`
  font-size: 25px;
  :hover {
    cursor: pointer;
  }
`;
