import React from 'react';

const CARDS = {
    visa: '^4',
    mastercard: '^5[1-5]',
    discover: '^6'
};

function Logo({ cardNumber, noChip }) {
    const card = cardNumber.match(CARDS.visa) ? "visa"
        : cardNumber.match(CARDS.mastercard) ? "mastercard" : cardNumber.match(CARDS.discover) ? "discover" : "visa";

    return (
        <div className="logo">
            {!noChip && <img className='chip' src="images/chip.png" alt="" />}
            <img src={`images/${card}.png`} alt="" />
        </div>
    );
};

export default Logo;