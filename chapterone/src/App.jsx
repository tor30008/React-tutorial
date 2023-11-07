import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Selfintroduction = (props) =>{
  return <p>My name is {props.name}</p>
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

      <Selfintroduction name="Tor"></Selfintroduction>
    </>
  )
}

export default App
