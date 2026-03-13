import { useEffect, useMemo, useState } from 'react';

const DAY_NAMES = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
const MONTH_NAMES = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];

const parseDate = (value) => {
  if (!value) return null;

  const fromTimestamp = Date.parse(value);
  if (!Number.isNaN(fromTimestamp)) {
    return new Date(fromTimestamp);
  }

  const parts = value.split('.');
  if (parts.length === 3) {
    const [day, month, year] = parts.map(Number);
    if (day && month && year) {
      return new Date(year, month - 1, day);
    }
  }

  return null;
};

const formatDate = (date) => {
  if (!date) return '';
  return date.toLocaleDateString('ru-RU');
};

function Calendar({ selectedDate, onChange }) {
  const initialDate = parseDate(selectedDate) || new Date();
  const [currentMonth, setCurrentMonth] = useState(
    new Date(initialDate.getFullYear(), initialDate.getMonth(), 1),
  );
  const [internalSelected, setInternalSelected] = useState(initialDate);

  useEffect(() => {
    const parsed = parseDate(selectedDate);
    if (parsed) {
      setInternalSelected(parsed);
      setCurrentMonth(new Date(parsed.getFullYear(), parsed.getMonth(), 1));
    }
  }, [selectedDate]);

  const days = useMemo(() => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();

    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);

    const startWeekDay = (firstDayOfMonth.getDay() + 6) % 7; // 0 = Monday
    const daysInMonth = lastDayOfMonth.getDate();

    const cells = [];

    for (let i = 0; i < startWeekDay; i += 1) {
      cells.push({
        date: new Date(year, month, i - startWeekDay + 1),
        currentMonth: false,
      });
    }

    for (let d = 1; d <= daysInMonth; d += 1) {
      cells.push({
        date: new Date(year, month, d),
        currentMonth: true,
      });
    }

    while (cells.length % 7 !== 0) {
      const last = cells[cells.length - 1].date;
      cells.push({
        date: new Date(last.getFullYear(), last.getMonth(), last.getDate() + 1),
        currentMonth: false,
      });
    }

    return cells;
  }, [currentMonth]);

  const handlePrevMonth = () => {
    setCurrentMonth(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1),
    );
  };

  const handleNextMonth = () => {
    setCurrentMonth(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1),
    );
  };

  const handleSelectDay = (day) => {
    setInternalSelected(day);
    if (onChange) {
      onChange(day);
    }
  };

  const today = new Date();

  const isSameDay = (a, b) =>
    a &&
    b &&
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate();

  return (
    <div className="calendar">
      <div className="calendar__ttl">
        <p className="calendar__p">
          Выберите дату окончания задачи{' '}
          <span>{formatDate(internalSelected)}</span>
        </p>
      </div>

      <div className="calendar__block">
        <div className="calendar__content">
          <div className="calendar__days-names">
            {DAY_NAMES.map((name) => (
              <div key={name} className="calendar__day-name">
                {name}
              </div>
            ))}
          </div>
          <div className="calendar__cells">
            {days.map(({ date, currentMonth: inCurrentMonth }) => {
              const classes = ['calendar__cell'];
              if (!inCurrentMonth) classes.push('_other-month');
              if (isSameDay(date, today)) classes.push('_current');
              if (isSameDay(date, internalSelected)) classes.push('_active-day');

              return (
                <div
                  key={date.toISOString()}
                  className={classes.join(' ')}
                  onClick={() => handleSelectDay(date)}
                >
                  {date.getDate()}
                </div>
              );
            })}
          </div>
        </div>

        <div className="calendar__nav">
          <div className="calendar__month">
            {MONTH_NAMES[currentMonth.getMonth()]} {currentMonth.getFullYear()}
          </div>
          <div className="nav__actions">
            <button
              type="button"
              className="nav__action"
              onClick={handlePrevMonth}
            >
              {'<'}
            </button>
            <button
              type="button"
              className="nav__action"
              onClick={handleNextMonth}
            >
              {'>'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export const formatRuDate = (value) => {
  const date = value instanceof Date ? value : parseDate(value);
  return formatDate(date);
};

export default Calendar;

