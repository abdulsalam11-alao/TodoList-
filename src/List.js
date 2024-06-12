import iconCross from "./images/icon-cross.svg";
import iconcheck from "./images/icon-check.svg";
import { useState } from "react";

export function List({ item, onDelete, onpacked, setActiveBtn }) {
  const [isAtive, setIsActive] = useState(false);

  function handleIsActive() {
    setIsActive(true);
    setActiveBtn(true);
  }
  function handleIsNotActive() {
    setIsActive(false);
    setActiveBtn(false);
  }
  return (
    <li
      className="List"
      onMouseEnter={handleIsActive}
      onMouseLeave={handleIsNotActive}
    >
      <div>
        <span
          className={item.packed ? "Check active" : "Check"}
          onClick={() => onpacked(item.id)}
        >
          <img
            src={iconcheck}
            alt="icon"
            style={!item.packed ? { display: "none" } : { display: "block" }}
          ></img>
        </span>
        <p className={item.packed ? "strike" : ""}>{item.description}</p>
      </div>
      {isAtive && (
        <img
          src={iconCross}
          alt="iconcross"
          onClick={() => onDelete(item.id)}
        />
      )}
    </li>
  );
}
