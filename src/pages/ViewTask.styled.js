import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.pageBg};
  padding: 40px 0;
`;

export const ModalBlock = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
`;

export const ModalContent = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBg};
  border-radius: 12px;
  padding: 30px;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  gap: 20px;
  flex-wrap: wrap;
`;

export const ModalTitle = styled.h3`
  font-size: 24px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
  flex: 1;
`;

export const Category = styled.div`
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  background-color: ${props => props.$bg};
  color: ${props => props.$text};
`;

export const StatusBlock = styled.div`
  margin-bottom: 20px;
`;

export const DescriptionBlock = styled.div`
  margin-bottom: 20px;
`;

export const DateBlock = styled.div`
  margin-bottom: 30px;
`;

export const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 8px;
`;

export const Status = styled.div`
  padding: 12px;
  background-color: ${({ theme }) => theme.colors.pageBg};
  border-radius: 6px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Description = styled.div`
  padding: 12px;
  background-color: ${({ theme }) => theme.colors.pageBg};
  border-radius: 6px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};
  min-height: 100px;
  white-space: pre-wrap;
`;

export const Date = styled.div`
  padding: 12px;
  background-color: ${({ theme }) => theme.colors.pageBg};
  border-radius: 6px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 30px;
`;

export const ButtonEdit = styled(Link)`
  padding: 12px 24px;
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.text};
  border: none;
  border-radius: 6px;
  font-size: 16px;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  text-align: center;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.accentHover};
  }
`;

export const ButtonDelete = styled.button`
  padding: 12px 24px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid #D0CECE;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  
  &:hover {
    background-color: #FFE5E5;
    border-color: ${({ theme }) => theme.colors.danger};
    color: ${({ theme }) => theme.colors.danger};
  }
`;

export const ButtonClose = styled.button`
  padding: 12px 24px;
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.text};
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  margin-left: auto;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.accentHover};
  }
`;

export const Loading = styled.div`
  text-align: center;
  padding: 40px;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.mutedText};
`;

export const NotFound = styled.div`
  text-align: center;
  padding: 40px;
  
  h2 {
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.text};
  }
  
  a {
    color: ${({ theme }) => theme.colors.accent};
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

