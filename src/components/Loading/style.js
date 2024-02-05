import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const spinnerAnimation = keyframes`
  100% {
    transform: rotate(1turn);
  }
`;

export const Spinner = styled.div`
  margin-top: 128px;
  width: 56px;
  height: 56px;
  display: grid;
  border: 4.5px solid #0000;
  border-radius: 50%;
  border-color: #06B2FC #0000;
  animation: ${spinnerAnimation} 1s infinite linear;

  &::before,
  &::after {
    content: "";
    grid-area: 1/1;
    margin: 2.2px;
    border: inherit;
    border-radius: 50%;
  }

  &::before {
    border-color: #dbdcef #0000;
    animation: inherit;
    animation-duration: 0.5s;
    animation-direction: reverse;
  }

  &::after {
    margin: 8.9px;
  }
`;
