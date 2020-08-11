import React from 'react'
import PropTypes from 'prop-types'

export const Form = ({ handler }) => {




  return (
    <form onClick={handler}>

      <label htmlFor="fname" > </label>
      <input type="text" id="fname" name="fname" placeholder="First Name" />

      <label htmlFor="lname" > </label>
      <input type="text" id="lname" name="lname" placeholder="Last Name" />

      <label htmlFor="score"> </label>
      <input type="number" id="score" placeholder="Score" />
      <br></br>
      <button type="submit">Add</button>
    </form>
  )
}

Form.propTypes = {
  handler: PropTypes.func,
}
