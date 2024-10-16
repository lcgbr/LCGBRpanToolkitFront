import styled from 'styled-components';

export const MainContainer = styled.main`
  box-sizing: border-box;
  display: flex;
  height: 100%;
  min-width: 100vw;
  margin-top: 80px;
  padding: 0 64px;
  justify-content: ${(props) => props.$justify};
`;

export const Error = styled.p`
  color: #fff;
  border: 4px solid #E84855;
  border-radius: 16px;
  margin-top: 128px;
  font-weight: 600;
  padding: 8px 32px;
`;

export const ActivityGroup = styled.div`
  display: flex;
  gap: 64px;
`;

export const ActivityContainer = styled.section`
  /* width: 300px; */
  overflow: hidden;
  margin-bottom: 48px;
`;

export const ActivityContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 24px;
`;