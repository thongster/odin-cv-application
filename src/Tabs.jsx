import "./styles/Tabs.css";

export default function Tabs({ tab, setTab }) {
  function handleClick() {}

  return (
    <div className="tabs">
      <button onClick={handleClick}>General</button>
      <button onClick={handleClick}>Education</button>
      <button onClick={handleClick}>Experience</button>
    </div>
  );
}
