import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header/Header';
import { createTask } from '../services/tasks';
import * as S from './AddTask.styled';

function AddTask() {
  const navigate = useNavigate();
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Web Design');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const categories = ['Web Design', 'Research', 'Copywriting'];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!title.trim()) {
      setError('Пожалуйста, введите название задачи');
      return;
    }

    try {
      setIsLoading(true);

      await createTask({
        title,
        description,
        topic: category,
      });

    navigate('/');
    } catch (err) {
      setError(err.message || 'Не удалось создать задачу. Попробуйте ещё раз.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className="wrapper">
      <Header />
      <S.Container>
        <S.ModalBlock>
          <S.ModalContent>
            <S.ModalTitle>Создание задачи</S.ModalTitle>
            <S.ModalClose onClick={handleCancel}>✕</S.ModalClose>
            
            <S.ModalForm onSubmit={handleSubmit}>
              <S.FormBlock>
                <S.Label>Название задачи</S.Label>
                <S.Input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Введите название задачи..."
                  autoFocus
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
                <S.ButtonCreate type="submit" disabled={isLoading}>
                  {isLoading ? 'Создаём...' : 'Создать задачу'}
                </S.ButtonCreate>
                <S.ButtonCancel type="button" onClick={handleCancel}>
                  Отмена
                </S.ButtonCancel>
              </S.ButtonGroup>
            </S.ModalForm>
          </S.ModalContent>
        </S.ModalBlock>
      </S.Container>
    </div>
  );
}

export default AddTask;

