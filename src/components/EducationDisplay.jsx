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
    const date = new Date(raw + "-01")
    return date.toLocaleString("en-US", { month: "long", year: "numeric" })
  }

  return (
    <div>
      <h3>Education</h3>
      {educationList.map((edu) => (
        <div key={edu.id}>
          <p>{edu.school}</p>
          <p>{edu.field}</p>
          <p>{convertDate(edu.date)}</p>
          <button onClick={() => handleEdit(edu)}>Edit</button>
        </div>
      ))}
    </div>
  );
}
