import s from './Stars.module.scss';

const Stars = ({ text }) => {
  return (
    <article className={s.card}>
      <div className={s.stars}>
        <div className={s['stars__container']}>
          {[...Array(5)].map((_, i) => (
            <img
              key={i}
              src="images/icon-star.svg"
              alt="Star"
              className={s['stars__container-icon']}
            />
          ))}
        </div>
        <p className={s['stars__text']}>{text}</p>
      </div>
    </article>
  );
};

export default Stars;
