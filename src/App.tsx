import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import CardComponent from './componets/Card';

const PageContainter = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #2e2e3b;
  background-image: 
        radial-gradient(at 47% 33%, hsl(210.00, 0%, 0%) 0, transparent 59%), 
        radial-gradient(at 82% 65%,hsl(321.08, 100%, 36%), transparent 55%);
  @media (max-height: 740px) {
    height: auto;
  }
`;

const H1 = styled.h1`
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 3.25rem;
  font-family: "Montserrat", sans-serif;
  color: #fff;
  text-align: center;
  margin: 2em;
`;

function App() {
  return (
    <PageContainter>
      <H1> Random Cat Genorator </H1>
      <CardComponent />
    </PageContainter>
  );
};

export default App;