import React from 'react';
import EmployeeCards from '../../components/EmployeeCards/EmployeeCards';

const Home = ({teamArr}) => {
  return (
    <div className="all-tiles">
      <EmployeeCards key={teamArr.id} teamArr={teamArr} />
    </div>
  )
}

export default Home