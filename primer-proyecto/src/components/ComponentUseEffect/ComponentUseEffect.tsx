import { useEffect, useState } from "react";

export const ComponentUseEffect = () => {
  const [state, setState] = useState(false);

  useEffect(() => {
    console.log("estoy");
  }, []);
  useEffect(() => {
    console.log("estoy x2");
  }, [state]);
  return (
    <div>
      <p>{state ? "Es true" : "Es false"}</p>
      <button
        onClick={() => {
          setState(!state);
        }}
      >
        Cambiar estado
      </button>
    </div>
  );
};
