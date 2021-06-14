
import React from "react";
import "./TodoItem.css";

function Todo(props) {
  const { content, id, deleteItem } = props;
  const lineTodoItem = (e) => {
    if (e.target.id !== "line") {
      e.target.id = "line";
    } else {
      e.target.id = "";
    }
  };
  return (
    <div className="todo-item" onClick={lineTodoItem}>
      {content}
      <button className="btn btn-danger" value={id} onClick={deleteItem}>
        Sil
      </button>
    </div>
  );
}

export default Todo;