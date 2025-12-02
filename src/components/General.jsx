import { useState } from "react";

export default function General({ setName, setEmail, setPhone }) {
  const [input, setInput] = useState({
    name: "",
    email: "",
    phone: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    setName(input.name);
    setEmail(input.email);
    setPhone(input.phone);
  }

  return (
    <>
      <h2>General</h2>
      <form action="/" method="post" onSubmit={handleSubmit}>
        <div className="nameDiv">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            required
            placeholder="John D. Smith"
            onChange={(e) => setInput({ ...input, name: e.target.value })}
          />
        </div>
        <div className="emailDiv">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            required
            placeholder="johndsmith@gmail.com"
            onChange={(e) => setInput({ ...input, email: e.target.value })}
          />
        </div>
        <div className="phoneDiv">
          <label htmlFor="phone">Phone Number: </label>
          <input
            type="tel"
            id="phone"
            required
            placeholder="555-555-5555"
            onChange={(e) => setInput({ ...input, phone: e.target.value })}
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </>
  );
}
