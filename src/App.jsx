import './App.scss';
// import EmployeeCards from './components/EmployeeCards/EmployeeCards';
import team from './data/team';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./containers/Home/Home";



function App() {
  return (
    <Router>
      <div className="App">
        <h1 className="header">Ticket Tracker</h1>
        <Routes>
          <Route path="/ticket-tracker" element={<Home teamArr={team} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
