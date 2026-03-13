import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.headerBg};
`;

export const Container = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
`;

export const Block = styled.div`
  height: 70px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;
  padding: 0 10px;
`;

export const Logo = styled.div`
  img { width: 85px; }
`;

export const Nav = styled.nav`
  max-width: 290px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonMainNew = styled.button`
  width: 178px;
  height: 30px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primaryButtonText};
  border: none;
  font-size: 14px;
  line-height: 1;
  font-weight: 500;
  margin-right: 20px;
  a {
    color: ${({ theme }) => theme.colors.primaryButtonText};
    text-decoration: none;
  }
  &:hover { background-color: ${({ theme }) => theme.colors.primaryHover}; }
`;

export const UserLink = styled.a`
  height: 20px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.primary};
  position: relative;
  &:after {
    content: '';
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 1px;
    border-left: 1.9px solid ${({ theme }) => theme.colors.primary};
    border-bottom: 1.9px solid ${({ theme }) => theme.colors.primary};
    transform: rotate(-45deg);
    margin: -6px 0 0 5px;
    padding: 0;
  }
  &:hover { color: ${({ theme }) => theme.colors.primaryHover}; }
  &:hover:after { border-left-color: ${({ theme }) => theme.colors.primaryHover}; border-bottom-color: ${({ theme }) => theme.colors.primaryHover}; }
`;
