// src/App.tsx
import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { useAuthenticator } from '@aws-amplify/ui-react';
import { generateClient } from "aws-amplify/data";
const client = generateClient<Schema>();
function App() {
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);
    const { signOut } = useAuthenticator();
  /*
    useEffect(() => {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }, []);
  */
 // 👇 この関数を新たに追加
 async function fetchTodosByStatus(status: string) {
    const { data } = await client.models.Todo.listTodoByStatus({ status });
    setTodos(data);
  }
  // 👇この関数を追加
  useEffect(() => {
    const createSub = client.models.Todo.onCreate().subscribe((newTodo) => {
      console.log("A new Todo was created!", newTodo);
    });
    const updateSub = client.models.Todo.onUpdate().subscribe((updatedTodo) => {
      console.log("A Todo was updated!", updatedTodo);
    });
    const deleteSub = client.models.Todo.onDelete().subscribe((deletedTodo) => {
      console.log("A Todo was deleted!", deletedTodo);
    });
    return () => {
      createSub.unsubscribe();
      updateSub.unsubscribe();
      deleteSub.unsubscribe();
    };
  }, []);
  // 👇この関数を追加
  async function getTodoDetails(id: string) {
    const { data: todo } = await client.models.Todo.get({ id });
    if (todo) {
      alert(`ID: ${todo.id}\nContent: ${todo.content}\nStatus: ${todo.status}`);
    }
  }
  function createTodo() {
    client.models.Todo.create({
     content: window.prompt("Todo content"),
     status: "incomplete", // 👈 この行を追加 
     });
  }
  // 👇 この関数を追加
  function updateTodo(id: string, status: string | null | undefined) {
    client.models.Todo.update({
      id,
      status: status === "done" ? "incomplete" : "done",
    });
  }
  function deleteTodo(id: string) {
    client.models.Todo.delete({ id })
  }
  return (
    <main>
      <h1>My todos</h1>
      <button onClick={createTodo}>+ new</button>
      {/* 👇 絞り込みボタンを追加 */}
      <div>
        <button onClick={() => fetchTodosByStatus("incomplete")}>未完了</button>
        <button onClick={() => fetchTodosByStatus("done")}>完了</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} onClick={() => deleteTodo(todo.id)}>
          {/* 👇 この行を追加*/}
          <input
            type="checkbox"
            checked={todo.status === "done"}
            onChange={() => {
              updateTodo(todo.id, todo.status);
            }}
            onClick={(e) => e.stopPropagation()}
          />
          {/* 👆 この行を追加*/}
          {todo.content}
          {/* 👇 この行を追加*/}
          <button 
              onClick={(e) => {
                e.stopPropagation();
                getTodoDetails(todo.id);
              }}
            >
              詳細
            </button>
            {/* 👆 この行を追加*/}
        </li>
        ))}
      </ul>
      <div>
        🥳 App successfully hosted. Try creating a new todo.
        <br />
        <a href="https://docs.amplify.aws/react/start/quickstart/#make-frontend-updates">
          Review next step of this tutorial.
        </a>
      </div>
      <button onClick={signOut}>Sign out</button>
    </main>
  );
}
export default App;