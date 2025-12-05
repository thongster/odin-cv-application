export default function GeneralDisplay({
  name,
  email,
  phone,
  address,
  objective,
  setGenEdit,
  setIsGenEdit,
  setTab,
}) {
  function handleEdit() {
    setGenEdit({
      name: name,
      email: email,
      phone: phone,
      address: address,
      objective: objective
    });
    setIsGenEdit(true); // flag to allow edit and autofill form with prev info
    setTab("General"); // switch to General tab
  }

  return (
    <div>
      <h2>{name
            ? name
            : "General"}</h2>
      <p>{address}</p>
      <p>{email}</p>
      <p>{phone}</p>
      <p className="objective">{objective}</p>
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
}
