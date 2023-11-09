import React from "react";

const TodoList = (props) => {
  return (
    <>
      <div style={{ display: "flex", margin: "10px" }}>
        <button
          style={{
            display: "inline-block",
            color: "red",
            fontSize: "20px",
            backgroundColor: "green",
          }}
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          Del
        </button>
        <li>{props.text}</li>
      </div>
    </>
  );
};

export default TodoList;
