import { useState, useEffect } from "react";
export default function DocumentTitleComp() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
    return function cleanUp() {
      document.title = "cleaning"; //clean up
    };
  }, [count]);
  return (
    <div>
      <h1>Click the button to update the document title</h1>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <p>You clicked {count} times</p>
    </div>
  );
}
