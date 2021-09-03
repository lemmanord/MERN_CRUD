import React from 'react';
import TodoForm from 'components/TodoForm';

export default function CreateTodo() {
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <>
      <div className='container'>
        <div className='mt-3'>
          <h3>Create Todo Item</h3>
          <TodoForm onSubmit={onSubmit} />
        </div>
      </div>
    </>
  );
}
