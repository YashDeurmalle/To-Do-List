import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import { ToastContainer } from 'react-toastify';

export default function Home() {
  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">To-Do List</h1>
      <TodoForm />
      <TodoList />
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}
