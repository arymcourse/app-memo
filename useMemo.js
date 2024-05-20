import { useState, useMemo } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const onChange = (e) => {
    if (!e.target.value.length) return;
    setCount(parseInt(e.target.value));
  };

  // Create factorial function:
  const getFactorial = (num) => {
    console.log("Calculating factorial");

    if (num <= 1) return 1;
    return num * getFactorial(num - 1);
  };

  const factorial = useMemo(() => getFactorial(count), [count]);

  return (
    <div>
      <div>
        Count: <input defaultValue={count} onChange={onChange} />
      </div>
      <div>Factorial: {factorial}</div>
    </div>
  );
}
