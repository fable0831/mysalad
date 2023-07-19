import styled from '@emotion/styled';

import { FaX } from 'react-icons/fa6';
import ficon from '../assets/ficon.png';
import gicon from '../assets/gicon.png';
import hicon from '../assets/hicon.png';
import smilesalad from '../assets/smilesalad.png';

const SOCIAL_ICON = [hicon, gicon, ficon];
const SignInModal = () => {
  const loginGoogle = () => {};

  const loginFacebook = () => {};

  const loginGithub = () => {};

  const onSignUp = () => {};
  return (
    <StyledSection>
      <StyledWrapper>
        <LeftBox>
          <img src={smilesalad} alt="웃는 샐러드 아이콘" />
          <div className="welcome">환영합니다!</div>
        </LeftBox>
        <RightBox>
          <div className="exit">
            <span>
              <FaX />
            </span>
          </div>
          <div className="content">
            <div className="upperWrapper">
              <h2>로그인</h2>
              <h4>이메일로 로그인</h4>
              <form>
                <input placeholder="이메일을 입력하세요" />
                <button>로그인</button>
              </form>
              <h4>소셜 계정으로 로그인</h4>
              <div className="social">
                {SOCIAL_ICON.map(data => {
                  return (
                    <button>
                      <img src={data} alt="소셜 로그인 아이콘" />
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="lowerWrapper">
              <span>지금 가입하시면 고마워요!</span>
              <div className="signUp">회원가입</div>
            </div>
          </div>
        </RightBox>
      </StyledWrapper>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  position: fixed;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  display: flex;
  z-index: 99;
  background-color: rgb(128, 128, 128, 0.1);
`;
const StyledWrapper = styled.div`
  width: 600px;
  height: 540px;
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 12px 0px;
`;

const LeftBox = styled.div`
  width: 220px;
  background: #f8f9fa;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
  }
  .welcome {
    font-size: 1.75rem;
    margin-top: 1.5rem;
    color: #495057;
    text-align: center;
    font-weight: 600;
  }
`;

const RightBox = styled.div`
  flex: 1 1 0%;
  display: flex;
  padding: 1.5rem;
  flex-direction: column;
  background: #ffffff;
  .exit {
    display: flex;
    justify-content: flex-end;
    font-size: 1.5rem;
    margin-bottom: 2.25rem;
    color: #868e96;
    span {
      cursor: pointer;
    }
  }
  .content {
    flex: 1 1 0%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .upperWrapper {
      h4 {
        margin: 1rem 0;
        color: #868e96;
      }
      form {
        width: 100%;
        display: flex;
        height: 3rem;
        margin-bottom: 2.5rem;
        input {
          border-top-left-radius: 2px;
          border-bottom-left-radius: 2px;
          font-size: 1rem;
          color: #212529;
          padding: 1rem;
          background: #ffffff;
          outline: none;
          border-right: none;
          flex: 1 1 0%;
          border: 1px solid #12b886;
        }
        button {
          background: #12b886;
          color: #ffffff;
          font-size: 1rem;
          font-weight: bold;
          outline: none;
          border: none;
          border-top-right-radius: 2px;
          border-bottom-right-radius: 2px;
          width: 6rem;
          word-break: keep-all;
          cursor: pointer;
        }
      }
      .social {
        display: flex;
        justify-content: space-around;
        margin-top: 1.5rem;
        button {
          width: 3rem;
          height: 3rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          background-color: transparent;
          cursor: pointer;
          img {
            width: 100%;
          }
        }
      }
    }
    .lowerWrapper {
      text-align: right;
      span {
        margin-right: 0.3rem;
      }
      .signUp {
        display: inline-block;
        font-weight: bold;
        cursor: pointer;
        color: #12b886;
      }
    }
  }
`;

export default SignInModal;
