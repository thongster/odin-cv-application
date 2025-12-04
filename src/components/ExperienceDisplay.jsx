export default function ExperienceDisplay({
  experienceList,
  setTab,
  setExpEditId,
  setExpEdit,
}) {
  function handleEdit(exp) {
    setExpEditId(exp.id);
    setExpEdit(exp);
    setTab("Experience");
  }
  return (
    <div>
      <h2>Work Experience</h2>
      {experienceList.map((exp) => (
        <div key={exp.id}>
          <p>{exp.position}</p>
          <p>{exp.company}</p>
          <ul>
            {exp.duties.split("\n").map((duty) => {
              return <li key={crypto.randomUUID()}>{duty}</li>;
            })}
          </ul>
          <p>{exp.startDate}</p>
          <p>{exp.endDate}</p>
          <button onClick={handleEdit(exp)}>Edit</button>
        </div>
      ))}
    </div>
  );
}
