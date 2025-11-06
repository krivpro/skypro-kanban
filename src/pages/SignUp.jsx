import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import * as S from './SignUp.styled';

function SignUp() {
  const navigate = useNavigate();
  const { login } = useAuth();
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!name || !email || !password || !confirmPassword) {
      setError('Пожалуйста, заполните все поля');
      return;
    }

    if (password !== confirmPassword) {
      setError('Пароли не совпадают');
      return;
    }

    if (password.length < 6) {
      setError('Пароль должен содержать минимум 6 символов');
      return;
    }

    const userData = {
      email: email,
      name: name,
    };

    login(userData);
    
    navigate('/');
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
                type="text"
                placeholder="Имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
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
              <S.ModalInput
                type="password"
                placeholder="Повторите пароль"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              
              {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
              
              <S.ModalBtnEnter type="submit">
                Зарегистрироваться
              </S.ModalBtnEnter>
              <S.ModalBtnSignup>
                <Link to="/signin">Войти</Link>
              </S.ModalBtnSignup>
            </S.ModalForm>
          </S.ModalFormLogin>
        </S.ModalBlock>
      </S.Wrapper>
    </S.Container>
  );
}

export default SignUp;

