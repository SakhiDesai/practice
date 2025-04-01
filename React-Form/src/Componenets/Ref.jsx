import React, { useRef } from "react";

function Ref() {
  const divRef = useRef();
  const changeColor = () => {
    divRef.current.style.backgroundColor = "lightblue";
  };

  return (
    <div>
      <Child divRef={divRef} />
      <button onClick={changeColor}>Change Background Color</button>
    </div>
  );
}

function Child({ divRef }) {
  return (
    <div
      ref={divRef}
      style={{ width: "200px", height: "200px", backgroundColor: "lightgray" }}
    >
      <p>Click the button to change the background color!</p>
    </div>
  );
}

export default Ref;
