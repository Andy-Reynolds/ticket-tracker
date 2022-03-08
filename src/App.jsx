import './App.scss';
import EmployeeInfo from './components/EmployeeInfo/EmployeeInfo';
// import EmployeeTile from './components/EmployeeTile/EmployeeTile';
import team from './data/team';



function App() {
  return (
    <div className="App">
      <h1>Ticket Tracker</h1>
      <div className="all-tiles">
        <EmployeeInfo teamArr={team} />
      </div>
    </div>
  );
}

export default App;
