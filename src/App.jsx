import { use, useState } from "react";
import "./App.css";
import General from "./General";
import GeneralDisplay from "./GeneralDisplay";
import Education from "./Education";
import EducationDisplay from "./EducationDisplay";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [school, setSchool] = useState("");
  const [field, setField] = useState("");
  const [date, setDate] = useState("");

  return (
    <>
      <div className="container">
        <General setName={setName} setEmail={setEmail} setPhone={setPhone} />
        <Education setSchool={setSchool} setField={setField} setDate={setDate}/>
        <GeneralDisplay name={name} email={email} phone={phone} />
        <Education school={school} field={field} date={date}/>
      </div>
    </>
  );
}

export default App;
