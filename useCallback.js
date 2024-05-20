import React, { useState, useCallback } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // Callback з масивом залежностей:
  const handleClick = useCallback(() => {
    console.log("handleClick: count", count);
    console.log("handleClick: text", text);
  }, [count, text]);

  return (
    <div>
      <div>Count: {count}</div>
      <div>Text: {text}</div>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <button onClick={handleClick}>Log Values</button>
    </div>
  );
}
