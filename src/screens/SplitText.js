import React from 'react';
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, SplitLetters } from 'react-gsap';

const SplitTextStyled = styled.div`
  overflow: hidden;
  
  .section {
    height: 100%;
    width:100%;
  }
  .textContainer {
    position: relative;
    display: inline-block;
    transform-origin: left;
  }
  .text, .text2 {
    position: relative;
    font-size: 80px;
    display: inline-block;
    color:#4592af;
    font-family: 'OCR A', 'OCR A', monospace;
  }
`;


export default function SplitText({ word }) {
  return (<SplitTextStyled>
    <div className="section" />
    <Controller>
      <Scene
        pin={false}
        reverse={true}
        duration={500}
        offset={-300}
      >
        <Tween
          wrapper={
            <div className="textContainer" />
          }
          staggerFrom={{
            left: -300,
            rotation: -720,
            opacity: 0,
            color: '#ff0000',
            ease: 'Expo.easeOut',
          }}
          stagger={0.15}
        >
          <SplitLetters>
            <span className="text">{word}</span>
          </SplitLetters>
        </Tween>
      </Scene>
      <div className="section" />
    </Controller>
    <div className="section" />
  </SplitTextStyled>);

};