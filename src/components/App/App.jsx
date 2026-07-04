import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Home from "../../pages/Home/Home";
import Characters from "../../pages/Characters/Characters";
import Preloader from "../Preloader/Preloader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

import { getCharacters } from "../../utils/api";

function App() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    getCharacters()
      .then((data) => {
        setCharacters(data.results);
      })
      .catch((err) => {
        console.log(err);
        setHasError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/characters"
          element={
            <Characters
              characters={characters}
              isLoading={isLoading}
              hasError={hasError}
            />
          }
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
