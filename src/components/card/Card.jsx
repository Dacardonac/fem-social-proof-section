import c from "./Card.module.scss";

const Card = ({ name, img, text, className }) => {
  return (
    <article className={`${c.card} ${className || ""}`}>
      <div className={c["card__user"]}>
        <img
          src={img}
          alt={`Profile image of ${name}`}
          className={c["card__user-image"]}
        />
        <div className={c["card__user__info"]}>
          <h2 className={c["card__user__info-name"]}>{name}</h2>
          <h3 className={c["card__user__info-status"]}>Verified Buyer</h3>
        </div>
      </div>
      <p className={c["card__text"]}>{text}</p>
    </article>
  );
};

export default Card;
