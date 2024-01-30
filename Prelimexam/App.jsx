//Lacsina, Quinny Joyce Ann M.
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './components/Hello'
import Welcome from './components/Welcome'
import ParentComponent from './components/ParentComponent'
import TodoList from './components/TodoList'
import MovieList from './components/MovieList'
import BookList from './components/BookList'
import ConditionalDemo1 from './components/ConditionalDemo1'
import ConditionalDemo2 from './components/ConditionalDemo2'
import ConditionalDemo3 from './components/ConditionalDemo3'
import ConditionalDemo4 from './components/ConditionalDemo4'
import Biblequiz from './components/biblequiz'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <h1>Lacsina, Quinny Joyce Ann M.</h1>
        <h2>React Props Example</h2>
        <Hello/> 
        <ParentComponent/>
        <Welcome/> */}
        {/* <TodoList/>
        <MovieList/>
        <BookList/> */}
        {/* <h1>Conditional 1:</h1>
        <ConditionalDemo1/>
        <br /><br />
        <h1>Conditional 2:</h1>
        <ConditionalDemo2/>
        <br /><br />
        <h1>Conditional 3:</h1>
        <ConditionalDemo3/>
        <br /><br />
        <h1>Conditional 4:</h1>
        <ConditionalDemo4/> */}

        <h1>The Bible Quiz</h1>
        <Biblequiz/>
      </div>
    </>
  )
}

export default App
