import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import CardComponent from './componets/Card';

const PageContainter = styled.div`
  display: flex;
  margin: 0;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #2e2e3b;
  background-image: 
        radial-gradient(at 47% 33%, hsl(210.00, 0%, 0%) 0, transparent 59%), 
        radial-gradient(at 82% 65%,hsl(321.08, 100%, 36%), transparent 55%);
`;


function App() {


  return (
    <PageContainter>
      <CardComponent />
    </PageContainter>
  );
};

export default App;