import Card from '../Card/Card';

function Column({ title, cardsCount }) {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        {Array.from({ length: cardsCount }).map((_, index) => (
          <Card key={index} theme={getRandomTheme()} />
        ))}
      </div>
    </div>
  );
}

function getRandomTheme() {
  const themes = ['_orange', '_green', '_purple'];
  return themes[Math.floor(Math.random() * themes.length)];
}

export default Column;