import "./AnimatedText.scss";

import React, { useEffect, useState } from 'react';

export default function AnimatedText({
    text,
}) {
    const [anim, setAnim] = useState("animation");
    useEffect(() => {
        setAnim(anim === "animation" ? "" : "animation")
    }, [text]);

    const withAnimation = () => {
        const spans = [];
        for (let i = 0; i < text.length; i++) {
            spans.push(
                (
                    <span className={text.length - 1 === i ? "animation" : ""}>
                        {text[i]}
                    </span>
                )
            );
        }
        return spans;
    }

    return (
        <span className="animated-text">
            {withAnimation()}
        </span>
    );
}