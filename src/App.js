import './App.css';


import TodoApp from './components/TodoApp/TodoApp';
import Title from './components/TodoApp/Title';
import AddTodo from './components/TodoApp/AddTodo';
import TodoList from './components/TodoApp/TodoList';
import TodoAppControl from './components/TodoApp/TodoAppControl';

function App() {
  return (
    <>
      <TodoApp>
        <Title>Todo App</Title>

        <AddTodo />

        <TodoList />

        <TodoAppControl />
      </TodoApp>
      
      
    </>
  );
}

export default App;
