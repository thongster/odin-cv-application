export default function EducationDisplay({ 
  educationList,
  setEduEditId,
  eduEdit,
  setEduEdit,
  setTab,
 }) {
  function handleEdit() {
    setTab("Education")
  }
  return (
    <div>
      <h2>Education</h2>
      {educationList.map((edu) => (
        <div key={edu.id}>
          <p>{edu.school}</p>
          <p>{edu.field}</p>
          <p>{edu.date}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      ))}
    </div>
  );
}
