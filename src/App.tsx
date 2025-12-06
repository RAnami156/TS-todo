//просто импорты хули
import React, { useState } from 'react';
import './App.css';
import InputFeild from './components/InputFeild';
import { Todo } from './model';

//красивая стрелочная функция главная
const App: React.FC = () => {

  // создаем переменную в поторой есть еще функция setTodo и тип у нее стринг который мы указываем через <string>
  const [todo, setTodo] = useState<string>("");
  const[todos, setTodos] = useState<Todo[]>([]) //массив

  // функция
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if(todo) {
      setTodos([...todos, { id:Date.now(), todo, isDone: false}])
      setTodo("");
    }
  };

  console.log(todos);

  // хахах тут наш любимый хтмлчик(я рофлю) и еще в реакте не юзаем class а юзаем className
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      {/* здесь уже по трудне так как тут мы передаем данные элемент ребенку(тут мы в файле бати)   */}
      <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      {/* <TodoList/> */}
      {todos.map((t) => (
        <li>{t.todo}</li>
      ))}
    </div>
  );
}

export default App;
