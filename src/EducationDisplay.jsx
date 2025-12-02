export default function EducationDisplay({ educationList }) {

  return (
    <>
      {educationList.map((edu) => (
        <div key={edu.id}>
            <p>{edu.school}</p>
            <p>{edu.field}</p>
            <p>{edu.date}</p>
        </div>
      ))}
    </>
  );
}
