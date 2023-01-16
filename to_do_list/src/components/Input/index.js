import React from "react";
import "./styles.css";

function InputDeToDos({ setNewItem, addItemToList, newItem }) {
  return (
    <div>
      <input
        onChange={(evento) => setNewItem(evento.target.value)}
        type="text"
        placeholder="Adicione um item"
        value={newItem}
      ></input>
      <button onClick={addItemToList}>adicionar</button>
    </div>
  );
}

export default InputDeToDos;
