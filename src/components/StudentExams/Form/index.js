import React from 'react'
import PropTypes from 'prop-types'

export const Form = ({handler}) => {




  return (
    <form onClick={handler}>

  <label htmlFor="fname" placeholder="First Name"></label>
  <input type="text" id="fname" name="fname"/>

  <label htmlFor="lname" placeholder="Last Name"></label>
  <input type="text" id="lname" name="lname"/>

  <label htmlFor="score" placeholder="Score"></label>
  <input type="number" id="score" />
  <button>Add</button>
</form>
  )
}

Form.propTypes = {
handler: PropTypes.func,
}
