import { useState, useEffect } from 'react';
import Column from '../Column/Column';
import { getTasks } from '../../services/tasks';
import * as S from './Main.styled';

function Main() {

  const [isLoading, setIsLoading] = useState(true);
  const [cards, setCards] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadTasks = async () => {
      try {
        setIsLoading(true);
        setError('');

        const tasks = await getTasks();
        setCards(tasks || []);
      } catch (err) {
        setError(err.message || 'Не удалось загрузить задачи. Попробуйте позже.');
      } finally {
        setIsLoading(false);
      }
    };

    loadTasks();
  }, []);

  const columns = [
    { title: 'Без статуса', status: 'Без статуса' },
    { title: 'Нужно сделать', status: 'Нужно сделать' },
    { title: 'В работе', status: 'В работе' },
    { title: 'Тестирование', status: 'Тестирование' },
    { title: 'Готово', status: 'Готово' }
  ];

  return (
    <S.Main>
      <S.Container>
        <S.Block>
          <S.Content>
            {isLoading ? (
              <div className="loading-container">
                <p className="loading-text">Данные загружаются</p>
              </div>
              ) : error ? (
              <div className="loading-container">
                <p className="loading-text">{error}</p>
              </div>
            ) : (
              columns.map((column, index) => {
                const columnCards = cards.filter(card => card.status === column.status);

                return (
                  <Column
                  key={index}
                  title={column.title}
                  cards={columnCards}
                  />
                );
              })
            )}
          </S.Content>
        </S.Block>
      </S.Container>
    </S.Main>
  );
}

export default Main;