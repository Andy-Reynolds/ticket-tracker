import './App.scss';
import EmployeeCards from './components/EmployeeCards/EmployeeCards';
import team from './data/team';



function App() {
  return (
    <div className="App">
      <h1 className="header">Ticket Tracker</h1>
      <div className="all-tiles">
        <EmployeeCards teamArr={team} />
      </div>
    </div>
  );
}

export default App;
