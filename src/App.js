import { TodoList } from "./TodoList";
export const intialList = [
  {
    id: 1,
    description: "Complete Online JavaScript course",
    packed: false,
  },
  {
    id: 2,
    description: "Jog around the park 3X",
    packed: false,
  },
  {
    id: 3,
    description: "10 minutes meditation",
    packed: false,
  },
  {
    id: 4,
    description: "Jog around the park 3X",
    packed: false,
  },
  {
    id: 5,
    description: "Jog around the park 3X",
    packed: true,
  },
];
function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}
export default App;
