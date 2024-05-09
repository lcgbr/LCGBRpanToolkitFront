import styled from 'styled-components';

export const Overlay = styled.main`
  left: 0;
  top: 0;
  background: rgba(0,0,0,0.8);
  backdrop-filter: blur(4.5px);
  width: 100%;
  height: 100%;
  position: fixed;
  display:flex;
  align-items: center;
  justify-content: center;
  z-index: 998;
`;

export const ModalContainer = styled.div`
  position: relative;
  background: #fff;
  border-radius: 8px;
  padding: 64px 32px 32px 32px;
  color: #1a1a1a;
  text-align: left;
  font-weight: 600;
  

  display:flex;
  flex-direction: column;
  line-break: normal;
  overflow: hidden;
  max-width: 90%;
  z-index: 999;
  cursor: text;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: #1a1a1a;
  border: 0;
  border-radius: 100%;
  height: 50px;
  width: 50px;

  &:hover {
    color: #535bf2;
  }
`;