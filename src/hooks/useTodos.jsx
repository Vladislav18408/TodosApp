import { useEffect, useState } from "react";

export const useTodos = () => {
  const [todos, setTodos] = useState([]);
  const [filterUser, setFilterUser] = useState("");
  const [notStartedSortOrder, setNotStartedOrder] = useState("asc");
  const [pendingSortOrder, setPendingOrder] = useState("asc");
  const [completedSortOrder, setCompletedSortOrder] = useState("asc");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(res => res.json())
      .then(data =>
        setTodos(data.map(todo => ({ ...todo, started: false })))
      );
  }, []);

  const handleStart = (id) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, started: true } : todo
      )
    );
  };

  const handleComplete = (id) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: true, completedAt: new Date() } : todo
      )
    );
  };

  const handleUndo = (id) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: false, completedAt: null } : todo
      )
    );
  };

  const filteredTodos = filterUser
    ? todos.filter(todo => todo.userId === parseInt(filterUser))
    : todos;

  const notStartedTodos = filteredTodos
    .filter(todo => !todo.started)
    .sort((a, b) => notStartedSortOrder === "asc" ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title));

  const pendingTodos = filteredTodos
    .filter(todo => todo.started && !todo.completed)
    .sort((a, b) => pendingSortOrder === "asc" ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title));

  const completedTodos = filteredTodos
    .filter(todo => todo.completed)
    .sort((a, b) => completedSortOrder === "asc" ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title));

  return {
    notStartedTodos,
    pendingTodos,
    completedTodos,
    setFilterUser,
    setNotStartedOrder,
    setPendingOrder,
    setCompletedSortOrder,
    filterUser,
    notStartedSortOrder,
    pendingSortOrder,
    completedSortOrder,
    handleStart,
    handleComplete,
    handleUndo,
    todos
  };
};
