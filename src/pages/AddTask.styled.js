import styled from 'styled-components';

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
  position: relative;
`;

export const ModalTitle = styled.h3`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.text};
`;

export const ModalClose = styled.button`
  position: absolute;
  top: 30px;
  right: 30px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #94A6BE;
  
  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const ModalWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 40px;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1 1 370px;
`;

export const FormBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid ${({ theme }) => theme.colors.borderLight};
  border-radius: 6px;
  font-size: 16px;
  background-color: ${({ theme }) => theme.colors.inputBg};
  color: ${({ theme }) => theme.colors.text};
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.mutedText};
  }
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 1px solid ${({ theme }) => theme.colors.borderLight};
  border-radius: 6px;
  font-size: 16px;
  resize: vertical;
  font-family: inherit;
  background-color: ${({ theme }) => theme.colors.inputBg};
  color: ${({ theme }) => theme.colors.text};
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.mutedText};
  }
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

export const CategoriesBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Categories = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const Category = styled.div`
  padding: 8px 16px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s;
  
  ${props => {
    if (props.$color === 'orange') {
      return props.$active
        ? 'background-color: #FF6D00; color: #FFFFFF;'
        : 'background-color: #FFE4D2; color: #FF6D00;';
    } else if (props.$color === 'green') {
      return props.$active
        ? 'background-color: #06B16E; color: #FFFFFF;'
        : 'background-color: #D4F5E5; color: #06B16E;';
    } else if (props.$color === 'purple') {
      return props.$active
        ? 'background-color: #9A48F1; color: #FFFFFF;'
        : 'background-color: #E9D4FF; color: #9A48F1;';
    }
  }}
  
  &:hover {
    opacity: 0.8;
  }
`;

export const CalendarWrapper = styled.div`
  flex: 0 0 220px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 20px;
`;

export const ButtonCreate = styled.button`
  padding: 12px 24px;
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.text};
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.accentHover};
  }
`;

export const ButtonCancel = styled.button`
  padding: 12px 24px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.borderLight};
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.pageBg};
  }
`;

export const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.danger};
  font-size: 14px;
  padding: 10px;
  background-color: #FFE5E5;
  border-radius: 6px;
`;

