import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  justify-content: flex-end;
  text-align: left;
  height: 80%;
  width: 178px;

  section {
    width: 100%;
    max-height: 220px;

    h1 {
      color: ${({ $colors }) => $colors.corTitulo};
      font-size: 13px;
      font-weight: bold;
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
      color: ${({ $colors }) => $colors.corValor};
      font-size: 13px;
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
      color: ${({ $colors }) => $colors.corDescricao};
      font-size: 9px;
      font-weight: 500;
      line-height: 1.4;
      margin: 8px 0 0 0;

      display: -webkit-box;
      overflow: hidden; // Removendo barra de rolagem
      text-overflow: ellipsis; // Adicionando "..." ao final
      -webkit-line-clamp: 7; // Quantidade de linhas
      -webkit-box-orient: vertical;
    }
  }
`;