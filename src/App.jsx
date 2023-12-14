// import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";

function App() {
  return (
    <main className="p-5">
      <Routes>
        <Route path="*" element={<Main />} />
      </Routes>
    </main>
  );
}

export default App;
