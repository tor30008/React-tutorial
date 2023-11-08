import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Selfintroduction = ({name = "tor",firstname = "siriroj"}) =>{
  return( 
  <>
        <p>My name is {name}</p>
        <p>My Firstname is {firstname}</p>
  </>
  )
};

const Testcomponent = () =>{
  return alert('Tor');
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        Hello
      </div>

      <div>
        child
      </div>

      <div>
        <p>Another Child</p>
      </div>

      <div rold={`alert`} id="foo">
        Test
      </div>

      <div>
        <button type = "button" onClick={Testcomponent}>Click</button>
      </div>

      <Selfintroduction name="chit" firstname = "anuchit"></Selfintroduction>
      <Selfintroduction name="tee" firstname="weerapat"></Selfintroduction>
      <Selfintroduction></Selfintroduction>
    </>
  )
}

export default App
