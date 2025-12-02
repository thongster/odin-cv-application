export default function GeneralDisplay({ name, email, phone }) {
  return (
    <>
      <h2>General</h2>
      <p>{name}</p>
      <p>{email}</p>
      <p>{phone}</p>
    </>
  );
}
