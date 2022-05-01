import React from "react";
import styled from "styled-components";

const Loader = styled.div`
 background-color: #78757533;
  box-shadow: 0 1px 2px 1px rgba(0,0,0,.08), 0 -1px 3px 0 rgba(0,0,0,0.06);
  position: relative;
  border-radius: 2px;
  margin-bottom: 0;
  overflow: hidden;
  width: 300px;
  height: 320px;
  border-radius: 20px;

  &:before {
    content: '';
    display: block;
    background-color: #ffffff00;
  }

  &:after {
    content: '';
    background-color: #333;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    animation-duration: 0.6s;
    animation-iteration-count: infinite;
    animation-name: loader-animate;
    animation-timing-function: linear;
    background: -webkit-linear-gradient(left, rgba(255,255,255,0) 0%, rgba(255,255,255,0.6) 30%, rgba(255,255,255,0) 81%);
    background: -o-linear-gradient(left, rgba(255,255,255,0) 0%, rgba(255,255,255,0.6) 30%, rgba(255,255,255,0) 81%);
    background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.6) 30%, rgba(255,255,255,0) 81%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#00ffffff',GradientType=1 );
  } 

// Loader animation
@keyframes loader-animate{
 0%{
    transform: translate3d(-100%, 0, 0);
  }
 100%{
    transform: translate3d(100%, 0, 0);
  }
}
`;

const PageContainter = styled.div`
    height: 300px;
`;

export default function Preloader() {
    return (
        <PageContainter>
            <Loader />
        </PageContainter>
    )
}