import React from "react";
import { useToggle } from "./useToggle";

export default function Custom() {
  const [isTextChanged, setIsTextChanged] = useToggle();

  return (
    <div>
      <button onClick={setIsTextChanged}>
        {isTextChanged ? "Toggled" : "Click to Toggle"}
      </button>
    </div>
  );
}
