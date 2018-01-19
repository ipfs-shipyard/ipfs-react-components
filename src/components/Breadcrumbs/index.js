import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'

function makeBread (root) {
  root = root || '/'
  if (root.endsWith('/')) {
    root = root.substring(0, root.length - 2)
  }

  let parts = root.split('/').map(part => {
    return {
      name: part,
      path: part
    }
  })

  for (let i = 1; i < parts.length; i++) {
    parts[i] = {
      name: parts[i].name,
      path: parts[i - 1].path + '/' + parts[i].path
    }
  }

  parts[0] = {
    name: 'ipfs',
    path: '/'
  }

  return parts
}

export default function Breadcrumbs (props) {
  const bread = makeBread(props.path)
  const res = []

  bread.forEach((link, index) => {
    res.push(<a key={`${index}link`} onClick={() => { props.navigate(link.path) }}>{link.name}</a>)
    res.push(<span key={`${index}divisor`}>/</span>)
  })

  res.pop()
  return (
    <div className='breadcrumbs'>{res}</div>
  )
}

Breadcrumbs.propTypes = {
  path: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired
}
