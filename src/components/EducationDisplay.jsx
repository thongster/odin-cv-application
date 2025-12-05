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
  return (
    <div>
      <h3>Education</h3>
      {educationList.map((edu) => (
        <div key={edu.id}>
          <p>{edu.school}</p>
          <p>{edu.field}</p>
          <p>{edu.date}</p>
          <button onClick={() => handleEdit(edu)}>Edit</button>
        </div>
      ))}
    </div>
  );
}
