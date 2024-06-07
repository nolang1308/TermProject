import React from 'react';
import './CampPage.css';
import SiteComponent from "../Compnent/SiteComponent/SiteComponent";
import ReviewComponent from "../Compnent/ReviewComponent/ReviewComponent";

const CampPage = ({props}) => {
    return (
        <div className="camp-container">
            <div className="camp-MainFrame">
                <div className={"camp-name"}>캠핑장이름</div>
                <div  className={"camp-filter-button"}>검색필터</div>
                <div className={"camp-row-line"}></div>
                <div className={"camp-scroll-box"}>
                    <SiteComponent/>
                    <SiteComponent/>
                    <SiteComponent/>
                    <SiteComponent/>

                </div>
                <div className={"camp-facility-information"}>시설정보</div>
                <div className={"camp-manner-time"}>매너타임</div>
                <div className={"camp-review-scroll"}>
                    <ReviewComponent/>
                    <ReviewComponent/>
                    <ReviewComponent/>
                    <ReviewComponent/>
                    <ReviewComponent/>
                    <ReviewComponent/>

                </div>



            </div>
        </div>
    );
}

export default CampPage;
