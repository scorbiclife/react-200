import { useEffect, useState } from "react";

function R031_ReactHook() {
  const [content, setContent] = useState("[This is my initial content]");

  // This should run on every render
  useEffect(() => {
    console.log("useEffect")
  });

  return (
    <div>
      <h2>{content}</h2>
      <button onClick={() => setContent("[This is updated from setContent]")}>Button</button>
    </div>
  )
}

export default R031_ReactHook;