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
        <TodoList/>
        <MovieList/>
        <BookList/>
      </div>
    </>
  )
}

export default App
