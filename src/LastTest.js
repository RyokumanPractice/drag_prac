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
  let clicked = false;

  const mousemove = (e) => {
    if (clicked) {
      const element = e.target.parentNode;
      const x = e.clientX - 100 + "px";
      const y = e.clientY - 10 + "px";
      element.style.left = x;
      element.style.top = y;
    }
  };

  const mousedown = (e) => {
    clicked = true;
    const element = e.target.parentNode;
    element.style.background = "black";
    element.childNodes[0].style.color = "white";
    element.childNodes[1].style.color = "white";
  };

  const mouseup = (e) => {
    clicked = false;
    const element = e.target.parentNode;
    element.style.background = "orange";
    element.childNodes[0].style.color = "black";
    element.childNodes[1].style.color = "black";
  };

  return <Move onMouseMove={mousemove} onMouseDown={mousedown} onMouseUp={mouseup} />;
}

export default LastTest;
