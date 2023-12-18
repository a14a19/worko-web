// import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import { useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";

function App() {

  const location = useLocation()
  const currentPath1 = location.pathname.split("/")[1];
  const currentPath2 = location.pathname.split("/")[2];

  useLayoutEffect(() => {

    return () => window.scrollTo({
      top: 0,
      opacity: 0,
      behavior: "smooth",
    });

  }, [currentPath1, currentPath2])


  return (
    <main className="px-5">
      <Routes>
        <Route path="*" element={<Main />} />
      </Routes>
    </main>
  );
}

export default App;
