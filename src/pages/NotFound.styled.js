import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.pageBg};
`;

export const Content = styled.div`
  text-align: center;
  padding: 40px;
`;

export const Title = styled.h1`
  font-size: 120px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.accent};
  margin: 0;
  line-height: 1;
`;

export const Subtitle = styled.h2`
  font-size: 32px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  margin: 20px 0;
`;

export const Description = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.mutedText};
  margin-bottom: 30px;
`;

export const HomeLink = styled(Link)`
  display: inline-block;
  padding: 12px 24px;
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 6px;
  font-size: 16px;
  text-decoration: none;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.accentHover};
  }
`;

