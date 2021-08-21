import React, { useState, useEffect } from 'react';
import TodoForm from 'components/TodoForm';

export default function EditTodo() {
  const [todo, setTodo] = useState();

  useEffect(() => {
    setTodo({
      text: 'foo',
    });
  }, []);

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return todo ? (
    <div className='container'>
      <div className='mt-3'>
        <TodoForm todo={todo} onSubmit={onSubmit} />
      </div>
    </div>
  ) : (
    <div> Loading...</div>
  );
}
