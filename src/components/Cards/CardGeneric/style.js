import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #07B2FD;
  border-radius: 16px;
  color: #ffffff;
  padding: 12px;
  height: 160px;
  width: 265px;
  box-sizing: border-box;
  text-align: left;
  position: relative;

h1 {
  font-size: 16px;
  font-weight: 700;
  line-height: 1.2;
  margin: 0;

  //https://dev.to/geovrodri/dica-css-limitar-tamanho-de-um-texto-32m9
  display: -webkit-box;
  overflow: hidden; // Removendo barra de rolagem
  text-overflow: ellipsis; // Adicionando "..." ao final
  -webkit-line-clamp: 3; // Quantidade de linhas
  -webkit-box-orient: vertical;
}

h2 {
  font-size: 12px;
  font-weight: 400;
  line-height: 1.2;

  display: -webkit-box;
  overflow: hidden; // Removendo barra de rolagem
  text-overflow: ellipsis; // Adicionando "..." ao final
  -webkit-line-clamp: 2; // Quantidade de linhas
  -webkit-box-orient: vertical;
}

div {
  background-color: white;
  color: #000000;
  border-radius: 24px;
  font-size: 12px;
  font-weight: 900;
  text-align: center;
  padding: 4px 2px;
  width: 80%;
  position: absolute;
  bottom: 12px;
}
`;