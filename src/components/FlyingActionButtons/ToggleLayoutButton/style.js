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
  transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.1s ease;
  z-index: 997; /* Garante que o botão fique sobre outros elementos */
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: rgba(255, 255, 255, 0.87);
    border: none;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.7);
    transform: scale(1.05); /* Leve aumento ao passar o mouse */
  }

  &:active {
    background-color: #e0e0e0;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
    transform: scale(0.95); /* Leve redução para simular o efeito de "pressionado" */
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
    width: 28px;
    height: 28px;
  }
`;