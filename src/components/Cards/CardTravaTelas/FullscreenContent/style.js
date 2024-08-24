import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden; /* Garante que a imagem não saia do container */
  
  img {
    border-radius: 11px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block; /* Remove o espaçamento extra abaixo da imagem */
  }
`;