import React from 'react';
import styled from '@emotion/styled';
import Card from '../Card/index.jsx';

const ArticleCard = styled(Card)`
  @import url('https://fonts.googleapis.com/css?family=Nunito+Sans');
  font-family: 'Nunito Sans', sans-serif;
  font-weight: bold;
  padding: 30px;

  p {
    text-align: center;
    font-size: 25px;
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

export default function Article() {
  return (
    <ArticleCard>
      <Title>
        article <span role="img">✍️</span>
      </Title>
      <p>
        <em>coming soon!</em>
      </p>
    </ArticleCard>
  );
}
