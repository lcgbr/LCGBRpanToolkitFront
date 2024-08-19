import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  height: 400px;
  width: 265px;
  border-radius: 8px;
  position: relative;
  ${({ $hasError }) => $hasError && 'border: 2px solid #E84855;'}
`;

export const X = styled.div`
  color: #000;
  text-align: right;
  height: 24px;
  width: 92%;
  font-weight: bold;
  user-select: none;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  /* height: 360px; */
  width: 90%;

  img {
    max-height: 148px;
    max-width: 265px;
  }

  section {
    text-align: left;
    width: 80%;

    h1{
      color: #000;
      font-size: 16px;
      font-weight: bold;
      line-height: 1.2;
      margin-bottom: 0;

      //https://dev.to/geovrodri/dica-css-limitar-tamanho-de-um-texto-32m9
      display: -webkit-box;
      overflow: hidden; // Removendo barra de rolagem
      text-overflow: ellipsis; // Adicionando "..." ao final
      -webkit-line-clamp: 3; // Quantidade de linhas
      -webkit-box-orient: vertical;
    }

    h2 {
      color: #07B2FD;
      font-size: 16px;
      font-weight: bold;
      line-height: 1.2;
      margin: 4px 0 0 0;

      display: -webkit-box;
      overflow: hidden; // Removendo barra de rolagem
      text-overflow: ellipsis; // Adicionando "..." ao final
      -webkit-line-clamp: 4; // Quantidade de linhas
      -webkit-box-orient: vertical;
    }

    p {
      color: #000;
      font-size: 11px;
      font-weight: 500;
      line-height: 1.2;
      margin: 14px 0 4px 0;

      display: -webkit-box;
      overflow: hidden; // Removendo barra de rolagem
      text-overflow: ellipsis; // Adicionando "..." ao final
      -webkit-line-clamp: 4; // Quantidade de linhas
      -webkit-box-orient: vertical;
    }
  }

  div {
    background-color: #07B2FD;
    border-radius: 12px;
    color: #ffffff;
    font-size: 12px;
    font-weight: bold;
    padding: 10px;
    text-align: center;
    width: 70%;
    position: absolute;
    bottom: 16px;
  }
`;