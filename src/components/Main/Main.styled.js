import styled from 'styled-components';

export const Main = styled.main`
  width: 100%;
  min-height: calc(100vh - 70px);
  background-color: ${({ theme }) => theme.colors.pageBg};
`;
export const Container = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
`;

export const Block = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 25px 0 49px;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
`;
