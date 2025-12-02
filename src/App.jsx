import { useState } from "react";
import "./styles/App.css";
import General from "./components/General";
import GeneralDisplay from "./components/GeneralDisplay";
import Education from "./components/Education";
import EducationDisplay from "./components/EducationDisplay";
import Experience from "./components/Experience";
import ExperienceDisplay from "./components/ExperienceDisplay";

function App() {
  // General info
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  // Education info
  const [educationList, setEducationList] = useState([]);
  const [school, setSchool] = useState("");
  const [field, setField] = useState("");
  const [date, setDate] = useState("");
  // Experience info
  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");
  const [duties, setDuties] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  return (
    <>
      <div className="container">
        <General setName={setName} setEmail={setEmail} setPhone={setPhone} />
        <Education
          school={school}
          field={field}
          date={date}
          setSchool={setSchool}
          setField={setField}
          setDate={setDate}
          setEducationList={setEducationList}
        />
        <Experience 
          position={position} 
          company={company} 
          duties={duties}
          startDate={startDate}
          endDate={endDate}
          setPosition={setPosition}
          setCompany={setCompany}
          setDuties={setDuties}
          setStartDate={setStartDate}
          setEndDate={setEndDate} 
        />
        <GeneralDisplay name={name} email={email} phone={phone} />
        <EducationDisplay educationList={educationList} />
        <ExperienceDisplay />
      </div>
    </>
  );
}

export default App;
