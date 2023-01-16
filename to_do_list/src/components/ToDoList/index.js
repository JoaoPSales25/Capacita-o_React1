import React from "react";
import Header from "../Header";
import InputDeToDos from "../Input";
import ListOfToDos from "../List";
import { useState } from "react";

function ToDoList() {
  const [newItem, setNewItem] = useState("");

  const [arrayDeToDos, setArrayDeToDos] = useState([]);

  function deleteItem(id) {
    const newArray = arrayDeToDos.filter((item) => {
      return item.id !== id;
    });

    setArrayDeToDos(newArray);
  }

  function addItemToList() {
    console.log(newItem);

    const newToDo = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };

    setArrayDeToDos((arrayAntigo) => {
      return [...arrayAntigo, newToDo];
    });

    setNewItem("");
  }

  return (
    <div>
      <Header text={"Minha lista de Afazeres"}></Header>
      <InputDeToDos
        setNewItem={setNewItem}
        addItemToList={addItemToList}
        newItem={newItem}
      ></InputDeToDos>
      <ListOfToDos
        arrayDeToDos={arrayDeToDos}
        deleteItem={deleteItem}
      ></ListOfToDos>
    </div>
  );
}

export default ToDoList;
