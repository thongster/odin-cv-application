import { useState } from "react";
import "./styles/App.css";
import General from "./components/General";
import GeneralDisplay from "./components/GeneralDisplay";
import Education from "./components/Education";
import EducationDisplay from "./components/EducationDisplay";
import Experience from "./components/Experience";
import ExperienceDisplay from "./components/ExperienceDisplay";
import Tabs from "./Tabs";

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
  const [experienceList, setExperienceList] = useState([]);
  // Tabs states
  const [tab, setTab] = useState("General");
  // Display states
  const [isGenEdit, setIsGenEdit] = useState(false);
  const [genEdit, setGenEdit] = useState({
    name,
    email,
    phone,
  });
  const [eduEditId, setEduEditId] = useState(null);
  const [eduEdit, setEduEdit] = useState(
    {
      school,
      field,
      date,
    },
  );
  const [expEditId, setExpEditId] = useState(null);
  const [expEdit, setExpEdit] = useState([]);

  return (
    <>
      <div className="container">
        <div className="formSide">
          <Tabs setTab={setTab} />
          {tab === "General" && (
            <General
              setName={setName}
              setEmail={setEmail}
              setPhone={setPhone}
              genEdit={genEdit}
              setGenEdit={setGenEdit}
              isGenEdit={isGenEdit}
              setIsGenEdit={setIsGenEdit}
            />
          )}
          {tab === "Education" && (
            <Education
              school={school}
              field={field}
              date={date}
              setSchool={setSchool}
              setField={setField}
              setDate={setDate}
              setEducationList={setEducationList}
              eduEditId={eduEditId}
              setEduEditId={setEduEditId}
              eduEdit={eduEdit}
              setEduEdit={setEduEdit}
            />
          )}
          {tab === "Experience" && (
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
              setExperienceList={setExperienceList}
            />
          )}
        </div>
        <div className="resumeSide">
          <GeneralDisplay
            name={name}
            email={email}
            phone={phone}
            setGenEdit={setGenEdit}
            setIsGenEdit={setIsGenEdit}
            setTab={setTab}
          />
          <EducationDisplay
            educationList={educationList}
            eduEditId={eduEditId}
            setEduEditId={setEduEditId}
            eduEdit={eduEdit}
            setEduEdit={setEduEdit}
            setTab={setTab}
          />
          <ExperienceDisplay
            experienceList={experienceList}
            expEditId={expEditId}
            setExpEditId={setExpEditId}
            expEdit={expEdit}
            setExpEdit={setExpEdit}
            setTab={setTab}
          />
        </div>
      </div>
    </>
  );
}

export default App;
