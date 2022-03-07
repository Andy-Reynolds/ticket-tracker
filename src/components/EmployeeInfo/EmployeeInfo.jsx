import React from 'react'
import "./EmployeeInfo.scss"

const EmployeeInfo = ({teamArr}) => {
  const employeeInfoJSX = teamArr.map(({name,role}) => {
    return (
      <>
        <p>Name: {name}</p>
        <p>Role: {role}</p>
      </>
    )
  })

  return (
    <>
      <div className="employee-info">
        {employeeInfoJSX}
      </div>
    </>
  )
}

export default EmployeeInfo