import React, { useState } from "react";
import './SiteComponent.css';
import { useNavigate } from "react-router-dom";
import Calendar from 'react-calendar'; // react-calendar import

const SiteComponent = ({ props }) => {
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showModal, setShowModal] = useState(false); // 모달 표시 여부 상태

    const navigateToCampPage = () => {
        setShowModal(true); // 클릭 시 모달 표시
    };

    const nextSite = () => {
        setCurrentIndex((prevIndex) => (prevIndex === sites.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSite = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? sites.length - 1 : prevIndex - 1));
    };

    const closeModal = () => {
        setShowModal(false); // 모달 닫기
    };


    const sites = ["사이트타입 1", "사이트타입 2", "사이트타입 3"];

    const specialDates = [
        new Date(2024, 5, 6), // 특정 날짜를 추가하세요
        new Date(2024, 5, 15),
        new Date(2024, 5, 30)
    ];



    const tileContent = ({ date }) => {
        return specialDates.find(d => d.getTime() === date.getTime()) ? <div className="red-tile"></div> : null;

    };

    const [currentImage, setCurrentImage] = useState(0);
    const images = ["사진1.jpg", "사진2.jpg", "사진3.jpg"]; // 여기에 이미지 파일명을 넣으세요

    const nextSlide = () => {
        setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
    };

    const prevSlide = () => {
        setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
    };
    const navigateToReservation=()=>{
        navigate("/reservation");

    }
    return (
        <div className={"site-carousel"}>
            <button onClick={prevSite}>이전</button>
            <div className={"site-list-box"} onClick={navigateToCampPage}>
                <div className={"site-type"} >
                    {sites[currentIndex]}
                </div>
            </div>
            <button onClick={nextSite}>다음</button>

            {/* 모달 */}
            {showModal && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close" onClick={closeModal}>&times;</span>

                        {/* 사진 카루셀 */}
                        <div className="carousel">
                            <button className="prev" onClick={prevSlide}>&#10094;</button>
                            <img src={images[currentImage]} alt={`사진 설명 ${currentImage + 1}`}/>
                            <button className="next" onClick={nextSlide}>&#10095;</button>
                        </div>

                        {/* 수용인원 표시 */}
                        <p>수용인원: 10명</p>

                        {/* 예약 현황 달력 */}
                        <Calendar tileContent={tileContent}/>

                        {/* 예약하러 가기 버튼 */}
                        <button onClick={navigateToReservation}>예약하러 가기</button>
                    </div>
                </div>

            )}
        </div>
    );
}

export default SiteComponent;
