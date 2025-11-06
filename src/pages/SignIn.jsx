import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import * as S from './SignIn.styled';

function SignIn() {
  const navigate = useNavigate();
  const { login } = useAuth();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Пожалуйста, заполните все поля');
      return;
    }

    if (email && password) {
      const userData = {
        email: email,
        name: 'Ivan Ivanov',
      };

      login(userData);
      
      navigate('/');
    } else {
      setError('Неверный email или пароль');
    }
  };

  return (
    <S.Container>
      <S.Wrapper>
        <S.ModalBlock>
          <S.ModalFormLogin>
            <Link to="/">
              <S.ModalLogo>
                <img src="/images/logo.png" alt="logo" />
              </S.ModalLogo>
            </Link>
            <S.ModalForm onSubmit={handleSubmit}>
              <S.ModalInput
                type="email"
                placeholder="Эл. почта"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <S.ModalInput
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              
              {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
              
              <S.ModalBtnEnter type="submit">
                Войти
              </S.ModalBtnEnter>
              <S.ModalBtnSignup>
                <Link to="/signup">Зарегистрироваться</Link>
              </S.ModalBtnSignup>
            </S.ModalForm>
          </S.ModalFormLogin>
        </S.ModalBlock>
      </S.Wrapper>
    </S.Container>
  );
}

export default SignIn;

