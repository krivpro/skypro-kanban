import Column from '../Column/Column';

function Main() {
  const columns = [
    { title: 'Без статуса', cardsCount: 5 },
    { title: 'Нужно сделать', cardsCount: 1 },
    { title: 'В работе', cardsCount: 3 },
    { title: 'Тестирование', cardsCount: 1 },
    { title: 'Готово', cardsCount: 1 }
  ];

  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {columns.map((column, index) => (
              <Column key={index} title={column.title} cardsCount={column.cardsCount} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;