import React, { useState } from "react";
import TodoList from "./components/TodoList";

const App = () => {
  const [inputList, setInputList] = useState();
  const [items, setItems] = useState([]);

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  const deleteItems = (id) => {
    console.log("deleted");

    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div>
        <h1>ToDo List</h1>
        <br />
        <input
          type="text"
          placeholder="Add a Items"
          value={inputList}
          onChange={(e) => {
            setInputList(e.target.value);
          }}
        />
        <button onClick={listOfItems}> + </button>

        <ol>
          {items.map((itemval, index) => {
            return (
              <TodoList
                key={index}
                id={index}
                text={itemval}
                onSelect={deleteItems}
              />
            );
          })}
        </ol>
      </div>
    </>
  );
};

export default App;
