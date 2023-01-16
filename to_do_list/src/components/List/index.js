import React from "react";
import "./styles.css";

function ListOfToDos({ arrayDeToDos, deleteItem }) {
  return (
    <div>
      {" "}
      {arrayDeToDos.map((item) => {
        return (
          <div className="item" key={item.id}>
            {" "}
            {item.value}{" "}
            <button onClick={() => deleteItem(item.id)}> X </button>
          </div>
        );
      })}{" "}
    </div>
  );
}

// [{value: "item1", id: 1234}, {value: item2, id:545} ]

export default ListOfToDos;
