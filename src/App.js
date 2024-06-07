import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CampPage from "./CampPage/CapmPage";
import MainPage from "./MainPage/MainPage";
import Reservation from "./Reservation /Reservation"; // 여기서 경로를 수정합니다.

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/camppage" element={<CampPage />} />
                <Route path="/reservation" element={<Reservation />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
