import React, { useEffect, useState } from "react";

export default function UseState() {
    const [value, setValue] = useState(0);

    useEffect(() => {
        console.log("UseEffect");
        console.log("Inside useEffect, the state value is " + value);
    }, [value]);

    console.log("Outside useEffect, the state value is " + value);

    return (
        <div>
            <h1>useState</h1>
            <input
                type="number"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            <button
                onClick={() => setValue(value => Number.parseInt(value) + 1)}
            >
                Inrease
            </button>
        </div>
    );
}
