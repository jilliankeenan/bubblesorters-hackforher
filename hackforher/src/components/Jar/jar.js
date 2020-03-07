import React, { Fragment, useState } from "react"
import styled from 'styled-components';

import "./jar.scss"
import Button from "../Button";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Buster = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 46%;
  left: calc(50% - 63px);
  transition: all .3s ease;

  opacity: 0;

  ${({show}) => show ? 'opacity: 1;' : ''}
`;

const LEVEL_HEIGHT = 20;
const MAX_LEVEL = 12

const Jar = ({ level = 0 }) => {
  const levels = [];

  for (let index = 0; index < level && index < MAX_LEVEL; index++) {
    const currentY = 393 - (index * LEVEL_HEIGHT);
    levels.push(
      <rect key={index}
        fill="#8fc2f1"
        height={LEVEL_HEIGHT}
        width="233"
        x="139"
        y={currentY}
      />
    )
  }

  const isBustButtonShowing = levels.length > 0;

  return (
    <Fragment>
      <Wrapper>
        <svg viewBox="0 0 512 512" style={{ height: '60vh' }}>
          <path
            fill="#fff"
            d="M507.242 206.72C484.267 88.918 380.526 0 256 0 114.616 0 0 114.616 0 256c0 118.597 80.653 218.342 190.098 247.42l317.144-296.7z"
          ></path>
          <path
            fill="#fff"
            d="M512 256a257.19 257.19 0 00-4.758-49.28L356.174 55.652 124.383 437.704l65.715 65.715C211.127 509.007 233.213 512 256 512c141.385 0 256-114.615 256-256z"
          ></path>
          <path
            fill="#c9e5ff"
            d="M356.174 133.565v-33.391H211.478L256 450.783h100.174c24.487 0 44.522-20.035 44.522-44.522V178.087c0-24.487-20.035-44.522-44.522-44.522z"
          ></path>
          <path
            fill="#C9E5FF"
            d="M155.826 100.174v33.391c-24.487 0-44.522 20.035-44.522 44.522v228.174c0 24.487 20.035 44.522 44.522 44.522H256V100.174H155.826z"
          ></path>
          <path
            fill="#C9A06C"
            d="M356.174 55.652H256l-22.261 44.522h122.435z"
          ></path>
          <path fill="#DBBC82" d="M155.826 55.652H256v44.522H155.826z"></path>
          <path
            fill="#c9e5ff"
            d="M367.304 89.043H256l-22.261 11.131L256 111.304h111.304z"
          ></path>
          <path fill="#C9E5FF" d="M144.696 89.043H256v22.261H144.696z"></path>
          <path
            fill="#fff"
            d="M222.609 185.878L256 428.522h100.174c12.275 0 22.261-9.986 22.261-22.261V208.139l-155.826-22.261z"
          ></path>
          <path
            fill="#fff"
            d="M356.174 155.826h-22.261v-44.522H256l-33.391 51.2L256 208.139c30.603.003 30.606 17.809 61.214 17.809 30.611 0 30.611-17.809 61.221-17.809v-30.052c0-12.275-9.986-22.261-22.261-22.261z"
          ></path>
          <path
            fill="#fff"
            d="M133.565 208.139v198.122c0 12.275 9.986 22.261 22.261 22.261H256V185.878l-122.435 22.261z"
          ></path>
          <path
            fill="#FFF"
            d="M178.087 111.304v44.522h-22.261c-12.275 0-22.261 9.986-22.261 22.261v30.052c30.608 0 30.608 17.809 61.215 17.809 30.606 0 30.606-17.809 61.213-17.809.007 0 .007-96.835.007-96.835h-77.913z"
          ></path>
          {levels}
        </svg>
      </Wrapper>
      <Buster show={isBustButtonShowing}>
        <Button>Bust it!</Button>
      </Buster>
    </Fragment>
  );
};

export default Jar
