import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header/Header';
import { cardsData } from '../data';
import * as S from './EditTask.styled';

function EditTask() {
  const navigate = useNavigate();
  const { id } = useParams();
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Web Design');
  const [status, setStatus] = useState('Без статуса');
  const [error, setError] = useState('');

  const categories = ['Web Design', 'Research', 'Copywriting'];
  const statuses = ['Без статуса', 'Нужно сделать', 'В работе', 'Тестирование', 'Готово'];

  useEffect(() => {
    const task = cardsData.find(card => card.id === parseInt(id));
    
    if (task) {
      setTitle(task.title);
      setDescription(task.title);
      setCategory(task.topic || 'Web Design');
      setStatus(task.status || 'Без статуса');
    } else {
      navigate('/404');
    }
  }, [id, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!title.trim()) {
      setError('Пожалуйста, введите название задачи');
      return;
    }

    console.log('Обновленная задача:', { id, title, description, category, status });

    navigate(`/task/${id}`);
  };

  const handleCancel = () => {
    navigate(`/task/${id}`);
  };

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

