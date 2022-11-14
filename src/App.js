import { useEffect } from "react";
import TestPage from "./Test";
import Test2 from "./Test2";
import LastTest from "./LastTest";

function APPLE() {
  useEffect(() => {
    let picked = null;
    const list = document.querySelector(".list");
    list.addEventListener("dragstart", (e) => {
      picked = e.target;
    });
    list.addEventListener("dragover", (e) => {
      e.preventDefault();
    });
    list.addEventListener("drop", (e) => {
      const parentNode = [...e.target.parentNode.children];
      if (parentNode.indexOf(e.target) < parentNode.indexOf(picked)) e.target.before(picked);
      else e.target.after(picked);
    });
  }, []);

  return (
    <ul className="list" style={{ display: "flex" }}>
      <CuntomLi value="P" />
      <CuntomLi value="P" />
      <CuntomLi value="A" />
      <CuntomLi value="E" />
      <CuntomLi value="L" />
    </ul>
  );
}

function CuntomLi(props) {
  return (
    <li
      className="item"
      style={{
        width: "100px",
        height: "80px",
        backgroundColor: "pink",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "2px",
      }}
      draggable
    >
      {props.value}
    </li>
  );
}

function App() {
  return <LastTest />;
}

export default App;
