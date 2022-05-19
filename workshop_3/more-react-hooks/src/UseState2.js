import React, { useState } from "react";

export default function UseState2() {
    const [value, setValue] = useState(0);

    function doubleIncrease() {
        setValue(value + 1);
        setValue(value + 1);
    }

    return (
        <div>
            <h1>useState 2 </h1>
            <input
                type="number"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            <button
                onClick={doubleIncrease}
            >
                Increase by 2
            </button>
        </div>
    );
}
