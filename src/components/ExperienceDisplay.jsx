export default function ExperienceDisplay({ experienceList }) {
  return (
    <>
      <h2>Work Experience</h2>
      {experienceList.map((exp) => (
        <div key={exp.id}>
          <p>{exp.position}</p>
          <p>{exp.company}</p>
          <ul>{exp.duties.split("\n").map((duty) => {
            return <li>{duty}</li>
          })}</ul>
          {console.log(exp.duties.split("\n"))}
          <p>{exp.startDate}</p>
          <p>{exp.endDate}</p>
        </div>
      ))}
    </>
  );
}
