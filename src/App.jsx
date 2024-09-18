import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import VocabHome from "/home/myk/Desktop/Polish-Learning/src/pages/vocab/Vocab-Home.jsx";
import GrammarHome from "./pages/grammar/Grammar-Home.jsx";
import CultureHomePage from "./pages/culture/Culture.jsx";
import VocabSection from "/home/myk/Desktop/Polish-Learning/src/components/VocabSection.jsx";
import GrammarSection from "./components/GrammarSection.jsx";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vocab-home" element={<VocabHome />} />
        <Route path="/grammar-home" element={<GrammarHome />} />
        <Route path="/travel" element={<VocabSection section="travel" />} />
        <Route path="/numbers" element={<VocabSection section="numbers" />} />
        <Route
          path="/basic-phrases"
          element={<VocabSection section="basic-phrases" />}
        />
        <Route path="/phrases" element={<VocabSection section="phrases" />} />
        <Route
          path="/greetings"
          element={<VocabSection section="greetings" />}
        />
        <Route
          path="/directions"
          element={<VocabSection section="directions" />}
        />
        <Route path="/shopping" element={<VocabSection section="shopping" />} />
        <Route path="/health" element={<VocabSection section="health" />} />
        <Route path="/weather" element={<VocabSection section="weather" />} />
        <Route path="/tenses" element={<GrammarSection section="tenses" />} />
        <Route
          path="/prepositions"
          element={<GrammarSection section="prepositions" />}
        />
        <Route
          path="/pronouns"
          element={<GrammarSection section="pronouns" />}
        />
        <Route
          path="/singular-plural"
          element={<GrammarSection section="singularplural" />}
        />
        <Route path="/culture" element={<CultureHomePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
