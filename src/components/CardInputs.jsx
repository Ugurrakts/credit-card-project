import React from 'react';

import { Field } from "formik";
import Input from './Input';
export default function CardInputs({
    handleChange,
    handleClick,
    errors,
    values,
}) {
    return (
        <>
            <Input type="text" label="Card Number" name="cardNumber" maxnumber="16" onChange={handleChange} error={errors.cardNumber} onClick={handleClick} />
            <Input type="text" label="Card Name" name="cardHolder" onChange={handleChange} error={errors.cardHolder} onClick={handleClick} maxnumber="22" />
            <div className='label-area'>
                <label>Expiration Date</label>
                <label>Cvv</label>
            </div>
            <div className='select-box-area'>
                <Field as="select" name="expireMonth" onClick={handleClick}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((month) => (
                        <option key={month} value={month}>{month}</option>
                    ))}
                </Field>
                <Field as="select" name="expireYear" onClick={handleClick}>
                    {[2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030].map((year) => (
                        <option key={year} value={year} >{year}</option>
                    ))}
                </Field>
                <Input placeholder="CVV"
                    name="cvv"
                    value={values.cvv}
                    maxnumber={3}
                    onChange={handleChange}
                    onClick={handleClick}
                />
            </div>
        </>
    )
}

