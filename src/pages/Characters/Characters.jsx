import { useState } from "react";
import "./Characters.css";
import CharacterList from "../../components/CharacterList/CharacterList";
import Preloader from "../../components/Preloader/Preloader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

function Characters({ characters, isLoading, hasError }) {
  const [visibleCards, setVisibleCards] = useState(3);

  const visibleCharacters = characters.slice(0, visibleCards);

  function handleShowMore() {
    setVisibleCards(visibleCards + 3);
  }

  return (
    <main className="characters">
      <h2>Personajes</h2>

      {isLoading && <Preloader />}

      {hasError && <ErrorMessage />}

      {!isLoading && !hasError && (
        <>
          <CharacterList characters={visibleCharacters} />

          {visibleCards < characters.length && (
            <button
              className="characters__button"
              type="button"
              onClick={handleShowMore}
            >
              Mostrar más
            </button>
          )}
        </>
      )}
    </main>
  );
}

export default Characters;
