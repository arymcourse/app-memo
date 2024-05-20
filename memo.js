import "./styles.css";

import React, { memo, useState } from "react";

// Мемуізований компонент Counter
const Counter = memo(({ count }) => {
  console.log("Counter render"); // Логування рендеру

  return <h1>Current count: {count}</h1>;
});

// Немемуізований / Мемуізований компонент TextDisplay
// const TextDisplay = memo(({ text }) => {
const TextDisplay = ({ text }) => {
  console.log("TextDisplay render"); // Логування рендеру

  return <p>Current text: {text}</p>;
};
// });

// Основний компонент App
export default function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // Це буде логуватися при кожному рендері App:
  console.log("App render");

  // Обробник кліку для оновлення лічильника
  const onCountClick = () => setCount((prevCount) => prevCount + 1);

  // Обробник зміни тексту
  const onTextChange = (e) => setText(e.target.value);

  return (
    <div>
      <Counter count={count} />
      <button onClick={onCountClick}>Increment Count</button>
      <input
        type="text"
        value={text}
        onChange={onTextChange}
        placeholder="Type something..."
      />
      <TextDisplay text={text} />
    </div>
  );
}
