export default function EducationDisplay({ educationList }) {
  return (
    <div>
      <h2>Education</h2>
      {educationList.map((edu) => (
        <div key={edu.id}>
          <p>{edu.school}</p>
          <p>{edu.field}</p>
          <p>{edu.date}</p>
        </div>
      ))}
    </div>
  );
}
