import { createSignal } from "solid-js";

function Header({}) {
  return <h1>HEADER</h1>;
}

function Counter({}) {
  const [counter, setCounter] = createSignal(0);

  return (
    <>
      <div>{counter()}</div>
      <button onClick={() => setCounter(counter() + 1)}>Increment</button>
      <button onClick={() => setCounter(counter() - 1)}>Decrement</button>
    </>
  );
}

const INITIAL_TODOS = [
  { text: "Fly to Germany", id: 1 },
  { text: "Fly to Italy", id: 2 },
];

function TodoApp({}) {
  const [todos, setTodos] = createSignal([]);
  const [newTodoText, setNewTodoText] = createSignal("");

  setTodos(INITIAL_TODOS);

  function handleSubmit() {
    if (newTodoText() === "") {
      return;
    }
    setTodos([
      ...todos(),
      {
        text: newTodoText(),
        id: Math.random(),
      },
    ]);
    setNewTodoText("");
  }

  function handleDelete(id) {
    setTodos(todos().filter((t) => t.id !== id));
  }

  return (
    <>
      <ul>
        <For each={todos()}>
          {(todo, _) => (
            <li>
              {todo.text}
              <button onClick={() => handleDelete(todo.id)}>Delete</button>
            </li>
          )}
        </For>
      </ul>
      <input
        placeholder="Type here boi"
        value={newTodoText()}
        onInput={(e) => setNewTodoText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSubmit();
        }}
      />
    </>
  );
}

function Content() {
  return (
    <>
      <hr />
      <Counter />
      <hr />
      <TodoApp />
    </>
  );
}

function App() {
  return (
    <>
      <Header />
      <Content />
    </>
  );
}

export default App;
