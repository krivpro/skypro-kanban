import * as S from './Card.styled'

function Card({ topic, title, date }) {
  
  const getThemeColors = (topic) => {
    const themeMap = {
      'Web Design': { bg: '#FF6D00', text: '#FFFFFF' },
      'Research': { bg: '#06B16E', text: '#FFFFFF' },
      'Copywriting': { bg: '#9A48F1', text: '#FFFFFF' },
      'Frontend': { bg: '#FF6D00', text: '#FFFFFF' }
    };
    return themeMap[topic] || { bg: '#FF6D00', text: '#FFFFFF' };
  };

  const theme = getThemeColors(topic);

  return (
    <S.Item>
      <S.Card>
        <S.Group>
          <S.Theme $colorBg={theme.bg} $colorText={theme.text}>
            <p>{topic}</p>
          </S.Theme>
          <a href="#popBrowse" target="_self">
            <S.Btn>
              <div></div>
              <div></div>
              <div></div>
            </S.Btn>
          </a>
        </S.Group>
        <S.Content>
          <a href="" target="_blank">
            <S.Title>{title}</S.Title>
          </a>
          <S.DateInfo>
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
              <g clipPath="url(#clip0_1_415)">
                <path d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z" stroke="#94A6BE" strokeWidth="0.8" strokeLinejoin="round" />
                <path d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z" stroke="#94A6BE" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_1_415">
                  <rect width="13" height="13" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p>{date}</p>
          </S.DateInfo>
        </S.Content>
      </S.Card>
    </S.Item>
  );
}

export default Card;