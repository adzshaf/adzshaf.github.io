import React from 'react';
import styled from '@emotion/styled';
import Card from '../Card/index.jsx';
import { projects } from '../../data.js';

const ProjectCard = styled(Card)`
  @import url('https://fonts.googleapis.com/css?family=Nunito+Sans');
  font-family: 'Nunito Sans', sans-serif;
  font-weight: bold;
  padding: 20px;

  a:link {
    font-size: 22px;
    color: inherit;
    cursor: pointer;
  }

  a:visited {
    font-size: 22px;
    text-decoration: none;
    color: inherit;
  }

  p {
    @import url('https://fonts.googleapis.com/css?family=Montserrat');
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-weight: normal;
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

const Tag = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Nunito+Sans');
  font-family: 'Nunito Sans', sans-serif;
  5border: none;
  height: 30px;
  width: 100px;
  font-size: 20px;
  font-weight: normal;
  background-color: #edc5fb;
  border-radius: 30px;
  padding: 2px 5px;
  text-align: center;
  margin-bottom: 5px;
`;

const List = projects.map(project => (
  <div>
    <a href={project.link}>
      <li>{project.title}</li>
    </a>
    <p>{project.descriptions}</p>
    <Tag>{project.tags}</Tag>
  </div>
));

export default function Project() {
  return (
    <ProjectCard>
      <Title>
        project <span role="img">💻</span>
      </Title>
      <ul>{List}</ul>
    </ProjectCard>
  );
}
