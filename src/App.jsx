import { createSignal } from "solid-js";

function Header({}) {
  return <h1>HEADER</h1>;
}

function Counter({}) {
  const [counter, setCounter] = createSignal(0);

  return (
    <>
      <div>{counter()}</div>
      <button onClick={()=>setCounter(counter()+1)}>Increment</button>
      <button onClick={()=>setCounter(counter()-1)}>Decrement</button>
    </>
  );
}

function TodoApp({}) {
  return (
    <>
      TODOAPP
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
