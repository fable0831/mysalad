import styled from '@emotion/styled';
import { SiGithub, SiNotion, SiVelog } from 'react-icons/si';

const Footer = () => {
  const CONTACT_ICON = [
    {
      url: 'https://github.com/fable0831',
      icon: <SiGithub />,
    },
    {
      url: 'https://velog.io/@fable0831',
      icon: <SiVelog />,
    },
    {
      url: 'https://airy-visitor-9bb.notion.site/1f1c865aa67649e49a1efeeb43729b09?pvs=4',
      icon: <SiNotion />,
    },
  ];

  return (
    <StyledFooter>
      <StyledSection>
        <p>Copyright © 2023 fable0831. All rights reserved</p>
        <div className="contact">
          {CONTACT_ICON.map(data => {
            return (
              <StyledLink href={data.url} target="_blank" rel="noopener noreferrer">
                {data.icon}
              </StyledLink>
            );
          })}
        </div>
      </StyledSection>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  display: flex;
  height: 4rem;
  width: 100%;
  background-color: #000000;
  color: #ffffff;
  align-items: center;
  justify-content: center;
`;

const StyledSection = styled.section`
  display: flex;
  width: 80%;
  height: 100%;
  justify-content: space-around;
  align-items: center;
  p {
    font-size: 1rem;
  }
  .contact {
    display: flex;
    font-size: 2rem;
    gap: 1rem;
  }
`;

const StyledLink = styled.a`
  color: white;
`;

export default Footer;
