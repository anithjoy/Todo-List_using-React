import { TodoItem } from "./TodoItem";

export function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <>
      <ul className="list">
        {todos.length === 0 && "No todo's are added"}
        {todos.map((todo) => {
          return (
            <TodoItem
              todo={todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </ul>
    </>
  );
}
