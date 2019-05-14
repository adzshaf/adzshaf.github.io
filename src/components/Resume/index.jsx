import React from 'react';
import styled from '@emotion/styled';
import Card from '../Card/index.jsx';

const ResumeCard = styled(Card)`
  @import url('https://fonts.googleapis.com/css?family=Nunito+Sans');
  font-family: 'Nunito Sans', sans-serif;
  font-weight: bold;
  padding: 30px;

  p {
    text-align: center;
    font-size: 40px;
  }
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

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  @import url('https://fonts.googleapis.com/css?family=Nunito+Sans');
  font-family: 'Nunito Sans', sans-serif;
  border: none;
  height: 40px;
  width: 150px;
  font-size: 24px;
  font-weight: normal;
  background-color: #edc5fb;
  border-radius: 30px;
  margin-top: 10px;
`;

export default function Resume() {
  return (
    <ResumeCard>
      <Title>
        resume <span role="img">💼</span>
      </Title>
      <br />
      <Container>
        <a href="https://docs.google.com/document/d/1okRHsm1cmjAIQSJLuhQsAuGqWXIO8PJCfaeQpW6CgWI/edit?usp=sharing">
          <Button>Click here</Button>
        </a>
      </Container>
    </ResumeCard>
  );
}
