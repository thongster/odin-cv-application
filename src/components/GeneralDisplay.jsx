export default function GeneralDisplay({
  name,
  email,
  phone,
  genEdit,
  setGenEdit,
  isGenEdit,
  setIsGetEdit,
}) {
  function handleEdit() {
    setGenEdit({
      name: name,
      email: email,
      phone: phone,
    });
    console.log(genEdit);
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
