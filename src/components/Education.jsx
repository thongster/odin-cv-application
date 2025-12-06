import "../styles/Forms.css";

export default function Education({
  school,
  field,
  date,
  studyLocation,
  setSchool,
  setField,
  setDate,
  setStudyLocation,
  setEducationList,
  eduEditId,
  setEduEditId,
  eduEdit,
  setEduEdit,
}) {
  function handleSubmit(e) {
    e.preventDefault();

    const entry = {
      id: crypto.randomUUID(),
      school: school,
      field: field,
      date: date,
      studyLocation: studyLocation
    };

    if (eduEditId) {
      setEducationList((prevList) =>
        // loop through list
        prevList.map((edu) => {
          // if id is the selected id, replace the object with eduEdit
          // else return original
          if (edu.id === eduEditId) {
            return { ...eduEdit };
          } else {
            return edu;
          }
        }),
      );
    } else if (!eduEditId) {
      setEducationList((prevList) => [...prevList, entry]);
    }

    setEduEditId(null);
  }

  return (
    <>
      <h2>Education</h2>
      <form action="/" method="post" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="school">School: </label>
          <input
            type="text"
            id="school"
            required
            placeholder="Harvard University"
            value={eduEditId ? eduEdit.school : school}
            onChange={(e) =>
              eduEditId
                ? setEduEdit((prev) => ({ ...prev, school: e.target.value }))
                : setSchool(e.target.value)
            }
          />
        </div>
        <div>
          <label htmlFor="field">Qualification: </label>
          <input
            type="text"
            id="field"
            required
            placeholder="Bachelor's Computer Science"
            value={eduEditId ? eduEdit.field : field}
            onChange={(e) =>
              eduEditId
                ? setEduEdit((prev) => ({ ...prev, field: e.target.value }))
                : setField(e.target.value)
            }
          />
        </div>
        <div>
          <label htmlFor="studyLocation">Location: </label>
          <input
            type="text"
            id="studyLocation"
            required
            placeholder="Cambridge, MA"
            value={eduEditId ? eduEdit.studyLocation : studyLocation}
            onChange={(e) =>
              eduEditId
                ? setEduEdit((prev) => ({ ...prev, studyLocation: e.target.value }))
                : setStudyLocation(e.target.value)
            }
          />
        </div>
        <div>
          <label htmlFor="date">Graduation Date: </label>
          <input
            type="month"
            id="date"
            required
            placeholder="Harvard University"
            value={eduEditId ? eduEdit.date : date}
            onChange={(e) =>
              eduEditId
                ? setEduEdit((prev) => ({ ...prev, date: e.target.value }))
                : setDate(e.target.value)
            }
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
