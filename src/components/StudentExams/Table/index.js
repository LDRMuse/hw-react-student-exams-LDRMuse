import React from 'react'
import PropTypes from 'prop-types'

export const Table = ( {student: {firstName, lastName, score}}) => {



const renderTableRow = () => {


}




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
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{score}</td>
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
  student: PropTypes.object,

}
