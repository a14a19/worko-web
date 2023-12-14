import Home from "./Home"
import { Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Changelog from "../components/Changelog/Changelog";

function Main() {
    return (
        <>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="changelog" element={<Changelog />} />
            </Routes>
        </>
    )
}

export default Main;