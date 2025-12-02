export default function ExperienceDisplay({ experienceList }) {
    return (
      <>
        <h2>Work Experience</h2>
        {experienceList.map((exp) => {
            <div key={exp.id}>
                <p>{exp.position}</p>
                <p>{exp.company}</p>
                <p>{exp.duties}</p>
                <p>{exp.startDate}</p>
                <p>{exp.endDate}</p>
            </div>
        })}
      </>
    )
}
