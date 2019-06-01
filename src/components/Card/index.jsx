import React from 'react';

import styled from '@emotion/styled';

const WhiteCard = styled.div`
  background-color: #faf9f9;
  border-radius: 30px;
  margin-left: 10px;
`;

export default function Card(props) {
  return <WhiteCard {...props}>{props.children}</WhiteCard>;
}
