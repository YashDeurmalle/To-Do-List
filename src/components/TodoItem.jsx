import { useRecoilState } from 'recoil';
import { todoAtom } from '../recoil/todoAtom';
import { CheckCircle, Circle, Trash2 } from 'lucide-react';
import { toast } from 'react-toastify';

export default function TodoItem({ todo }) {
  const [todos, setTodos] = useRecoilState(todoAtom);

  const toggleComplete = () => {
    const updated = todos.map((t) =>
      t.id === todo.id ? { ...t, completed: !t.completed } : t
    );
    setTodos(updated);
    toast.info(todo.completed ? 'Task marked incomplete' : 'Task completed');
  };

  const deleteTask = () => {
    const updated = todos.filter((t) => t.id !== todo.id);
    setTodos(updated);
    toast.warn('Task deleted');
  };

  return (
    <li className="flex items-center justify-between mb-3 p-3 border rounded hover:bg-gray-50">
      <button onClick={toggleComplete} aria-label="Toggle complete">
        {todo.completed ? (
          <CheckCircle className="text-green-500" />
        ) : (
          <Circle className="text-gray-400" />
        )}
      </button>
      <span
        className={`flex-1 mx-3 ${
          todo.completed ? 'line-through text-gray-400' : ''
        }`}
        dangerouslySetInnerHTML={{ __html: todo.task }}
      ></span>
      <button
        onClick={deleteTask}
        aria-label="Delete task"
        className="text-red-500 hover:text-red-700"
      >
        <Trash2 />
      </button>
    </li>
  );
}
