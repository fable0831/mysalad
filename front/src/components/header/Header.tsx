import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { openSigninModal } from '../../app/authModalSlice';
import { RootState } from '../../app/store';
import MySalad from '../../assets/mysalad.png';
import AuthModal from '../../pages/AuthModal';
import Button from '../button/Button';
import NavLinks from '../link/NavLinks';

const Header = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [userText, setUserText] = useState('로그인');

  const authModalStatus = useSelector((state: RootState) => state.reducer.authModal.status);
  const dispatch = useDispatch();

  const handleSigninClick = () => {
    dispatch(openSigninModal());
    console.log(authModalStatus)
  };


  useEffect(() => {
    if(authModalStatus === 2){
      setUserText('회원 가입')
    } else if(authModalStatus === 1){
      setUserText('로그인');
    }
  }, [authModalStatus])
  

  return (
    <StyledHeader>
      {authModalStatus ===0 ? null : <AuthModal sign={userText} />}
      <StyledWrap>
        <Logo>
          <img src={MySalad} alt="mysalad의 로고" />
        </Logo>
        <Nav>
          <ul>
            <NavLinks to="/" children="홈" />
            <NavLinks to="/calculate" children="계산기" />
            <NavLinks to="/hello" children="방명록" />
          </ul>
        </Nav>
        {isLogin ? (
          <Side onClick={handleSigninClick}>
            <Button color="#426D53" children="로그인" />
          </Side>
        ) : (
          <Side>
            <div></div>
          </Side>
        )}
      </StyledWrap>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  height: 4rem;
  display: flex;
  justify-content: center;
`;

const StyledWrap = styled.div`
  height: 100%;
  display: flex;
  width: 90%;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
`;

const Logo = styled.div`
  width: 33%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 60%;
  }
`;

const Nav = styled.nav`
  width: 33%;
  display: flex;
  ul {
    width: 100%;
    display: flex;
    gap: 2rem;
    list-style: none;
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

const Side = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33%;
`;

export default Header;
