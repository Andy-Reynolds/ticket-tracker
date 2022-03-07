import React from 'react'
import "./EmployeeInfo.scss"

const EmployeeInfo = ({teamArr}) => {
  const employeeInfoJSX = teamArr.map((employee) => {
    return (
      <>
        <p>Name: {employee.name}</p>
        <p>Role: {employee.role}</p>
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