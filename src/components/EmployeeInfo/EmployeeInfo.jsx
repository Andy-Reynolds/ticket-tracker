import React from 'react'
import TicketCounter from '../TicketCounter/TicketCounter'
import "./EmployeeInfo.scss"

const EmployeeInfo = ({teamArr}) => {
  const employeeInfoJSX = teamArr.map(({name,role}) => {
    return (
      <>
        <div className="employee-info">
          <p className="employee-name">Name: {name}</p>
          <p className="employee-role">Role: {role}</p>
          <TicketCounter />
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