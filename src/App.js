import './App.css';
import { Job } from "./Job";
import { User } from "./User";

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
  ]

  return (
    <div className="App">
      <Job salary = {90000} position = "Senior SDE" company = "Amazon" />;
      <Job salary = {12000} position = "Junior SDE" company = "Google" />;
      <Job salary = {10000} position = "Project Manager" company = "Netflix" />;
      <p1 className = "name"> Wojtek </p1>;
      {age >= 18 ? <h1>Over Age</h1> : <h1>Under Age</h1>};
      {names.map((name, key) => {
        return <h1 key={key}> {name} </h1>;
      })};
      {users.map((user,key) => {
        return <User name={user.name} age={user.age} />;
      })};
      {planets.map((planet, key) => planet.isGasPlanet && <h1 className='name'> {planet.name} </h1> )}
    </div>
  );
}




export default App;
