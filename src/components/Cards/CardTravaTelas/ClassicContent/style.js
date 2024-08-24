import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 9.5px;
  width: 90%;

  img {
    height: 200px;
    width: 200px;
    border-radius: 12px;
    object-fit: cover;
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: left;
    width: 92%;

    h1{
      color: ${({ $colors }) => $colors.corTitulo};
      font-size: 13px;
      font-weight: bold;
      line-height: 1.2;
      margin: 0;

      //https://dev.to/geovrodri/dica-css-limitar-tamanho-de-um-texto-32m9
      display: -webkit-box;
      overflow: hidden; // Removendo barra de rolagem
      text-overflow: ellipsis; // Adicionando "..." ao final
      -webkit-line-clamp: 2; // Quantidade de linhas
      -webkit-box-orient: vertical;
    }

    h2 {
      color: ${({ $colors }) => $colors.corValor};
      font-size: 13px;
      font-weight: bold;
      line-height: 1.2;
      margin: 4px 0 0 0;

      display: -webkit-box;
      overflow: hidden; // Removendo barra de rolagem
      text-overflow: ellipsis; // Adicionando "..." ao final
      -webkit-line-clamp: 3; // Quantidade de linhas
      -webkit-box-orient: vertical;
    }

    p {
      color: ${({ $colors }) => $colors.corDescricao};
      font-size: 9px;
      font-weight: 500;
      line-height: 1.2;
      margin: 8px 0 0 0;

      display: -webkit-box;
      overflow: hidden; // Removendo barra de rolagem
      text-overflow: ellipsis; // Adicionando "..." ao final
      -webkit-line-clamp: 3; // Quantidade de linhas
      -webkit-box-orient: vertical;
    }
  }
`;