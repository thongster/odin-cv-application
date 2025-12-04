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
  expEditId,
  setExpEditId,
  expEdit,
  setExpEdit,
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

    if (expEditId) {
      setExperienceList((prevList) =>
        prevList.map((exp) => {
          if (exp.id === expEditId) {
            return { ...expEdit };
          } else {
            return exp;
          }
        }),
      );
    } else {
      setExperienceList((prevList) => [...prevList, entry]);
    }

    setExpEditId(null);
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
            value={expEditId ? expEdit.position : position}
            onChange={(e) =>
              expEditId
                ? setExpEdit((prev) => ({ ...prev, position: e.target.value }))
                : setPosition(e.target.value)
            }
          />
        </div>
        <div>
          <label htmlFor="company">Company: </label>
          <input
            type="text"
            id="company"
            required
            placeholder="Far East Trading Company"
            value={expEditId ? expEdit.company : company}
            onChange={(e) =>
              expEditId
                ? setExpEdit((prev) => ({ ...prev, company: e.target.value }))
                : setCompany(e.target.value)
            }
          />
        </div>
        <div>
          <label htmlFor="duties">Responsibilities: </label>
          <textarea
            id="duties"
            required
            placeholder="Increased sales 100%"
            rows="6"
            value={expEditId ? expEdit.duties : duties}
            onChange={(e) =>
              expEditId
                ? setExpEdit((prev) => ({ ...prev, duties: e.target.value }))
                : setDuties(e.target.value)
            }
          ></textarea>
        </div>
        <div>
          <label htmlFor="startDate">Start Date: </label>
          <input
            type="date"
            id="startDate"
            required
            value={expEditId ? expEdit.startDate : startDate}
            onChange={(e) =>
              expEditId
                ? setExpEdit((prev) => ({ ...prev, startDate: e.target.value }))
                : setStartDate(e.target.value)
            }
          ></input>
        </div>
        <div>
          <label htmlFor="endDate">End Date: </label>
          <input
            type="date"
            id="endDate"
            required
            value={expEditId ? expEdit.endDate : endDate}
            onChange={(e) =>
              expEditId
                ? setExpEdit((prev) => ({ ...prev, endDate: e.target.value }))
                : setEndDate(e.target.value)
            }
          ></input>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
