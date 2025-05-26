import { useRecoilValue } from 'recoil';
import { todoAtom } from '../recoil/todoAtom';
import TodoItem from './TodoItem';

export default function TodoList() {
  const todos = useRecoilValue(todoAtom);

  if (todos.length === 0) {
    return <p className="text-gray-500">No tasks yet. Add some!</p>;
  }

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
