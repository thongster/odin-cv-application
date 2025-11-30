export default function Education({ setSchool, setField, setDate }) {
  function handleSubmit(e) {
    e.preventDefault();
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
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </>
  );
}
