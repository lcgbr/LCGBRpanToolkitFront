import styled from 'styled-components';

export const Container = styled.div`
  line-height: 8px;
  margin-bottom: 20px;
  /* align-self: flex-end; */

  h2 {
    white-space: nowrap;
    /* overflow: hidden; */
    text-overflow: ellipsis;
    font-size: 18px;
    margin: 18px 0;
    width: inherit;
  }

  #unified {
    white-space: nowrap;
    /* overflow: hidden; */
    text-overflow: ellipsis;
    width: inherit;
  }
  
  #modular {
    font-size: 12px;
    line-height: 13px;

    //https://dev.to/geovrodri/dica-css-limitar-tamanho-de-um-texto-32m9
    display: -webkit-box;
    overflow: hidden; // Removendo barra de rolagem
    text-overflow: ellipsis; // Adicionando "..." ao final
    -webkit-line-clamp: 2; // Quantidade de linhas
    -webkit-box-orient: vertical;
  }

  strong {
    color: #06B2FC;
  }
`;