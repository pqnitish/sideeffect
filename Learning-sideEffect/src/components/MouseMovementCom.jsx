import { useEffect } from "react";

export default function MouseMovementComp() {
  useEffect(() => {
    const handleMousePosition = (e) => {
      console.log(`Mouse Position : X=${e.clientX} Y=${e.clientY}`);
    };
    window.addEventListener("mousemove", handleMousePosition);
    return function cleanUp() {
      window.removeEventListener("mousemove", handleMousePosition);
    };
  }, []);
  return (
    <div>
      <h1>Move your mouse around!</h1>
      <p>Check the console to see the mouse position.</p>
    </div>
  );
}
