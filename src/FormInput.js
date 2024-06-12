export function FormInput({
  onAddItems,
  description,
  setDescription,
  onSubmit,
}) {
  return (
    <form className="formInput" onSubmit={(e) => onSubmit(e)}>
      <div className="circle"> </div>
      <input
        type="text"
        placeholder="Create a new todo"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
    </form>
  );
}
