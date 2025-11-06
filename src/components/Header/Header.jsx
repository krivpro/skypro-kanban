import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import * as S from './Header.styled'

function Header() {

  const navigate = useNavigate();
  const { user } = useAuth(); 
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  return (
    <S.Header>
      <S.Container>
        <S.Block>
          <S.Logo className="_show _light">
            <Link to="/"><img src="/images/logo.png" alt="logo"/></Link>
          </S.Logo>
          <S.Logo className="_dark">
            <Link to="/"><img src="/images/logo_dark.png" alt="logo"/></Link>
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
        <input type="checkbox" className="checkbox" name="checkbox"/>
      </div>
      <button type="button" className="_hover03" onClick={handleExit}>
        Выйти
      </button>
    </div>
  );
}

export default Header;