import React from 'react'
import PropTypes from 'prop-types'
import InfoBlock from '../InfoBlock'

export default function PeerBlock (props) {
  return (
    <InfoBlock
      buttonMessage='Details'
      onClick={props.onDetails}
      title={props.id}
      info={props.location} />
  )
}

PeerBlock.propTypes = {
  onDetails: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired
}
