import './App.css';
import { Job } from "./Job";
import { User } from "./User";
import { useState } from 'react';

function App() {

  const age = 15;
  const names = ["Pedro", "Jake", "Jessica", "Mike", "Dustin"];
  const users = [
    { name: "Pedro", age: 21 },
    { name: "Jake", age: 25 },
    { name: "Jessica", age: 45 },
  ];
  const planets = [
    { name: "Mars", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Venus", isGasPlanet: false },
    { name: "Neptune", isGasPlanet: true },
    { name: "Uranus", isGasPlanet: true },
  ];


  //States
  const [ageBtn, setAge] = useState(0);

  const increaseAge = () => {
    setAge(ageBtn + 1);
  };


  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };


  const [showText, setShowText] = useState(true);

  const [textColor, setTextColor] = useState('white');

  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    setCount(count - 1);
  };
  const countZero = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <Job salary = {90000} position = "Senior SDE" company = "Amazon" />;
      <Job salary = {12000} position = "Junior SDE" company = "Google" />;
      <Job salary = {10000} position = "Project Manager" company = "Netflix" />;
      <p1> Wojtek </p1>;
      {age >= 18 ? <h1>Over Age</h1> : <h1>Under Age</h1>};
      {names.map((name, key) => {
        return <h1 key={key}> {name} </h1>;
      })};
      {users.map((user,key) => {
        return <User name={user.name} age={user.age} />;
      })};
      {planets.map((planet, key) => planet.isGasPlanet && <h1> {planet.name} </h1> )}

      <div>{ageBtn}
      <button onClick={increaseAge}> Increase Age </button>
      </div>

      <input type="text" onChange={handleInputChange} />
      {inputValue}

      <div>
      <button className='btn' onClick={() => {setShowText(!showText)}}> Show/Hide text</button>
      {showText && <h1> Hi my name is Wojtek</h1>}
      </div>
      <div>
        <button className='btn' onClick={() => {setTextColor(textColor === 'white' ? 'red' : 'white')}}>Change Color</button>
        <h1 style={{ color: textColor}}>text</h1>
      </div>
      <div>
        <button className='btn' onClick={increaseCount}>Increase</button>
        <button className='btn' onClick={decreaseCount}>Decrease</button>
        <button className='btn' onClick={countZero}>Set to Zero</button>


        {count}
      </div>
    </div>
  );
}




export default App;
