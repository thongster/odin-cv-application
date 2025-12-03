export default function Education({
  school,
  field,
  date,
  setSchool,
  setField,
  setDate,
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
    };

    setEducationList((prevList) => [...prevList, entry]);
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
            value={school}
            onChange={(e) => setSchool(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="field">Field of Study: </label>
          <input
            type="text"
            id="field"
            required
            placeholder="Computer Science"
            value={field}
            onChange={(e) => setField(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="date">Graduation Date: </label>
          <input
            type="date"
            id="date"
            required
            placeholder="Harvard University"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
