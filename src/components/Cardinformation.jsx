import React from 'react';
import AnimatedText from "./AnimatedText";

function Cardinformation({
    name,
    value,
    focused,
    className,
}) {
    return (
        <div className={`card-include ${className}`}>
            <span>{name}</span>
            <h4 className={`${focused ? "focused" : ""}`} >
                <AnimatedText text={value} />
            </h4>
        </div>
    );

};

export default Cardinformation;
