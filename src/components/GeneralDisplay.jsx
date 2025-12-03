export default function GeneralDisplay({
  name,
  email,
  phone,
  setGenEdit,
  setIsGenEdit,
  setTab,
}) {
  function handleEdit() {
    setGenEdit({
      name: name,
      email: email,
      phone: phone,
    });
    setIsGenEdit(true); // flag to allow edit and autofill form with prev info
    setTab("General"); // switch to General tab
  }

  return (
    <div>
      <h2>General</h2>
      <p>{name}</p>
      <p>{email}</p>
      <p>{phone}</p>
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
}
