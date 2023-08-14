import "./Card.scss";

import React from 'react';

import Cardinformation from './Cardinformation';
import Diaz from './Diaz';
import Logo from './Logo';

export default function Card({
    active,
    values,
    focusedInput,
}) {
    const yearTwoDigits = values.expireYear ? values.expireYear % 100 : "YY";
    const expires = `${values.expireMonth || "MM"} / ${yearTwoDigits}`;

    return (
        <div className={`flip-card-inner`}>
            <div className={`creditcard-area flip-card-front`}>
                <Logo cardNumber={values.cardNumber} />
                <Diaz value={values.cardNumber} focused={focusedInput === "cardNumber"} />
                <div className='card-information'>
                    <Cardinformation name="Card Holder" value={values.cardHolder || "AD SOYAD"} focused={focusedInput === "cardHolder"} />
                    <Cardinformation name="Expires" value={expires} focused={["expireMonth", "expireYear"].includes(focusedInput)} />
                </div>
            </div>`
            <div className={`creditcard-area ${active ? "flip-card-back-active" : "flip-card-back"}`}>
                <div className='black-rectangle'></div>
                <Cardinformation className="cvv" value={values.cvv || "CVV"} focused={focusedInput === "cvv"} />
                <Logo noChip cardNumber={values.cardNumber} />
            </div>
        </div>
    );
}