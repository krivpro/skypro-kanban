import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import * as S from './ExitModal.styled';

function ExitModal() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleExit = () => {
    logout();
    
    navigate('/signin');
  };

  const handleCancel = () => {
    navigate(-1); 
  };

  return (
    <S.ModalOverlay>
      <S.ModalBlock>
        <S.ModalContent>
          <S.ModalTitle>Выйти из аккаунта?</S.ModalTitle>
          <S.ModalForm>
            <S.ButtonGroup>
              <S.ButtonYes onClick={handleExit}>
                Да, выйти
              </S.ButtonYes>
              <S.ButtonNo onClick={handleCancel}>
                Нет, остаться
              </S.ButtonNo>
            </S.ButtonGroup>
          </S.ModalForm>
        </S.ModalContent>
      </S.ModalBlock>
    </S.ModalOverlay>
  );
}

export default ExitModal;

