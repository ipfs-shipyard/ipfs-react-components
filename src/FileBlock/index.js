import React from 'react'
import PropTypes from 'prop-types'
import fileExtension from 'file-extension'

import Block from '../Block'
import Button from '../Button'
import Icon from '../Icon'

import './styles.css'

/**
 * Is a File Block.
 *
 * @param {Object} props
 *
 * @prop {String} name - file name
 * @prop {String} date - date when the file was modified/uploaded
 * @prop {String} hash - file's hash in IPFS system
 *
 * @return {ReactElement}
 */
export default function FileBlock (props) {
  const extension = fileExtension(props.name)
  let icon = 'file'
  
  if (props.type === 'directory') {
    icon = 'folder'
  } else if (fileTypes[extension]) {
    icon = fileTypes[extension]
  }

  const open = () => {
    if (props.type === 'directory') {
      props.navigate(props.name, props.hash)
    } else {
      props.open(props.name, props.hash)
    }
  }

  const copy = (event) => {
    event.stopPropagation()
    event.preventDefault()
    props.copy(props.hash)
  }

  const wrapped = (
    <div>
      <div className='icon'>
        <Icon name={icon} />
      </div>
      <div>
        <p className='label'>{props.name}</p>
        <p className='info'>{props.hash}</p>
      </div>
      { props.uploading &&
        <div className='right'>
          <Icon name='reload' />
        </div>
      }
    </div>
  )
  
  const unwrapped = (
    <div className='button-overlay'>
      { typeof props.open === 'function' &&
        <Button text='Open' onClick={open} />
      }
      { typeof props.copy === 'function' &&
        <Button text='Copy Link' onClick={copy} />
      }
    </div>
  )

  return (
    <Block className='file' wrapped={wrapped} unwrapped={unwrapped} />
  )
}

FileBlock.propTypes = {
  name: PropTypes.string.isRequired,
  hash: PropTypes.string.isRequired,
  navigate: PropTypes.func,
  copy: PropTypes.func,
  type: PropTypes.string,
  uploading: PropTypes.bool
}

FileBlock.defaultProps = {
  type: 'file'
}

const fileTypes = {
  png: 'image',
  jpg: 'image',
  tif: 'image',
  tiff: 'image',
  bmp: 'image',
  gif: 'image',
  eps: 'image',
  raw: 'image',
  cr2: 'image',
  nef: 'image',
  orf: 'image',
  sr2: 'image',
  jpeg: 'image',
  mp3: 'music-alt',
  flac: 'music-alt',
  ogg: 'music-alt',
  oga: 'music-alt',
  aa: 'music-alt',
  aac: 'music-alt',
  m4p: 'music-alt',
  webm: 'music-alt',
  mp4: 'video-clapper',
  mkv: 'video-clapper',
  avi: 'video-clapper',
  asf: 'video-clapper',
  flv: 'video-clapper'
}
