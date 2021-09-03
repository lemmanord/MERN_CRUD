import React, { useState, useEffect } from 'react';
import TodoForm from 'components/TodoForm';
import { useRouteMatch, useHistory } from 'react-router-dom';
import { editTodo, updateTodo } from 'api';

export default function EditTodo() {
  const match = useRouteMatch();
  const history = useHistory();
  const [todo, setTodo] = useState();

  useEffect(() => {
    const fetchTodo = async () => {
      const todo = await editTodo(match.params.id);
      setTodo(todo);
    };
    fetchTodo();
  }, [match.params.id]);

  const onSubmit = async (data) => {
    console.log(data);
    await updateTodo(data, match.params.id);
    history.push('/');
  };

  return todo ? (
    <div className='container'>
      <div className='mt-3'>
        <h3>Edit Todo Item</h3>
        <TodoForm todo={todo} onSubmit={onSubmit} />
      </div>
    </div>
  ) : (
    <div> Loading...</div>
  );
}
