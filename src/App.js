import React from 'react';
import { Global, css } from '@emotion/core';
import styled from '@emotion/styled';
import Contact from './components/Contact/index.jsx';
import Resume from './components/Resume/index.jsx';
import Article from './components/Article/index.jsx';
import About from './components/About/index.jsx';
import Project from './components/Projects/index.jsx';
const bodyFillColor = `#89B0AE`;

const ContainerColumn = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: none;
    grid-template-rows: repeat(3, 1fr);
  }
`;

const ContainerRow = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 1rem;
`;

const App = () => {
  return (
    <div>
      <ContainerColumn>
        <Global
          styles={css`
            body {
              background: ${bodyFillColor};
              margin: 0;
              padding: 0;
            }
          `}
        />
        <About />
        <Project />
        <ContainerRow>
          <Article />
          <Resume />
          <Contact />
        </ContainerRow>
      </ContainerColumn>
    </div>
  );
};

export default App;
