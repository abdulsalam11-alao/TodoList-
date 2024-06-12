export function Footer({
  onClearComplete,
  items,
  activeBtn,
  onSortComplete,
  onSort,
}) {
  const numpacked = items.filter((item) => !item.packed).length;

  return (
    <div className="footer">
      <div>
        <p>{numpacked} item Left</p>
      </div>
      <div className="second">
        <p className="all" onClick={(e) => onSort(e.target.textContent)}>
          All
        </p>
        <p className={activeBtn ? "activeBtn" : ""}>Active</p>
        <p onClick={(e) => onSort(e.target.textContent)}>Completed</p>
      </div>{" "}
      <div>
        <p onClick={() => onClearComplete()}>clear Completed</p>
      </div>
    </div>
  );
}
