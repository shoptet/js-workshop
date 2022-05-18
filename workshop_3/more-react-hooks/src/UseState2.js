import React, { useEffect, useState } from "react";

export default function UseState2() {
    const [value, setValue] = useState(0);
    const [total, setTotal] = useState(100);

    useEffect(() => {
        setTotal(100 - value);
        console.log("The total is now " + total);
    }, [value, total]);

    console.log("Renders");

    return (
        <div>
            <h1>useState 2 </h1>
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
        </div>
    );
}
