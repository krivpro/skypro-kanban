import { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Header from '../components/Header/Header';
import { useTasks } from '../contexts/TasksContext';
import * as S from './ViewTask.styled';

function ViewTask() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { getTaskById, deleteTask } = useTasks();
  
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const loadTask = async () => {
      try {
        setLoading(true);
        setError('');

        const taskFromApi = await getTaskById(id);
        setTask(taskFromApi);
      } catch (err) {
        setError(err.message || 'Не удалось загрузить задачу.');
      } finally {
        setLoading(false);
      }
    };

    loadTask();
  }, [id]);

  const handleDelete = async () => {
    if (!window.confirm('Вы уверены, что хотите удалить эту задачу?')) {
      return;
    }

    try {
      setIsDeleting(true);
      setError('');

      await deleteTask(id);
      toast.success('Задача удалена');
      navigate('/');
    } catch (err) {
      setError(err.message || 'Не удалось удалить задачу. Попробуйте ещё раз.');
      toast.error(err.message || 'Не удалось удалить задачу. Попробуйте ещё раз.');
    } finally {
      setIsDeleting(false);
    }
  };

  if (loading) {
    return (
      <div className="wrapper">
        <Header />
        <S.Container>
          <S.Loading>Загрузка...</S.Loading>
        </S.Container>
      </div>
    );
  }

  if (error && !task) {
    return (
      <div className="wrapper">
        <Header />
        <S.Container>
          <S.NotFound>
            <h2>{error}</h2>
            <Link to="/">Вернуться на главную</Link>
          </S.NotFound>
        </S.Container>
      </div>
    );
  }

  if (!task) {
    return (
      <div className="wrapper">
        <Header />
        <S.Container>
          <S.NotFound>
            <h2>Задача не найдена</h2>
            <Link to="/">Вернуться на главную</Link>
          </S.NotFound>
        </S.Container>
      </div>
    );
  }

  const getCategoryColor = (topic) => {
    const colorMap = {
      'Web Design': { bg: '#FF6D00', text: '#FFFFFF' },
      'Research': { bg: '#06B16E', text: '#FFFFFF' },
      'Copywriting': { bg: '#9A48F1', text: '#FFFFFF' },
      'Frontend': { bg: '#FF6D00', text: '#FFFFFF' }
    };
    return colorMap[topic] || { bg: '#FF6D00', text: '#FFFFFF' };
  };

  const categoryColor = getCategoryColor(task.topic);

  return (
    <div className="wrapper">
      <Header />
      <S.Container>
        <S.ModalBlock>
          <S.ModalContent>
            <S.ModalHeader>
              <S.ModalTitle>{task.title}</S.ModalTitle>
              <S.Category $bg={categoryColor.bg} $text={categoryColor.text}>
                {task.topic}
              </S.Category>
            </S.ModalHeader>

            <S.StatusBlock>
              <S.Label>Статус</S.Label>
              <S.Status>{task.status}</S.Status>
            </S.StatusBlock>

            <S.DescriptionBlock>
              <S.Label>Описание задачи</S.Label>
              <S.Description>
                {task.description || 'Описание отсутствует'}
              </S.Description>
            </S.DescriptionBlock>

            <S.DateBlock>
              <S.Label>Дата</S.Label>
              <S.Date>{task.date}</S.Date>
            </S.DateBlock>

            <S.ButtonGroup>
              <S.ButtonEdit to={`/task/${id}/edit`}>
                Редактировать задачу
              </S.ButtonEdit>
              <S.ButtonDelete onClick={handleDelete} disabled={isDeleting}>
                {isDeleting ? 'Удаляем...' : 'Удалить задачу'}
              </S.ButtonDelete>
              <S.ButtonClose onClick={() => navigate('/')}>
                Закрыть
              </S.ButtonClose>
            </S.ButtonGroup>
          </S.ModalContent>
        </S.ModalBlock>
      </S.Container>
    </div>
  );
}

export default ViewTask;