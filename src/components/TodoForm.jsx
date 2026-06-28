import { Plus } from "lucide-react";

const TodoForm = () => {
  return (
    <form className="flex gap-3 mb-6">
      <input
        type="text"
        placeholder="Buy groceries"
        className="flex-1 border border-gray-300 bg-white rounded-lg px-4 py-2.5 focus:outline-none focus:border-blue-500"
      />

      <button className="group flex items-center justify-center rounded-lg bg-blue-600 text-white px-5 py-2.5 cursor-pointer hover:bg-blue-800">
        <Plus className="w-5 h-5" />
      </button>
    </form>
  );
};

export default TodoForm;
