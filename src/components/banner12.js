import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './banner12.css'

const Banner12 = (props) => {
  return (
    <div className="banner12-container1 thq-section-padding">
      <div className="banner12-thq-max-width-elm thq-section-max-width">
        <div className="banner12-container2">
          <h2 className="banner12-thq-title-elm thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="banner12-text3">Company Name</span>
              </Fragment>
            )}
          </h2>
          <h3 className="banner12-text1 thq-heading-3">
            {props.content1 ?? (
              <Fragment>
                <span className="banner12-text4">
                  Company mission statement
                </span>
              </Fragment>
            )}
          </h3>
        </div>
        <button type="button" className="thq-button-filled">
          <span>
            {props.action1 ?? (
              <Fragment>
                <span className="banner12-text5">Call to Action</span>
              </Fragment>
            )}
          </span>
        </button>
      </div>
    </div>
  )
}

Banner12.defaultProps = {
  heading1: undefined,
  content1: undefined,
  action1: undefined,
}

Banner12.propTypes = {
  heading1: PropTypes.element,
  content1: PropTypes.element,
  action1: PropTypes.element,
}

export default Banner12
