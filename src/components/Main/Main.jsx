import Column from '../Column/Column';
import { useTasks } from '../../contexts/TasksContext';
import * as S from './Main.styled';

function Main() {
  const { tasks, isLoading, error } = useTasks();

  const columns = [
    { title: 'Без статуса', status: 'Без статуса' },
    { title: 'Нужно сделать', status: 'Нужно сделать' },
    { title: 'В работе', status: 'В работе' },
    { title: 'Тестирование', status: 'Тестирование' },
    { title: 'Готово', status: 'Готово' },
  ];

  return (
    <S.Main>
      <S.Container>
        <S.Block>
          <S.Content>
            {isLoading ? (
              <div className="loading-container">
                <div className="loader" />
                <p className="loading-text">Данные загружаются...</p>
              </div>
              ) : error ? (
              <div className="loading-container">
                <p className="loading-text">{error}</p>
              </div>
              ) : tasks.length === 0 ? (
              <div className="loading-container">
                <p className="loading-text">Новых задач нет</p>
              </div>
            ) : (
              columns.map((column) => {
                const columnCards = tasks.filter((card) => card.status === column.status);

                return (
                  <Column
                    key={column.status}
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