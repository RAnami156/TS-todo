import React, { useRef } from 'react';
import './style.css';

//присвоил типы просто, хули я коментирую это даже
interface Props{
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void; //ничего не возвращает функция
}

// мейн функция которая получает переменную и функцию от бати   
const InputFeild = ({todo, setTodo, handleAdd}: Props) => {
    const inputRef = useRef<HTMLInputElement>(null);



    // тут опять хтмл начался
  return (
    <form className='input' onSubmit={(e)=>{
        handleAdd(e)
        inputRef.current?.blur();
        }}>

        <input 
        ref={inputRef}
        type="input" 
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
