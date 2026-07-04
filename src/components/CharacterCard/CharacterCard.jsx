import "./CharacterCard.css";

function CharacterCard({ name, image, status, species }) {
  return (
    <article className="character-card">
      <img className="character-card__image" src={image} alt={name} />

      <div className="character-card__content">
        <h3 className="character-card__name">{name}</h3>
        <p className="character-card__text">Estado: {status}</p>
        <p className="character-card__text">Especie: {species}</p>
      </div>
    </article>
  );
}

export default CharacterCard;
