import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './banner1.css'

const Banner1 = (props) => {
  return (
    <div
      className={`banner1-container1 thq-section-padding ${props.rootClassName} `}
    >
      <div className="banner1-thq-max-width-elm thq-section-max-width">
        <div className="banner1-container2">
          <h2 className="banner1-thq-title-elm thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="banner1-text">
                  Advancing Neurological Health Research
                </span>
              </Fragment>
            )}
          </h2>
        </div>
      </div>
    </div>
  )
}

Banner1.defaultProps = {
  heading1: undefined,
  rootClassName: '',
}

Banner1.propTypes = {
  heading1: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default Banner1
