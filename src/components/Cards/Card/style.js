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

  & div {
    display: flex;
    flex-direction: column;
    gap: 6px;
  };

  & span {
    background-color: #1a1a1a;
    color: #fff;
    border-radius: 100%;
    font-size: 14px;
    font-weight: 600;
    width: 26px;
    height: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
  }
`;

export const TypeContainer = styled.div`
    background-color: ${({ $typeColor }) => $typeColor};
    /* background-color: #1a1a1a; */
    /* color: ${({ $typeColor }) => $typeColor}; */
    border-radius: 100%;
    font-size: 14px;
    font-weight: 700;
    width: 26px;
    height: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
`;

export const QAContainer = styled.div`
    background-color: #1a1a1a;
    border-radius: 100%;
    font-size: 14px;
    font-weight: 600;
    width: 26px;
    height: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;

    img {
      width: 20px;
      height: 20px;
    }
`;
