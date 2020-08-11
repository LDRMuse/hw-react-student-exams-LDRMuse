import React from 'react'
import PropTypes from 'prop-types'
import { TStudent } from './TStudent'

import './Table.css'



export const Table = ({ students }) => {

  const getAverage = () => {
    return (students.reduce((total, {score}) => {
      total += score * 1

      return total
    }, 0) / students.length).toFixed(2)
  }

  const renderStudents = () => students.map(({ firstName, lastName, score }, i) => {
    return (
      <TStudent firstName={firstName} lastName={lastName} score={score} key={i} />
    )
  })



  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {renderStudents()}
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td >Average:</td>
          <td className={getAverage() >= 70 ? 'good' : 'bad'}> {getAverage() || 0}</td>
        </tr>
      </tfoot>
    </table>
  )
}


Table.propTypes = {
  students: PropTypes.array,

}
