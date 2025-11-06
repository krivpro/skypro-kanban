import { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import { cardsData } from '../data';
import * as S from './ViewTask.styled';

function ViewTask() {
  const navigate = useNavigate();
  const { id } = useParams();
  
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundTask = cardsData.find(card => card.id === parseInt(id));
    
    if (foundTask) {
      setTask(foundTask);
    }
    setLoading(false);
  }, [id]);

  const handleDelete = () => {
    if (window.confirm('Вы уверены, что хотите удалить эту задачу?')) {
      console.log('Удаление задачи:', id);
      
      navigate('/');
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
                {task.title}
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
              <S.ButtonDelete onClick={handleDelete}>
                Удалить задачу
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