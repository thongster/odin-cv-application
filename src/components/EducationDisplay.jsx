import "../styles/EducationDisplay.css";

export default function EducationDisplay({
  educationList,
  setEduEditId,
  setEduEdit,
  setTab,
}) {
  function handleEdit(edu) {
    setEduEditId(edu.id);
    setEduEdit(edu);
    setTab("Education");
  }

  function convertDate(raw) {
    const date = new Date(raw + "-01");
    return date.toLocaleString("en-US", { month: "long", year: "numeric" });
  }

  return (
    <div>
      <h3>Education</h3>
      {educationList.map((edu) => (
        <div key={edu.id}>
          <div className="firstLine">
            <p><b>{edu.school}</b></p>
            <p>{edu.studyLocation}</p>
          </div>
          <div className="secondLine">
            <p>{edu.field}</p>
            <p>{convertDate(edu.date)}</p>
          </div>
          <button onClick={() => handleEdit(edu)}>Edit</button>
        </div>
      ))}
    </div>
  );
}
