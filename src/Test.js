import { useState } from "react";

function Circle(props) {
  const style = {
    width: "100px",
    height: "100px",
    borderRadius: "50px",
    backgroundColor: "black",
    position: "absolute",
  };
  return (
    <div
      className="circle"
      style={style}
      onDragStart={props.onDragStart}
      onDragEnd={props.onDragEnd}
      onDragCapture={props.onDragCapture}
      draggable
    ></div>
  );
}

function TestPage() {
  const [element, setElement] = useState();

  const onDragStart = (e) => {
    console.log(e);
    setElement(e.target);
  };

  const onDragCapture = (e) => {
    element.style.top = e.pageY + "px";
    element.style.left = e.pageX + "px";
  };

  const onDragEnd = (e) => {
    element.style.top = e.pageY + "px";
    element.style.left = e.pageX + "px";
    setElement("");
  };

  return <Circle onDragStart={onDragStart} onDragEnd={onDragEnd} onDragCapture={onDragCapture} />;
}

export default TestPage;
