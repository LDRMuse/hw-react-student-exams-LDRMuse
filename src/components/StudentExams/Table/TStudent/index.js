import React, { Fragment } from 'react'
import PropTypes from 'prop-types'


export const TStudent = ({firstName, lastName, score}) => {


  return (
    <Fragment>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{score}</td>
    </Fragment>
  )
}

TStudent.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  score: PropTypes.string,
}
