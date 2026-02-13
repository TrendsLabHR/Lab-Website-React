import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './banner26.css'

const Banner26 = (props) => {
  return (
    <div className="banner26-container1 thq-section-padding">
      <div className="banner26-thq-max-width-elm thq-section-max-width">
        <div className="banner26-container2">
          <h2 className="banner26-thq-title-elm thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="banner26-text4">Company Name</span>
              </Fragment>
            )}
          </h2>
          <h3 className="banner26-text1 thq-heading-3">
            {props.content1 ?? (
              <Fragment>
                <span className="banner26-text5">
                  Company mission statement
                </span>
              </Fragment>
            )}
          </h3>
        </div>
        <button type="button" className="banner26-button thq-button-filled">
          <span>
            {props.action1 ?? (
              <Fragment>
                <span className="banner26-text3">Call to Action</span>
              </Fragment>
            )}
          </span>
        </button>
      </div>
    </div>
  )
}

Banner26.defaultProps = {
  action1: undefined,
  heading1: undefined,
  content1: undefined,
}

Banner26.propTypes = {
  action1: PropTypes.element,
  heading1: PropTypes.element,
  content1: PropTypes.element,
}

export default Banner26
