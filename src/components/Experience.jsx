export default function Experience({
  position,
  company,
  duties,
  startDate,
  endDate,
  setPosition,
  setCompany,
  setDuties,
  setStartDate,
  setEndDate,
  setExperienceList,
}) {
  function handleSubmit(e) {
    e.preventDefault();

    const entry = {
      id: crypto.randomUUID(),
      position: position,
      company: company,
      duties: duties,
      startDate: startDate,
      endDate: endDate,
    };

    setExperienceList((prevList) => [...prevList, entry]);
    console.log(entry);
  }

  return (
    <>
      <h2>Experience</h2>
      <form action="/" method="post" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="position">Position: </label>
          <input
            type="text"
            id="position"
            required
            placeholder="Sales Consultant"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="company">Company: </label>
          <input
            type="text"
            id="company"
            required
            placeholder="Far East Trading Company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="duties">Responsibilities: </label>
          <textarea
            id="duties"
            required
            placeholder="Increased sales 100%"
            rows="6"
            value={duties}
            onChange={(e) => setDuties(e.target.value)}
          ></textarea>
        </div>
        <div>
          <label htmlFor="startDate">Start Date: </label>
          <input
            type="date"
            id="startDate"
            required
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="endDate">End Date: </label>
          <input
            type="date"
            id="endDate"
            required
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          ></input>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
