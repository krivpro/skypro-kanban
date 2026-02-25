import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #EAEEF6;
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
  top: calc(50% - (439px / 2));
  opacity: 1;
`;

export const ModalFormLogin = styled.div`
  width: 366px;
  height: 439px;
  background-color: #FFFFFF;
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
  border-bottom: 1px solid #D0CECE;
  padding: 8px 1px;
  margin-bottom: 30px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.05px;
  color: #D0CECE;

  &::placeholder {
    color: #D0CECE;
  }

  &:focus {
    outline: none;
    border-bottom: 1px solid #009EE4;
    color: #000000;
  }
`;

export const ModalBtnEnter = styled.button`
  width: 278px;
  height: 52px;
  background-color: #009EE4;
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
  color: #FFFFFF;
  cursor: pointer;

  &:hover {
    background-color: #0080C1;
  }

  &:active {
    background-color: #0079B5;
  }
`;

export const ModalBtnSignup = styled.button`
  width: 278px;
  height: 52px;
  background-color: transparent;
  border: 1px solid #D0CECE;
  border-radius: 6px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.05px;
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  a {
    text-decoration: none;
    color: #000000;
  }

  &:hover {
    background-color: #F4F5F6;
  }

  &:active {
    background-color: #D9D9D9;
  }
`;

export const ErrorMessage = styled.div`
  color: #FF0000;
  font-size: 14px;
  margin-bottom: 10px;
  text-align: center;
`;

