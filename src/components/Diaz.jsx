import React, { useEffect, useState } from 'react';

import "./Diaz.scss";

function Diaz({
    value,
    focused,
}) {
    const stringValue = new String(value);
    const [anim, setAnim] = useState("animation");

    useEffect(() => {
        setAnim(anim === "animation" ? "" : "animation")
    }, [value]);

    const compute = (start, end, value) => value.slice(start, end)
        .concat("####")
        .slice(0, 4);


    const withAnimation = (start, end) => {
        const result = compute(start, end, stringValue);

        const spans = [];
        for (let i = 0; i < result.length; i++) {
            spans.push(
                (
                    <span className={stringValue.length - 1 === i + start ? "animation" : ""}>
                        {result[i]}
                    </span>
                )
            );
        }
        return spans;
    }

    return (
        <span className={`span-area ${focused ? "focused" : ""}`} >
            <span>{withAnimation(0, 4)}</span>
            <span>{withAnimation(4, 8)}</span>
            <span>{withAnimation(8, 12)}</span>
            <span>{withAnimation(12, 16)}</span>
        </span>
    )
}

export default Diaz;
