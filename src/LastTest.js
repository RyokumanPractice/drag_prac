import { useState } from "react";

function Move(props) {
  const style = {
    width: "200px",
    height: "200px",
    background: "orange",
    cursor: "move",
    position: "fixed",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    left: props.X,
    top: props.Y,
  };
  return (
    <div className="move" style={style}>
      <div onMouseDown={props.onMouseDown} onMouseUp={props.onMouseUp} onMouseMove={props.onMouseMove}>
        여기를 클릭해서 움직이세요
      </div>
      <div>helllooo</div>
    </div>
  );
}

function LastTest() {
  const [clicked, setClicekd] = useState(false);
  const [X, setX] = useState();
  const [Y, setY] = useState();

  const onMouseMove = (e) => {
    setX(e.clientX - 100 + "px");
    setY(e.clientY - 20 + "px");
  };

  const onMouseDown = (e) => {
    setClicekd(true);
    const element = e.target.parentNode;
    element.style.background = "black";
    colorChanger(element, "white");
  };

  const colorChanger = (target, color) => {
    target?.childNodes.forEach((node) => {
      node.style.color = color;
    });
  };

  const onMouseUp = (e) => {
    setClicekd(false);
    const element = e.target.parentNode;
    element.style.background = "orange";
    colorChanger(element, "black");
  };

  return (
    <Move X={X} Y={Y} onMouseMove={clicked ? onMouseMove : false} onMouseDown={onMouseDown} onMouseUp={onMouseUp} />
  );
}

export default LastTest;
