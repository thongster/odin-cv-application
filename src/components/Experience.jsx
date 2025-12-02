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
}) {
  function handleSubmit(e) {
    e.preventDefault()

    const entry = {
      id: crypto.randomUUID(),
      position: position,
      company: company,
      duties: duties,
      startDate: startDate,
      endDate: endDate,
    };

    s((prevList) => [...prevList, entry]);
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
                    onChange={(e) => setPosition(e.target.value)} />
            </div>
            <div>
                <label htmlFor="company">Company: </label>
                <input
                    type="text"
                    id="company"
                    required
                    placeholder="Far East Trading Company"
                    onChange={(e) => setCompany(e.target.value)} />
            </div>
        <button type="submit">Add</button>
        </form>
    </>
  )
}
