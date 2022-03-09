import React from 'react'
import TicketCounter from '../TicketCounter/TicketCounter'
import "./EmployeeCards.scss"

const EmployeeCards = ({teamArr}) => {
  const employeeCardsJSX = teamArr.map(({name,role}) => {
    return (
      <>
        <div className="employee-tile">
          <div className="employee-tile__info">
            <p className="employee-tile__info--name"><span className="prefix">Name:</span> {name}</p>
            <p className="employee-tile__info--role"><span className="prefix">Role:</span> {role}</p>
          </div>
          <TicketCounter />
        </div>
      </>
    )
  })

  return (
    <>
      {employeeCardsJSX}
    </>
  )
}

export default EmployeeCards