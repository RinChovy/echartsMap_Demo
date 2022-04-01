import styled from 'styled-components';
import pageBg from '../assets/pageBg.png';

export const IndexPageStyle = styled.div`
  position: relative;
  overflow: hidden;
  margin: 0px;
  padding: 10px 0 0 0;
  background: url(${pageBg}) center center no-repeat;
  background-size: cover;
  height: 100%;
`;
export const IndexPageContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  height: 100%;
  .center-page {
    flex: 1;
  }
`;
