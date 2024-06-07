import React, {useState} from 'react';
import './MainPage.css';
import CampInfoObject from "../Compnent/CampInfoObject/CampInfoObject";
import CampFilter from "../CampFilter/CampFilter";

const MainPage = ({props}) => {
    const [showModal, setShowModal] = useState(false);

    const handleFilterButtonClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    // 문자열 불러오기
    const myString = sessionStorage.getItem('filterOption');


    return (
        <div className="container">
            <div className="MainFrame">
                <div className={"main-mypage-button"}></div>
                <div className={"main-filter-button"} onClick={handleFilterButtonClick}>검색필터</div>
                <div className={"main-filter-option"}>{myString}</div>
                <div className={"main-row-line"}></div>
                <div className={"scroll-box"}>
                    <CampInfoObject/>
                    <CampInfoObject/>
                    <CampInfoObject/>
                    <CampInfoObject/>
                    <CampInfoObject/>
                    <CampInfoObject/>
                    <CampInfoObject/>
                    <CampInfoObject/>
                    <CampInfoObject/>
                    <CampInfoObject/>
                    <CampInfoObject/>
                    <CampInfoObject/>
                    <CampInfoObject/>
                    <CampInfoObject/>
                    <CampInfoObject/>
                </div>
            </div>
            <CampFilter show={showModal} onClose={handleCloseModal}/>
        </div>
    );
}

export default MainPage;
