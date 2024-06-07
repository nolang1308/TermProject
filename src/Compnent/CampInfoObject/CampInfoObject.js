import React, { useState } from "react";
import './CampInfoObject.css';
import { useNavigate } from "react-router-dom";

const CampInfoObject = ({ props }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
        "path_to_image1.jpg",
        "path_to_image2.jpg",
        "path_to_image3.jpg"
    ];

    const navigate = useNavigate();

    const navigateToCampPage = () => {
        navigate("/camppage");
    };

    const handlePrevClick = (e) => {
        e.stopPropagation();
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const handleNextClick = (e) => {
        e.stopPropagation();
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div onClick={navigateToCampPage} className={"camp-info-object"}>
            <div className={"camp-info-picture"}>
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Slide ${index}`}
                        className={index === currentImageIndex ? "active" : ""}
                    />
                ))}
                <div className="carousel-buttons">
                    <button className="carousel-button" onClick={handlePrevClick}>‹</button>
                    <button className="carousel-button" onClick={handleNextClick}>›</button>
                </div>
            </div>
            <div className={"camp-info-name"}>
                제천 은성낚시공원캠핑장
            </div>
            <div className={"camp-info-address"}>
                충청북도 제천시 봉야읍 논골로 242
            </div>
            <div className={"camp-info-phone"}>
                010-0000-0000
            </div>
        </div>
    );
};

export default CampInfoObject;
