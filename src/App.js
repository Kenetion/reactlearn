import './App.css';
import { Job } from "./Job";
import { User } from "./User";
import { useEffect, useState } from 'react';
import { Task } from './task';
import { Text } from "./text";
import Axios from 'axios';

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

  const [todoList, setTodoList] = useState( [] );
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length -1].id + 1,
      taskName: newTask,
      completed: false,
    };
    setTodoList([...todoList, task]);
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return {...task, completed: true};
        } else {
          return task;
        }
      })
    )
  }

  const [showText1, setShowText1] = useState(false);


  const [catFact, setCatFact] = useState("");

  const fetchCatFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
    setCatFact(res.data.fact);
  });
  };

  useEffect(() => {
    fetchCatFact();
  }, []);


  const [name1, setName1] = useState("");
  const [predictedAge, setPredictedAge] = useState(null);

  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${name1}`).then((res) => {
      setPredictedAge(res.data);
    })
  };

  


  return (
    <div className="App">
      <Job salary = {90000} position = "Senior SDE" company = "Amazon" />
      <Job salary = {12000} position = "Junior SDE" company = "Google" />
      <Job salary = {10000} position = "Project Manager" company = "Netflix" />
      



      {age >= 18 ? <h1>Over Age</h1> : <h1>Under Age</h1>}



      {names.map((name, key) => {
        return <h1 key={key}> {name} </h1>;
      })}



      {users.map((user,key) => {
        return <User name={user.name} age={user.age} />
      })}




      {planets.map((planet, key) => planet.isGasPlanet && <h1> {planet.name} </h1> )}




      <div>{ageBtn}
      <button className='btn' onClick={increaseAge}> Increase Age </button>
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



      <div>
      <div className='addTask'>
        <input onChange={handleChange} />
        <button className='btn' onClick={addTask}>Add Task</button>
      </div>
      <div className='list'>
        {todoList.map((task) => {
          return <Task
          taskName={task.taskName}
          id={task.id}
          completed={task.completed}
          deleteTask={deleteTask}
          completeTask={completeTask} />
        })}
      </div>
      </div>

      <div>
        <button className='btn' onClick={() => {setShowText1(!showText1)}}>Show Text</button>
        {showText1 && <Text />}
      </div>


      <div>
        <button className='btn' onClick={fetchCatFact}> Generate Cat Fact </button>
        <p> {catFact} </p>
      </div>


      <div>
        <input placeholder='Ex. Wojtek...' onChange={(event) => {setName1(event.target.value)}} />
        <button onClick={fetchData}> Predict Age </button>

        <h1> Name: {predictedAge?.name}</h1>
        <h1> Predicted Age: {predictedAge?.age}</h1>
        <h1> Count: {predictedAge?.count}</h1>
      </div>

      <div></div>
    </div>
  );
}




export default App;
