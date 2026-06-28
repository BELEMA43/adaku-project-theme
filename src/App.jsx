import { useState } from "react";
import { Plus } from "lucide-react";

const App = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  // console.log(todos);

  const handleCreateTask = (e) => {
    e.preventDefault();

    const trimmedTask = task.trim();
    if (trimmedTask === "") return;

    setTodos([
      ...todos,
      { id: Date.now(), text: trimmedTask, completed: false },
    ]);

    setTask("");
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="w-full max-w-lg mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800">Adaku</h1>
        </header>

        {/* Task Creator Form */}
        <form onSubmit={handleCreateTask} className="flex gap-3 mb-6">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Buy groceries"
            className="flex-1 border border-gray-300 bg-white rounded-lg px-4 py-2.5 focus:outline-none focus:border-blue-500"
          />

          <button className="group flex items-center justify-center rounded-lg bg-blue-600 text-white px-5 py-2.5 cursor-pointer hover:bg-blue-800">
            <Plus className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
