import "./styles/Tabs.css";

export default function Tabs({ setTab }) {
  function handleClick(state) {
    setTab(state);
  }

  return (
    <div className="tabs">
      <button onClick={() => handleClick("General")}>General</button>
      <button onClick={() => handleClick("Education")}>Education</button>
      <button onClick={() => handleClick("Experience")}>Experience</button>
    </div>
  );
}
