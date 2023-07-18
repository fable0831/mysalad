import styled from '@emotion/styled';

import { FaX } from 'react-icons/fa6';
import smilesalad from '../assets/smilesalad.png';

const SignInModal = () => {
  return (
    <StyledSection>
      <StyledWrapper>
        <LeftBox>
          <img src={smilesalad} alt="웃는 샐러드 아이콘" />
          <div className="welcome">환영합니다!</div>
        </LeftBox>
        <RightBox>
          <div className="exit"></div>
          <div className="content">
            <div className="upperWrapper">
              <span>{FaX}</span>
            </div>
            <div className="lowerWrapper">
              <span>이제 mysalad의 모든 혜택을 누려보세요!</span>
              <span className="signUp">회원가입</span>
            </div>
          </div>
        </RightBox>
      </StyledWrapper>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
  position: fixed;
  background-color: rgb(128, 128, 128, 0.1);
`;
const StyledWrapper = styled.div`
  width: 35%;
  height: 45%;
  background: white;
  opacity: 1 !important;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LeftBox = styled.div`
  width: 30%;
  height: 100%;
  background: #f8f9fa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 80%;
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
  width: 70%;
  height: 100%;
  .content {
    .upperWrapper {
    }
    .lowerWrapper {
      .signUp {
        color: #12b886;
      }
    }
  }
`;

export default SignInModal;
