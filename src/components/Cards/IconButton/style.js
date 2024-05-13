import styled from 'styled-components';

export const Container = styled.button`
  padding: 0;
  width: 32px;
  height: 32px;
  background-color: #fff;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 20px;
    height: 20px;
  }

  &:hover {
    background-color: #06B2FC;
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
    transition: none;
  }

  &:disabled:hover {
    background-color: #fff;
    border-style: none;
  }
`;