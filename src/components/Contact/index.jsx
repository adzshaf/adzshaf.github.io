import React from 'react';
import styled from '@emotion/styled';
import Card from '../Card/index.jsx';
import twitter from '../../images/twitter.png';
import email from '../../images/email.png';
import github from '../../images/github.png';
import linkedin from '../../images/linkedin.png';

const ContactCard = styled(Card)`
  @import url('https://fonts.googleapis.com/css?family=Nunito+Sans');
  font-family: 'Nunito Sans', sans-serif;
  font-weight: bold;
  padding: 30px;
`;

const Title = styled.span`
  position: relative;
  z-index: 1;
  font-size: 30px;

  ::before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: -0.25em;
    right: -0.25em;
    background-color: #ffd6ba;
    transform-origin: bottom center;
    transform: scaleY(0.1);
    transition: all 0.1s ease-in-out;
  }

  :hover::before {
    transform: scaleY(1);
    background-color: #ffd6ba;
  }
`;

const List = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;

  img {
    width: 40px;
    height: 40px;
  }
`;

export default function Contact() {
  return (
    <ContactCard>
      <Title>
        contact <span role="img">🔗</span>
      </Title>
      <List>
        <a href="https://twitter.com/adzshaf">
          <img src={twitter} alt="Twitter" />
        </a>
        <a href="https://id.linkedin.com/in/shafiya-adzhani-455938177">
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a href="https://github.com/adzshaf">
          <img src={github} alt="Github" />
        </a>
        <a href="mailto:shafiya.adzhani@gmail.com">
          <img src={email} alt="email" />
        </a>
      </List>
    </ContactCard>
  );
}
