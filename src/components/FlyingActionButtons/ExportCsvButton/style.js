import styled from 'styled-components';

export const ButtonFAB = styled.button`
  cursor: pointer;
  position: fixed;
  bottom: 20px;
  right: 16px;
  width: 40px;
  height: 40px;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  color: #000;
  font-size: 16px;
  transition: background-color 0.3s ease;
  z-index: 997; /* Garante que o botão fique sobre outros elementos */
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: rgba(255, 255, 255, 0.87);
    border: none;
  }

  &:disabled {
    opacity: 0.5;
    cursor: block;
    transition: wait;
  }

  &:disabled:hover {
    background-color: #fff;
    border-style: none;
    cursor: wait;
  }

  &:focus,
  &:focus-visible {
    outline: none;
  }

  img {
    padding-left: 4px;
    width: 28px;
    height: 28px;
  }
`;