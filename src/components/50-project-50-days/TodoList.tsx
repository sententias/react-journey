import React, { useState } from 'react';
import TodoListWrapper from './css/TodoListWrapper.ts';

interface TodoType {
  id: number;
  text: string;
  done: boolean;
}

export const TodoList = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [inputValue, setInputValue] = useState('');

  const toggleTodoStatus = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const removeTodoOnRightClick = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    id: number
  ) => {
    event.preventDefault();
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleInputKeyPress = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === 'Enter' && inputValue.trim()) {
      setTodos([...todos, { id: Date.now(), text: inputValue, done: false }]);
      setInputValue('');
    }
  };

  return (
    <TodoListWrapper>
      <div className='box'>
        <input
          type='text'
          placeholder='输入代办事项...'
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          onKeyDown={(e) => handleInputKeyPress(e)}
        />
        {Boolean(todos.length) && (
          <ul>
            {todos.map((todo) => (
              <li
                key={todo.id}
                onClick={() => toggleTodoStatus(todo.id)}
                onContextMenu={(e) => removeTodoOnRightClick(e, todo.id)}
                className={todo.done ? 'done' : ''}
              >
                <div className='todo'>{todo.text}</div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </TodoListWrapper>
  );
};

export default TodoList;
