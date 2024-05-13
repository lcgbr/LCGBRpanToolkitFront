import styled from 'styled-components';

export const CardTitles = styled.div`
  font-size: 12px;
  text-align: left;
  width: 262px;
  align-self: flex-end;

  p {
    margin: 0;
    line-height: 1.4;
    white-space: nowrap;
    overflow: hidden; // Removendo barra de rolagem
    text-overflow: ellipsis; // Adicionando "..." ao final
  }
`;

export const CardContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
`;
