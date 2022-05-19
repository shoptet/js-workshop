import React, { useEffect, useState } from "react";

export default function Dependencies() {
    const [value, setValue] = useState(0);
    const [value2, setValue2] = useState({ count: 0 });

    useEffect(() => {
        console.log("useEffect");
    }, [value, value2.count]);

    console.log("Rendered ");

    return (
        <div>
            <h1>Dependency checks in React</h1>
            <input
                type="number"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            <button onClick={() => setValue(10)}>Set to 10</button>

            <hr />

            <input
                type="number"
                value={value2.count}
                onChange={e => setValue2({ count: e.target.value })}
            />
            <button onClick={() => setValue2({ count: 99 })}>Set to 99</button>
        </div>
    );
}
