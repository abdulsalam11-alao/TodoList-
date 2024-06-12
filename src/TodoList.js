import { useState } from "react";
import { intialList } from "./App";
import { Logo } from "./Logo";
import { Main } from "./Main";
import { FormInput } from "./FormInput";

export function TodoList() {
  const [items, setItem] = useState(intialList);
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newItem = {
      description,
      packed: false,
      id: crypto.randomUUID(),
    };
    setItem((item) => [...item, newItem]);
    console.log(newItem);
    setDescription("");
  }
  function handleDelete(id) {
    console.log(id);
    setItem((items) => items.filter((item) => item.id !== id));
  }
  function handlePacked(id) {
    setItem((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClearComplete() {
    const uCompleted = items.filter((item) => !item.packed);

    setItem([...uCompleted]);
  }

  return (
    <div className="TodoList">
      <Logo />
      <FormInput
        description={description}
        setDescription={setDescription}
        onSubmit={handleSubmit}
      />
      <Main
        items={items}
        onDelete={handleDelete}
        onpacked={handlePacked}
        onClearComplete={handleClearComplete}
      />
    </div>
  );
}
