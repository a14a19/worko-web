// import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import { useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";
import Docs from "./pages/Docs";
import LoginSignUp from "./components/LoginSignUp";

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
    <>
      <Routes>
        <Route path="/*" element={<Main />} />
        <Route path="/docs/*" element={<Docs />} />
        <Route path="/login" element={<LoginSignUp />} />
        <Route path="/sign-up" element={<LoginSignUp />} />
      </Routes>
    </>
  );
}

export default App;
