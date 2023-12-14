import Header from "./components/Header";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Changelog from "./components/Changelog/Changelog";

function App() {
  return (
    <main className="p-5">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/changelog" element={<Changelog />} />
      </Routes>
    </main>
  );
}

export default App;
