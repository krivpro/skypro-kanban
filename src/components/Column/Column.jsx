import Card from '../Card/Card';
import * as S from './Column.styled'

function Column({ title, cards }) {
  return (
    <S.ColumnWrap>
      <S.Title>
        <p>{title}</p>
      </S.Title>

      <S.Cards>
        
        {cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            topic={card.topic}
            title={card.title}
            date={card.date}
          />
        ))}

      </S.Cards>
    </S.ColumnWrap>
  );
}

export default Column;