import styled from 'styled-components';

export const Image = styled.img`
  /* line-height: 0; */
  max-height: 100px;
  min-width: 265px;
  border-radius: 8px;
`;

export const Container = styled.div`
  background-color: #07B2FD;
  height: 100px;
  width: 265px;
  border-radius: 12px;
  padding: 12px;
  box-sizing: border-box;
  position: relative;
  
  h1 {
    text-align: left;
    font-size: 14px;
    font-weight: 500;
    margin: 0;

    //https://dev.to/geovrodri/dica-css-limitar-tamanho-de-um-texto-32m9
    white-space: nowrap;
    overflow: hidden; // Removendo barra de rolagem
    text-overflow: ellipsis;
  }

  div {
    background-color: white;
    color: #000000;
    border-radius: 24px;
    font-size: 10px;
    font-weight: 500;
    text-align: center;
    padding: 2px 12px;
    position: absolute;
    bottom: 12px;
  }
`;