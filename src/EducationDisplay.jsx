export default function EducationDisplay({ educationList }) {

  return (
    <>
      {educationList.map((edu) => (
        <p>{edu}</p>
      ))}
    </>
  );
}
