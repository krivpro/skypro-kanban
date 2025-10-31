import { useState } from 'react';
import * as S from './Header.styled'

function Header() {

  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);


  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  return (
    <S.Header>
      <S.Container>
        <S.Block>
          <S.Logo className="_show _light">
            <a href="" target="_self"><img src="images/logo.png" alt="logo"/></a>
          </S.Logo>
          <S.Logo className="_dark">
            <a href="" target="_self"><img src="images/logo_dark.png" alt="logo"/></a>
          </S.Logo>
          <S.Nav>
            <S.ButtonMainNew id="btnMainNew">
              <a href="#popNewCard">Создать новую задачу</a>
            </S.ButtonMainNew>
            <S.UserLink 
            href="#user-set-target"

            onClick={(e) => {
              e.preventDefault();
              toggleUserMenu();
            }}
            >
              Ivan Ivanov
            </S.UserLink>
            <UserSettings isOpen={isUserMenuOpen}/>
          </S.Nav>					
        </S.Block>
      </S.Container>			
    </S.Header>
  );
}

function UserSettings({ isOpen }) {
  return (
    <div 
      className="header__pop-user-set pop-user-set"
      id="user-set-target"
      style={{ display: isOpen ? 'block' : 'none'}}
    >
      <p className="pop-user-set__name">Ivan Ivanov</p>
      <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
      <div className="pop-user-set__theme">
        <p>Темная тема</p>
        <input type="checkbox" className="checkbox" name="checkbox"/>
      </div>
      <button type="button" className="_hover03">
        <a href="#popExit">Выйти</a>
      </button>
    </div>
  );
}

export default Header;