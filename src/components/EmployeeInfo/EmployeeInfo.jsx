import React from 'react'
import "./EmployeeInfo.scss"

const EmployeeInfo = ({teamArr}) => {
  const employeeInfoJSX = teamArr.map(({name,role}) => {
    return (
      <>
        <div className="employee-info">
          <p>Name: {name}</p>
          <p>Role: {role}</p>
          <p>My counter will go here</p>
        </div>
      </>
    )
  })

  return (
    <>
      {employeeInfoJSX}
    </>
  )
}

export default EmployeeInfo