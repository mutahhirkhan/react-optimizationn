import React, { useRef, useEffect } from "react";
import "./UseRef.css";

const UseRef = () => {
    var inputFocus = useRef(null)
    useEffect(() => {
        inputFocus.current.focus()
    }, [])

  return (
    <div className="use-ref">
      <input
        onClick={(element) => {
          document.querySelector("#phone").style.outlineColor = "#B2BEB5";
          console.log(document.querySelector("#phone").style.outlineColor);
        }}
        ref={inputFocus}
        placeholder="Input phone number"
        type="tel"
        name="phone"
        id="phone"
      />
    </div>
  );
};

export default UseRef;
