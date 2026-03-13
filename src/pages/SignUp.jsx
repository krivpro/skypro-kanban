import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../contexts/AuthContext';
import { useThemeMode } from '../contexts/ThemeContext';
import { registerUser } from '../services/auth';
import * as S from './SignUp.styled';

function SignUp() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { themeName } = useThemeMode();
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!name.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
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

    try {
      setIsLoading(true);

      // email используется как логин для API
      const userFromApi = await registerUser({
        login: email.trim(),
        name: name.trim(),
        password,
      });

      const userData = {
        id: userFromApi.id,
        name: userFromApi.name,
        login: userFromApi.login,
        email: userFromApi.login,
        token: userFromApi.token,
      };

    login(userData);
    toast.success('Регистрация прошла успешно');
      navigate('/');
    } catch (err) {
      setError(err.message || 'Не удалось зарегистрироваться. Попробуйте ещё раз.');
      toast.error(err.message || 'Не удалось зарегистрироваться. Попробуйте ещё раз.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <S.Container>
      <S.Wrapper>
        <S.ModalBlock>
          <S.ModalFormLogin>
            <Link to="/">
              <S.ModalLogo>
                <img src={themeName === 'dark' ? '/images/logo_dark.png' : '/images/logo.png'} alt="logo" />
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
              
              <S.ModalBtnEnter type="submit" disabled={isLoading}>
                {isLoading ? 'Регистрируем...' : 'Зарегистрироваться'}
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

