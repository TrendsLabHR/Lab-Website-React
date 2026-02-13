import React from 'react'

import PropTypes from 'prop-types'

import './contact1.css'

const Contact1 = (props) => {
  return (
    <div
      className={`contact1-thq-contact20-elm thq-section-padding ${props.rootClassName} `}
    ></div>
  )
}

Contact1.defaultProps = {
  rootClassName: '',
}

Contact1.propTypes = {
  rootClassName: PropTypes.string,
}

export default Contact1
