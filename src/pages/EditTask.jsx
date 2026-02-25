import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header/Header';
import { useTasks } from '../contexts/TasksContext';
import * as S from './EditTask.styled';

function EditTask() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { getTaskById, updateTask } = useTasks();
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Web Design');
  const [status, setStatus] = useState('Без статуса');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [taskDate, setTaskDate] = useState('');

  const categories = ['Web Design', 'Research', 'Copywriting'];
  const statuses = ['Без статуса', 'Нужно сделать', 'В работе', 'Тестирование', 'Готово'];

  useEffect(() => {
    const loadTask = async () => {
      try {
        setIsLoading(true);
        setError('');

        const task = await getTaskById(id);

        setTitle(task.title || '');
        setDescription(task.description || '');
        setCategory(task.topic || 'Web Design');
        setStatus(task.status || 'Без статуса');
        setTaskDate(task.date || '');
      } catch (err) {
        setError(err.message || 'Не удалось загрузить задачу.');
      } finally {
        setIsLoading(false);
      }
    };

    loadTask();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!title.trim()) {
      setError('Пожалуйста, введите название задачи');
      return;
    }

      try {
      setIsLoading(true);

      await updateTask(id, {
        title,
        description,
        topic: category,
        status,
        date: taskDate,
      });

    navigate(`/task/${id}`);
    } catch (err) {
      setError(err.message || 'Не удалось сохранить задачу. Попробуйте ещё раз.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    navigate(`/task/${id}`);
  };

    if (isLoading) {
    return (
      <div className="wrapper">
        <Header />
        <S.Container>
          <p>Загрузка...</p>
        </S.Container>
      </div>
    );
  }

  if (error && !title) {
    return (
      <div className="wrapper">
        <Header />
        <S.Container>
          <div>
            <h2>{error}</h2>
          </div>
        </S.Container>
      </div>
    );
  }

  return (
    <div className="wrapper">
      <Header />
      <S.Container>
        <S.ModalBlock>
          <S.ModalContent>
            <S.ModalTitle>Редактирование задачи</S.ModalTitle>
            <S.ModalClose onClick={handleCancel}>✕</S.ModalClose>
            
            <S.ModalForm onSubmit={handleSubmit}>
              <S.FormBlock>
                <S.Label>Название задачи</S.Label>
                <S.Input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Введите название задачи..."
                />
              </S.FormBlock>

              <S.FormBlock>
                <S.Label>Описание задачи</S.Label>
                <S.TextArea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Введите описание задачи..."
                  rows="5"
                />
              </S.FormBlock>

              <S.FormBlock>
                <S.Label>Статус</S.Label>
                <S.StatusSelect value={status} onChange={(e) => setStatus(e.target.value)}>
                  {statuses.map((stat) => (
                    <option key={stat} value={stat}>{stat}</option>
                  ))}
                </S.StatusSelect>
              </S.FormBlock>

              <S.CategoriesBlock>
                <S.Label>Категория</S.Label>
                <S.Categories>
                  {categories.map((cat) => (
                    <S.Category
                      key={cat}
                      $active={category === cat}
                      $color={cat === 'Web Design' ? 'orange' : cat === 'Research' ? 'green' : 'purple'}
                      onClick={() => setCategory(cat)}
                    >
                      {cat}
                    </S.Category>
                  ))}
                </S.Categories>
              </S.CategoriesBlock>

              {error && <S.ErrorMessage>{error}</S.ErrorMessage>}

              <S.ButtonGroup>
                <S.ButtonSave type="submit">Сохранить</S.ButtonSave>
                <S.ButtonCancel type="button" onClick={handleCancel}>
                  Отменить
                </S.ButtonCancel>
              </S.ButtonGroup>
            </S.ModalForm>
          </S.ModalContent>
        </S.ModalBlock>
      </S.Container>
    </div>
  );
}

export default EditTask;

