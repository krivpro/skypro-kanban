import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../contexts/AuthContext';
import { useThemeMode } from '../contexts/ThemeContext';
import { loginUser } from '../services/auth';
import * as S from './SignIn.styled';

function SignIn() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { themeName } = useThemeMode();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email.trim() || !password.trim()) {
      setError('Пожалуйста, заполните все поля');
      return;
    }

    try {
      setIsLoading(true);

      const userFromApi = await loginUser({ login: email.trim(), password });

      const userData = {
        id: userFromApi.id,
        name: userFromApi.name,
        login: userFromApi.login,
        email: userFromApi.login,
        token: userFromApi.token,
      };

      login(userData);
      toast.success('Вы успешно вошли в аккаунт');
      navigate('/');
    } catch (err) {
      setError(err.message || 'Не удалось войти. Попробуйте ещё раз.');
      toast.error(err.message || 'Не удалось войти. Попробуйте ещё раз.');
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
              
              <S.ModalBtnEnter type="submit" disabled={isLoading}>
                {isLoading ? 'Входим...' : 'Войти'}
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

