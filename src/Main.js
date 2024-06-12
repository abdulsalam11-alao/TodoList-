import { useState } from "react";
import { Footer } from "./Footer";
import { List } from "./List";

export function Main({
  items,
  onDelete,
  onpacked,
  onClearComplete,
  onSortComplete,
}) {
  const [activeBtn, setactiveBtn] = useState(false);
  const [sortBy, setSortBy] = useState("All");

  const handleSortType = function (value) {
    setSortBy(value);
  };

  let sortedItems = [];

  switch (sortBy) {
    case "All":
      sortedItems = items;
      console.log(sortedItems);
      break;
    case "Completed":
      sortedItems = items.slice().sort((a, b) => a.packed - b.packed);
      break;
    default:
      sortedItems = [...items];
  }

  // const sortedItems=
  return (
    <ul className="main">
      {sortedItems.map((item) => (
        <List
          key={item.id}
          item={item}
          onDelete={onDelete}
          onpacked={onpacked}
          setActiveBtn={setactiveBtn}
        />
      ))}
      <Footer
        onClearComplete={onClearComplete}
        items={items}
        activeBtn={activeBtn}
        onSortComplete={onSortComplete}
        onSort={handleSortType}
      />
    </ul>
  );
}
