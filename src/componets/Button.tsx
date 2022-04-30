import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";

const Button = styled.button`
  display: inline-block;
  padding: 24px 32px;
  border: 0;
  text-decoration: none;
  border-radius: 15px;
  background-color: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.1);
  backdrop-filter: blur(30px);
  color: rgba(255,255,255,0.8);
  font-size: 14px;
  letter-spacing: 2px;
  cursor: pointer;
  text-transform: uppercase;
   &:hover {
    background-position: right center; /* change the direction of the change here */
    background-color: rgba(255,255,255,0.2);
}
`;

export default function ButtonComponent() {

  return (
    <Button>
  New Kitty
    </Button>
  );
}