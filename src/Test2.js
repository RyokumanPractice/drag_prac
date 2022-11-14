import { useEffect } from "react";

function Move() {
  const style = {
    width: "200px",
    height: "200px",
    background: "orange",
    cursor: "move",
    position: "fixed",
    display: "flex",
    justifyContent: "center",
  };
  return (
    <div className="move" style={style}>
      <div>여기를 클릭해서 움직이세요</div>
    </div>
  );
}

function Test2() {
  useEffect(() => {
    const move = document.querySelector(".move");

    const mousedown = (e) => {
      move.addEventListener("mousemove", mousemove);
    };

    const mousemove = (e) => {
      const x = e.clientX - 100 + "px";
      const y = e.clientY - 10 + "px";
      move.style.left = x;
      move.style.top = y;
      move.style.background = "black";
      move.childNodes[0].style.color = "white";
    };

    const mouseup = (e) => {
      move.removeEventListener("mousemove", mousemove);
      move.style.background = "orange";
      move.childNodes[0].style.color = "black";
    };

    move.addEventListener("mouseup", mouseup);
    move.addEventListener("mousedown", mousedown);
  }, []);

  return <Move />;
}

export default Test2;
