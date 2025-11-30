import { useState } from "react";
import "./App.css";
import General from "./General";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <General />
      </div>
    </>
  );
}

export default App;
