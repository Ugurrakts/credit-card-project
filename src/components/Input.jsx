import React from 'react';

function Input({
    type,
    label,
    name,
    onChange,
    onClick,
    error,
    placeholder,
    maxnumber
}) {
    
    return (
        <>
            {label && <label htmlFor="" >
                {label}&nbsp;&nbsp;
                {error && <span style={{ color: "red" }}>
                    *{error}
                </span>}
            </label>}
            <input placeholder={placeholder} name={name} type={type} onChange={onChange} onClick={onClick}  maxLength={maxnumber} />
        </>
    );
};

export default Input;
