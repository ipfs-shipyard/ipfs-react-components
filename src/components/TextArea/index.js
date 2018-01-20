import React from 'react'
import PropTypes from 'prop-types'

import Input from '../Input'
import './styles.css'

export default function TextArea (props) {
  const onChange = (event) => {
    event.preventDefault()
    props.onChange(event.target.value)
  }

  return (
    <Input class='textarea'>
      <textarea value={props.value} onChange={onChange} />
    </Input>
  )
}

TextArea.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}
