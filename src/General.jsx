export default function General({ setName, setEmail, setPhone }) {
  return (
    <>
      <h2>General</h2>
      <form action="/" method="post">
        <div className="nameDiv">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            required
            placeholder="John D. Smith"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="emailDiv">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            required
            placeholder="johndsmith@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="phoneDiv">
          <label htmlFor="phone">Phone Number: </label>
          <input
            type="tel"
            id="phone"
            required
            placeholder="555-555-5555"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </form>
    </>
  );
}
