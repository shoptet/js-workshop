import React, { useEffect, useState, useRef } from "react";

export default function Refs() {
    const [value, setValue] = useState(0);
    const reachedFive = useRef(false);

    useEffect(() => {
        if (value >= 5) {
            reachedFive.current = true;
        }
        console.log(reachedFive.current);
    }, [value]);


    return (
        <div>
            <h1>Another use of refs</h1>
            <input
                type="number"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            <button
                onClick={() => setValue(value => Number.parseInt(value) + 1)}
            >
                Increase
            </button>
            {reachedFive.current && <p>Reached 5! 😎</p>}
        </div>
    );
}
