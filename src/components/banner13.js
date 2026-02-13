import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './banner13.css'

const Banner13 = (props) => {
  return (
    <div className="banner13-container1 thq-section-padding">
      <div className="banner13-thq-max-width-elm thq-section-max-width">
        <div className="banner13-container2">
          <h2 className="banner13-thq-title-elm thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="banner13-text6">
                  <span>For Participants</span>
                  <br></br>
                </span>
              </Fragment>
            )}
          </h2>
          <h3 className="banner13-text1 thq-heading-3">
            {props.content1 ?? (
              <Fragment>
                <span className="banner13-text2">
                  <span>
                    Please see below for currently recruiting studies. Contact
                    trends-lab@pennmedicine.upenn.edu for questions or further
                    information.
                  </span>
                  <br></br>
                  <br></br>
                </span>
              </Fragment>
            )}
          </h3>
        </div>
      </div>
    </div>
  )
}

Banner13.defaultProps = {
  content1: undefined,
  heading1: undefined,
}

Banner13.propTypes = {
  content1: PropTypes.element,
  heading1: PropTypes.element,
}

export default Banner13
