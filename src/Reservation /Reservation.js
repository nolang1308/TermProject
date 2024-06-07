import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import './Reservation.css';
import 'react-datepicker/dist/react-datepicker.css';

const Reservation = () => {
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);
    const [guests, setGuests] = useState(1);

    const handleReservation = () => {
        const checkInFormatted = checkInDate ? checkInDate.toLocaleDateString() : '입실일 선택 안됨';
        const checkOutFormatted = checkOutDate ? checkOutDate.toLocaleDateString() : '퇴실일 선택 안됨';
        alert(`체크인 날짜: ${checkInFormatted}\n체크아웃 날짜: ${checkOutFormatted}\n인원수: ${guests}`);
    };

    return (
        <div className="reservation-container">
            <h1>예약하기</h1>
            <div className="input-group">
                <label>입실일:</label>
                <DatePicker
                    selected={checkInDate}
                    onChange={(date) => setCheckInDate(date)}
                    dateFormat="yyyy/MM/dd"
                    placeholderText="날짜 선택"
                    customInput={<input className="date-input" />}
                />
            </div>
            <div className="input-group">
                <label>퇴실일:</label>
                <DatePicker
                    selected={checkOutDate}
                    onChange={(date) => setCheckOutDate(date)}
                    dateFormat="yyyy/MM/dd"
                    placeholderText="날짜 선택"
                    customInput={<input className="date-input" />}
                />
            </div>
            <div className="input-group">
                <label>인원수:</label>
                <input
                    type="number"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    min="1"
                    className="guest-input"
                />
            </div>
            <button onClick={handleReservation} className="reservation-button">예약완료</button>
        </div>
    );
};

export default Reservation;
