import React, { useRef } from "react";

// Child component with forwardRef
const Child = React.forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      style={{
        width: "200px",
        height: "200px",
        backgroundColor: "lightgray",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <p>Click the button to change my background color!</p>
    </div>
  );
});

function Forwardref() {
  const divRef = useRef();
  const changeColor = () => {
    divRef.current.style.backgroundColor = "lightblue";
  };

  return (
    <div>
      <Child ref={divRef} />
      <button onClick={changeColor}>Change Background Color</button>
    </div>
  );
}

export default Forwardref;
