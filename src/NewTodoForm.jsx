import { useState } from "react";

export function NewTodoForm(props) {
  const [newItem, setNewItem] = useState("");
  const handleSubmit = (e) => {
    // PREVENT DEFAULT ACTION THAT IS RELOADING
    e.preventDefault();

    if (newItem === "") {
      return;
    }
    props.onSubmit(newItem);

    setNewItem("");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item"> Add new item </label>
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            id="item"
          ></input>
        </div>
        <button className="btn">ADD</button>
      </form>
    </>
  );
}
