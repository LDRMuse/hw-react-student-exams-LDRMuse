import React from 'react'
import PropTypes from 'prop-types'
import { TStudent } from './TStudent'



export const Table = ({ students }) => {

  const renderStudents = () => students.map(({ firstName, lastName, score }, i) => {
    return <TStudent first={firstName} last={lastName} score={score} key={i} />
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
          <td>Average</td>
          <td>$AveNUM</td>
        </tr>
      </tfoot>
    </table>
  )
}


Table.propTypes = {
  students: PropTypes.array,

}
