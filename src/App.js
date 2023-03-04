import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Contact } from "./pages/Contact";
import { NotSpecified } from './pages/notspecified';
import { NavBar } from "./NavBar";
import { Learning } from "./pages/learning";

function App() {

  return (
    <div className="App">

      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Profile" element={<Profile />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/learning" element={<Learning />}/>
          <Route path="*" element={<NotSpecified />}/>
        </Routes>
      </Router>

    </div>
  );
}




export default App;
