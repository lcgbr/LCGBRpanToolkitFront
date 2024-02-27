import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({space}) => space === 'telaCentralAvisos' ? '#1a1a1a' : 'inherit'};
  border-radius: 8px;

  & span {
    background-color: #1a1a1a;
    border-radius: 100%;
    font-size: 14px;
    font-weight: 600;
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
  }

  & img {
    max-height: 100px;
  }
`;

export const CardContent = styled.div`
  box-sizing: border-box;
  background-color: #646cffaa;
  border-radius: 8px;
  height: 100px;
  width: 265px;
  margin-bottom: 8px;
  font-size: 12px;
  padding: 0 8px;

  //https://dev.to/geovrodri/dica-css-limitar-tamanho-de-um-texto-32m9
  & p.soft-wrap {
    overflow: hidden; // Removendo barra de rolagem
    text-overflow: ellipsis; // Adicionando "..." ao final
    display: -webkit-box;
    -webkit-line-clamp: 2; // Quantidade de linhas
    -webkit-box-orient: vertical;
  }

  & p.strong-wrap {
    white-space: nowrap;
    overflow: hidden; // Removendo barra de rolagem
    text-overflow: ellipsis; // Adicionando "..." ao final
  }
`;
