import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ $colors }) => $colors.backgroundColor};
  height: 384px;
  width: 216px;
  border-radius: 12px;
  /* padding-top: 9.5px; */
  position: relative;
`;

export const X = styled.div`
  position: absolute;
  top: 8px;
  right: 20px;
  color: ${({ $colors }) => $colors.corBotaoFechar};
  text-align: right;
  font-weight: bold;
  user-select: none;
  z-index: 800;
`;

export const CardButton = styled.div`
  box-sizing: border-box;
  color: ${({ $colors }) => $colors.corTextoBotao};
  background-color: ${({ $colors }) => $colors.temaBotao};
  border-radius: 12px;
  font-size: 12px;
  font-weight: bold;
  padding: 10px 4px;
  text-align: center;
  width: 178px;
  height: 38px;
  position: absolute;
  bottom: 9.5px;

  white-space: nowrap; /* Impede a quebra de linha */
  overflow: hidden; /* Oculta qualquer texto que ultrapasse o limite do container */
  text-overflow: ellipsis; /* Adiciona reticências (...) se o texto for muito longo */
`;
