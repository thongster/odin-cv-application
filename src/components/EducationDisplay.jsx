export default function EducationDisplay({ educationList }) {
  function handleEdit() {}
  return (
    <div>
      <h2>Education</h2>
      {educationList.map((edu) => (
        <div key={edu.id}>
          <p>{edu.school}</p>
          <p>{edu.field}</p>
          <p>{edu.date}</p>
          <button>Edit</button>
        </div>
      ))}
    </div>
  );
}
