import './App.css';
import Header from './MyComponents/Header';
import {Footer} from './MyComponents/Footer';
import {Todos} from './MyComponents/Todos'
import {Todo} from './MyComponents/Todo'
import React,{useState} from 'react';
function App() {
  const onDelete = (todo)=>{
    //console.log("on delete clicked of todo '",todo.title,"'");

    setTodos(todos.filter((e)=>{
        return e!==todo
    }))
  }
  const[todos,setTodos] = useState( [
    {
      sln:0,
      title: "Learn React",
      desc:"Learning React will contribute a lot to my career and can be helpful for the forwarding of me."
    },
    {sln:1,
      title: "Learn Ajax",
      desc:"Ajax can be a supporting learning that improves usage of the react and its components."
    },
    {sln:2,
      title: "Learn Api",
      desc:"Api is the key skills to make a greate working react application."
    },
    {sln:3,
      title: "Learn Swimming",
      desc:"This is one of the skill that i always wanted to learn but never been possible."
    },
  ]);
  return (
    <>
      <Header title={"My Todos"}/>
       <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
    </>
  );
}

export default App;
