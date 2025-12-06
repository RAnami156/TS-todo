import React from 'react'
import { Todo } from '../model'
import "./style.css"

type Props = {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({todo,todos,setTodos}: Props) => {
  return (
    <div className='todos_single'>
      <span className="todos_single-text">
        {todo.todo}
      </span>
    </div>
  )
}

export default SingleTodo
