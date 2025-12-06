

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
  function convertDate(raw) {
    const date = new Date(raw + "-01");
    return date.toLocaleString("en-US", { month: "long", year: "numeric" });
  }
  return (
    <div>
      <h3>Work Experience</h3>
      {experienceList.map((exp) => (
        <div key={exp.id}>
          <p>{exp.position}</p>
          <p>{exp.company}</p>
          <ul>
            {exp.duties.split("\n").map((duty) => {
              return <li key={crypto.randomUUID()}>{duty}</li>;
            })}
          </ul>
          <p>{convertDate(exp.startDate)} - {convertDate(exp.endDate)}</p>          <button onClick={() => handleEdit(exp)}>Edit</button>
        </div>
      ))}
    </div>
  );
}
