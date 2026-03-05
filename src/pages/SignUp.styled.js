import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.pageBg};
`;

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
`;

export const ModalBlock = styled.div`
  position: absolute;
  z-index: 2;
  left: calc(50% - (366px / 2));
  top: calc(50% - (550px / 2));
  opacity: 1;
`;

export const ModalFormLogin = styled.div`
  width: 366px;
  min-height: 550px;
  background-color: ${({ theme }) => theme.colors.cardBg};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 43px 44px 47px 40px;
`;

export const ModalLogo = styled.div`
  width: 140px;
  height: 21px;
  margin-bottom: 34px;
  background-color: transparent;

  img {
    width: 140px;
    height: auto;
  }
`;

export const ModalForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ModalInput = styled.input`
  width: 100%;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderLight};
  padding: 8px 1px;
  margin-bottom: 30px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.05px;
  color: ${({ theme }) => theme.colors.text};
  background: transparent;

  &::placeholder {
    color: ${({ theme }) => theme.colors.mutedText};
  }

  &:focus {
    outline: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const ModalBtnEnter = styled.button`
  width: 278px;
  height: 52px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 6px;
  border: none;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.05px;
  color: ${({ theme }) => theme.colors.primaryButtonText};
  cursor: pointer;

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const ModalBtnSignup = styled.button`
  width: 278px;
  height: 52px;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.borderLight};
  border-radius: 6px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.05px;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.outlineButtonHoverBg};
    color: ${({ theme }) => theme.colors.primaryButtonText};
    border-color: ${({ theme }) => theme.colors.outlineButtonHoverBg};
  }
  &:hover a {
    color: ${({ theme }) => theme.colors.primaryButtonText};
  }
`;

export const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.danger};
  font-size: 14px;
  margin-bottom: 10px;
  text-align: center;
`;

