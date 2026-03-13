import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalBlock = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBg};
  border-radius: 12px;
  padding: 30px;
  max-width: 400px;
  width: 90%;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ModalTitle = styled.h2`
  font-size: 24px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 30px;
  text-align: center;
`;

export const ModalForm = styled.div`
  width: 100%;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
`;

export const ButtonYes = styled.button`
  flex: 1;
  padding: 12px 24px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primaryButtonText};
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }
`;

export const ButtonNo = styled.button`
  flex: 1;
  padding: 12px 24px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 6px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.outlineButtonHoverBg};
    color: ${({ theme }) => theme.colors.primaryButtonText};
    border-color: ${({ theme }) => theme.colors.outlineButtonHoverBg};
  }
`;

