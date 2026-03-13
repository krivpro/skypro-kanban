import { Link } from 'react-router-dom';
import * as S from './NotFound.styled';

function NotFound() {
  return (
    <S.Container>
      <S.Content>
        <S.Title>404</S.Title>
        <S.Subtitle>Страница не найдена</S.Subtitle>
        <S.Description>
          К сожалению, запрашиваемая страница не существует.
        </S.Description>
        <S.HomeLink to="/">Вернуться на главную</S.HomeLink>
      </S.Content>
    </S.Container>
  );
}

export default NotFound;

