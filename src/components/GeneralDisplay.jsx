export default function GeneralDisplay({
  name,
  email,
  phone,
  address,
  setGenEdit,
  setIsGenEdit,
  setTab,
}) {
  function handleEdit() {
    setGenEdit({
      name: name,
      email: email,
      phone: phone,
      address: address
    });
    setIsGenEdit(true); // flag to allow edit and autofill form with prev info
    setTab("General"); // switch to General tab
  }

  return (
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{phone}</p>
      <p>{address}</p>
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
}
