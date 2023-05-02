import React from "react";
import "./style.css";

export default function App() {
  const recursive = "React JS";

  function Hello(data) {
    if (data <= 0) {
      return "Done!";
    } else {
      return <div>{data}{Hello(data - 1)}</div>;
    }
  }

  return (
    <div>
      <p>Recursive {recursive}</p>
      <p>wwww{Hello(10)}</p>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}

