import { useState } from "react";
import "../styles/Forms.css";

export default function General({
  setName,
  setEmail,
  setPhone,
  setAddress,
  genEdit,
  setGenEdit,
  isGenEdit,
  setIsGenEdit,
}) {
  const [input, setInput] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (isGenEdit) {
      setName(genEdit.name);
      setEmail(genEdit.email);
      setPhone(genEdit.phone);
      setAddress(genEdit.address);
    } else if (!isGenEdit) {
      setName(input.name);
      setEmail(input.email);
      setPhone(input.phone);
      setAddress(input.address);
    }
    setIsGenEdit(false); // set edit state back to false
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
            value={isGenEdit ? genEdit.name : input.name}
            onChange={(e) =>
              isGenEdit
                ? setGenEdit({ ...genEdit, name: e.target.value })
                : setInput({ ...input, name: e.target.value })
            }
          />
        </div>
        <div className="emailDiv">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            required
            placeholder="johndsmith@gmail.com"
            value={isGenEdit ? genEdit.email : input.email}
            onChange={(e) =>
              isGenEdit
                ? setGenEdit({ ...genEdit, email: e.target.value })
                : setInput({ ...input, email: e.target.value })
            }
          />
        </div>
        <div className="phoneDiv">
          <label htmlFor="phone">Phone Number: </label>
          <input
            type="tel"
            id="phone"
            required
            placeholder="555-555-5555"
            value={isGenEdit ? genEdit.phone : input.phone}
            onChange={(e) =>
              isGenEdit
                ? setGenEdit({ ...genEdit, phone: e.target.value })
                : setInput({ ...input, phone: e.target.value })
            }
          />
        </div>
        <div className="addressDiv">
          <label htmlFor="address">Address: </label>
          <input
            type="text"
            id="address"
            required
            placeholder="Seattle WA, USA"
            value={isGenEdit ? genEdit.address : input.address}
            onChange={(e) =>
              isGenEdit
                ? setGenEdit({ ...genEdit, address: e.target.value })
                : setInput({ ...input, address: e.target.value })
            }
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
