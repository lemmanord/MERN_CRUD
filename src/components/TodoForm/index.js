import React from 'react';

import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

export default function TodoForm({ todo, onSubmit }) {
  const history = useHistory();

  const { register, handleSubmit } = useForm({
    defaultValues: { text: todo ? todo.text : '' },
  });

  const submitHandler = handleSubmit((data) => {
    onSubmit(data);
    history.push('/');
  });

  return (
    <>
      <h3>Edit Todo Item</h3>
      <form onSubmit={submitHandler}>
        <div className='form-group'>
          <label htmlFor='text'>Text:</label>
          <input
            className='form-control'
            {...register('text')}
            type='text'
            name='text'
            id='text'
          />
        </div>
        <div className='form-group'>
          <button type='submit' className='btn btn-primary'>
            Create Todo
          </button>
        </div>
      </form>
    </>
  );
}
