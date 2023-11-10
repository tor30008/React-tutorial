import { useState } from 'react'
import PropTypes from 'prop-types';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Selfintroduction = ({name = "tor",firstname = "siriroj",dateofBirth,hobbies = []}) =>{
  return( 
  <>
        <p>My name is {name}</p>
        <p>My Firstname is {firstname}</p>
        {dateofBirth ? <p>My Birthday : {dateofBirth}</p> : null} 
        {hobbies.length === 0 ? null : //<p>My hobbies are {hobbies && hobbies.join('-')}</p>}
      <div>
        <h2>My HOBBIES ARE : </h2>
        {hobbies.map((data,index) => (
          <div key={index}>{index}  {data}</div>
        ))}
      </div>
      }
  </>
  )
};

Selfintroduction.propTypes = {
  name : PropTypes.string.isRequired
}

const Testcomponent = ({ children }) =>{
  return <h3>{children}</h3>
}

const Component_children = ({children}) =>{
  return console.log(children);
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
        {/*<button type = "button" onClick={Testcomponent}>Click</button>*/}
      </div>

      <Selfintroduction name="chit" firstname = "anuchit" dateofBirth="17 nov 1993" hobbies={["Badminton","BasketBall","Cartoon"]}></Selfintroduction>
      <Selfintroduction name="tee" firstname="weerapat" hobbies={["กระหรี่"]}></Selfintroduction>
      <Selfintroduction dateofBirth="20 October 1993"></Selfintroduction>
      <Testcomponent>Kuy</Testcomponent>
      <Component_children>สวัสดีครับ component_children</Component_children>
    </>
  )
}

export default App
