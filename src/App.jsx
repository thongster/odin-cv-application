import { useState } from "react";
import "./App.css";
import General from "./General";
import GeneralDisplay from "./GeneralDisplay";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <>
      <div className="container">
        <General 
          onNameChange={setName}
          onEmailChange={setEmail}
          onPhoneChange={setPhone}
        />
        <GeneralDisplay 
          name={name} 
          email={email} 
          phone={phone} 
        />
      </div>
    </>
  );
}

export default App;
