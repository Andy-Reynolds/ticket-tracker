import React from 'react';
import EmployeeCards from '../../components/EmployeeCards/EmployeeCards';
import "./Home.scss";

const Home = ({teamArr}) => {
  return (
    <div className="all-tiles">
      <EmployeeCards teamArr={teamArr} />
    </div>
  )
}

export default Home