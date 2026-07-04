import "./CharacterList.css";
import CharacterCard from "../CharacterCard/CharacterCard";

function CharacterList({ characters }) {
  return (
    <section className="character-list">
      {characters.map((character) => (
        <CharacterCard
          key={character.id}
          name={character.name}
          image={character.image}
          status={character.status}
          species={character.species}
        />
      ))}
    </section>
  );
}

export default CharacterList;
