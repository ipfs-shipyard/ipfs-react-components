import React from 'react'
import PropTypes from 'prop-types'
import prettyBytes from 'pretty-bytes'

import Pane from '../../components/Pane'
import Header from '../../components/Header'
import InfoBlock from '../../components/InfoBlock'

import './styles.css'

export default function Info (props) {
  const copy = (text) => () => { props.copy(text) }

  return (
    <Pane class='info'>
      <Header title='Your Node' />

      <div className='main'>
        <div className='sharing'>
          <p>{prettyBytes(props.repo.RepoSize)}</p>
          <p>Sharing {props.repo.NumObjects} objects</p>
        </div>

        <InfoBlock
          title='Peer ID'
          info={props.node.id}
          onClick={copy(props.node.id)} />

        <InfoBlock
          title='Location'
          info={props.node.location} />

        <InfoBlock
          title='Bandwidth Used'
          info={prettyBytes(props.bw.TotalIn + props.bw.TotalOut)} />

        <InfoBlock
          title='Down Speed'
          info={prettyBytes(props.bw.RateIn) + '/s'} />

        <InfoBlock
          title='Up Speed'
          info={prettyBytes(props.bw.RateOut) + '/s'} />

        <InfoBlock
          title='Protocol Version'
          info={props.node.protocolVersion} />

        <InfoBlock
          title='Addresses'
          info={props.node.addresses} />

        <InfoBlock
          title='Public Key'
          info={props.node.publicKey}
          onClick={copy(props.node.publicKey)} />

        { props.after !== null && props.after }
      </div>
    </Pane>
  )
}

Info.propTypes = {
  copy: PropTypes.func.isRequired,
  node: PropTypes.shape({
    id: PropTypes.string,
    location: PropTypes.string,
    protocolVersion: PropTypes.string,
    publicKey: PropTypes.string,
    addresses: PropTypes.array
  }),
  repo: PropTypes.shape({
    RepoSize: PropTypes.number,
    NumObjects: PropTypes.number
  }),
  bw: PropTypes.shape({
    TotalIn: PropTypes.numbe,
    TotalOut: PropTypes.numbe,
    RateIn: PropTypes.numbe,
    RateOut: PropTypes.numbe
  }),
  after: PropTypes.any
}

Info.defaultProps = {
  node: {
    id: 'Undefined',
    location: 'Unknown',
    protocolVersion: 'Undefined',
    publicKey: 'Undefined',
    addresses: []
  },
  repo: {
    RepoSize: 0,
    NumObjects: 0
  },
  bw: {
    TotalIn: 0,
    TotalOut: 0,
    RateIn: 0,
    RateOut: 0
  }
}
