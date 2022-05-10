import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import CardComponent from './componets/Card';

const PageContainter = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  justify-content: space-evenly;
  align-items: center;
`;

const H1 = styled.h1`
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 3.25rem;
  font-family: "Montserrat", sans-serif;
  color: #fff;
  text-align: center;
  margin: 2em;
  @media (max-height: 740px) {
    margin: 1em;
    font-size: 1.9rem;
  }
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