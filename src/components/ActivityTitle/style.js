import styled from 'styled-components';

export const Container = styled.div`
  line-height: 8px;
  margin-bottom: 20px;

  h2 {
    white-space: nowrap;
    /* overflow: hidden; */
    text-overflow: ellipsis;
    font-size: 18px;
    margin: 18px 0;
    max-width: 300px;
  }

  p {
    white-space: nowrap;
    /* overflow: hidden; */
    text-overflow: ellipsis;
    max-width: 300px;
  }

  strong {
    color: #06B2FC;
  }
`;