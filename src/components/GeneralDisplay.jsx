export default function GeneralDisplay({ name, email, phone }) {
  return (
    <div>
      <h2>General</h2>
      <p>{name}</p>
      <p>{email}</p>
      <p>{phone}</p>
      <button>Edit</button>
    </div>
  );
}
