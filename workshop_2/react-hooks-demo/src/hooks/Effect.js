import React, { useState, useEffect } from "react";

export default function Effect() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  useEffect(() => {
    // Similar to componentDidMount and componentDidUpdate:
    console.log(`Každý rerender komponenty`);
  });

  useEffect(() => {
    console.log("Pouze po prvním načtení");
  }, []);

  useEffect(() => {
    console.log("A + 1");
  }, [a]);

  return (
    <div>
      <p>A: {a}</p>
      <p>B: {b}</p>
      <button onClick={() => setA(a + 1)}>A + 1</button>
      <button onClick={() => setB(b + 1)}>B + 1</button>
      {a !== b && <EffectReturn />}
    </div>
  );
}

function EffectReturn() {
  useEffect(() => {
    let timer1 = setInterval(() => console.log("tick"), 1000);
    return () => {
      console.log("stop");
      clearInterval(timer1);
    };
  }, []);

  return <p>EffectReturn</p>;
}
