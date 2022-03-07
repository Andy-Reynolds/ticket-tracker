import './App.scss';
import EmployeeInfo from './components/EmployeeInfo/EmployeeInfo';
// import EmployeeTile from './components/EmployeeTile/EmployeeTile';
import team from './data/team';



function App() {
  return (
    <div className="App">
      {/* <EmployeeTile teamArr={team} /> */}
      <EmployeeInfo teamArr={team} />
    </div>
  );
}

export default App;
