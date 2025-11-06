import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #EAEEF6;
`;

export const Content = styled.div`
  text-align: center;
  padding: 40px;
`;

export const Title = styled.h1`
  font-size: 120px;
  font-weight: 700;
  color: #009EE4;
  margin: 0;
  line-height: 1;
`;

export const Subtitle = styled.h2`
  font-size: 32px;
  font-weight: 500;
  color: #000000;
  margin: 20px 0;
`;

export const Description = styled.p`
  font-size: 18px;
  color: #94A6BE;
  margin-bottom: 30px;
`;

export const HomeLink = styled(Link)`
  display: inline-block;
  padding: 12px 24px;
  background-color: #009EE4;
  color: #FFFFFF;
  border-radius: 6px;
  font-size: 16px;
  text-decoration: none;
  
  &:hover {
    background-color: #0080C1;
  }
`;

