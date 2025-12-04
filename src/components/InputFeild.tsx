import React from 'react';
import './style.css';

//присвоил типы просто, хули я коментирую это даже
interface Props{
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
}

// мейн функция которая получает переменную и функцию от бати   
const InputFeild = ({todo, setTodo}: Props) => {
    // тут опять хтмл начался
  return (
    <form className='input'>
      <input type="input" 
    //   показываем в инпуте всегда то что есть в todo
        value={todo}
        // меняет setTodo в бате и заставляет его работать
        onChange={
            (e)=>setTodo(e.target.value)
        }
      placeholder='Enter task' className='input_box' />
      <button className='input_submit' type='submit'>GO</button>
    </form>
  )
}

export default InputFeild
