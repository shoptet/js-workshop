import React, { useEffect, useState, useRef } from "react";

export default function WarmUp() {
  const [value, setValue] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    console.log("UseEffect");
    console.log(
      "Inside useEffect, the input ref value is " +
        (inputRef.current && inputRef.current.value)
    );
  });

  useEffect(() => {
    console.log("Mounts");
    return () => {
      console.log("Unmounts");
    };
  }, []);

  console.log(
    "Outside useEffect, the input ref value is " +
      (inputRef.current && inputRef.current.value)
  );

  return (
    <div>
      <h1>Warm-up + refs</h1>
      <input
        type="number"
        value={value}
        ref={inputRef}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => setValue((value) => Number.parseInt(value) + 1)}>
        Increase
      </button>
    </div>
  );
}
