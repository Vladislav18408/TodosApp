import { useTodos } from "./hooks/useTodos";
import TodoItem from "./components/TodoItem";
import FilterDropdown from "./components/FilterDropdown";
import SortDropdown from "./components/SortDropdown";
import "./index.css";

function App() {
  const {
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
    handleUndo
  } = useTodos();


  return (
    <div className="container">
      <div className="container-filters">
        <FilterDropdown value={filterUser} onChange={setFilterUser} />
        <SortDropdown
        value={notStartedSortOrder}
        onChange={setNotStartedOrder}
        label="Sort Not Started"
      />
      <SortDropdown
        value={pendingSortOrder}
        onChange={setPendingOrder}
        label="Sort Pending"
      />
        <SortDropdown
        value={completedSortOrder}
        onChange={setCompletedSortOrder}
        label="Sort Completed"
      />
      </div>

      <div className="lists three-columns">
        <div className="card">
          <h2>Not Started:</h2>
          {notStartedTodos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onAction={handleStart}
              actionLabel="Start"
            />
          ))}
        </div>

        <div className="card">
          <h2>Pending:</h2>
          {pendingTodos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onAction={handleComplete}
              actionLabel="Complete"
            />
          ))}
        </div>

        <div className="card">
          <h2>Completed:</h2>
          {completedTodos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onAction={handleUndo}
              actionLabel="Undo"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
