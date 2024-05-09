import styled from 'styled-components';

export const MainContainer = styled.main`
  box-sizing: border-box;
  padding-top: 16px;
  display: flex;
  height: 100%;
  width: 100%;
  margin-top: 64px;
  padding-left: 64px;
  padding-right: 64px;
  justify-content: ${(props) => props.justify ? 'center' : 'flex-start'};
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
  width: 300px;
  overflow: hidden;
`;

export const ActivityTitle = styled.div`
  line-height: 8px;
  margin-bottom: 20px;

  h2 {
    white-space: nowrap;
    /* overflow: hidden; */
    text-overflow: ellipsis;
    font-size: 18px;
    margin: 18px 0;
  }

  strong {
    color: #06B2FC;
  }
`;

export const ActivityContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 24px;
`;