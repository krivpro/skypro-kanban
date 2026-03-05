import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useThemeMode } from '../../contexts/ThemeContext';
import * as S from './Header.styled';

function Header() {

  const { user } = useAuth(); 
  const { themeName } = useThemeMode();
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  return (
    <S.Header>
      <S.Container>
        <S.Block>
          <S.Logo>
            <Link to="/">
              <img
                src={themeName === 'dark' ? '/images/logo_dark.png' : '/images/logo.png'}
                alt="logo"
              />
            </Link>
          </S.Logo>
          <S.Nav>
            <S.ButtonMainNew id="btnMainNew">
              <Link to="/task/new">Создать новую задачу</Link>
            </S.ButtonMainNew>
            <S.UserLink 
            href="#user-set-target"
              onClick={(e) => {
                e.preventDefault();
                toggleUserMenu();
              }}
            >
              {user?.name || 'Пользователь'}
            </S.UserLink>
            <UserSettings isOpen={isUserMenuOpen} user={user} />
          </S.Nav>					
        </S.Block>
      </S.Container>			
    </S.Header>
  );
}

function UserSettings({ isOpen, user }) {
  const navigate = useNavigate();
  const { themeName, toggleTheme } = useThemeMode();

  const handleExit = () => {
    navigate('/exit');
  };

  return (
    <div 
      className="header__pop-user-set pop-user-set"
      id="user-set-target"
      style={{ display: isOpen ? 'block' : 'none'}}
    >
      <p className="pop-user-set__name">{user?.name || 'Пользователь'}</p>
      <p className="pop-user-set__mail">{user?.email || 'email@example.com'}</p>
      <div className="pop-user-set__theme">
        <p>Темная тема</p>
        <input
          type="checkbox"
          className="checkbox"
          name="checkbox"
          checked={themeName === 'dark'}
          onChange={toggleTheme}
        />
      </div>
      <button type="button" className="_hover03" onClick={handleExit}>
        Выйти
      </button>
    </div>
  );
}

export default Header;