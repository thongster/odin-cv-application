export default function GeneralDisplay({
  name,
  email,
  phone,
  setGenEdit,
  setIsGenEdit,
}) {
  function handleEdit() {
    setGenEdit({
      name: name,
      email: email,
      phone: phone,
    });
    setIsGenEdit(true)
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
