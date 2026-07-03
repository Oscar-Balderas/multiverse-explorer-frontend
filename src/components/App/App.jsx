import { Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import Home from "../../pages/Home/Home";
import Characters from "../../pages/Characters/Characters";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
