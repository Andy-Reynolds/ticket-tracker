import React from 'react'
import TicketCounter from '../TicketCounter/TicketCounter'
import "./EmployeeCards.scss"

const EmployeeCards = ({teamArr}) => {
  const employeeCardsJSX = teamArr.map(({name,role,id}) => {
    return (
        <div key={id} className="employee-card">
          <div className="employee-card__info">
            <p className="employee-card__info--name"><span className="prefix">Name:</span> {name}</p>
            <p className="employee-card__info--role"><span className="prefix">Role:</span> {role}</p>
          </div>
          <TicketCounter key={id} />
        </div>
    )
  })

  return (
    <>
      {employeeCardsJSX}
    </>
  )
}

export default EmployeeCards