import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './banner24.css'

const Banner24 = (props) => {
  return (
    <div className="banner24-container1 thq-section-padding">
      <div className="banner24-thq-max-width-elm thq-section-max-width">
        <div className="banner24-container2">
          <h2 className="banner24-thq-title-elm thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="banner24-text5">Company Name</span>
              </Fragment>
            )}
          </h2>
          <h3 className="banner24-text1 thq-heading-3">
            {props.content1 ?? (
              <Fragment>
                <span className="banner24-text4">
                  Company mission statement
                </span>
              </Fragment>
            )}
          </h3>
        </div>
        <button type="button" className="banner24-button thq-button-filled">
          <span>
            {props.action1 ?? (
              <Fragment>
                <span className="banner24-text3">Call to Action</span>
              </Fragment>
            )}
          </span>
        </button>
        <video
          src={props.video1Src}
          loop="true"
          muted="true"
          poster={props.video1Poster}
          autoPlay="true"
          className="banner24-video"
        ></video>
      </div>
    </div>
  )
}

Banner24.defaultProps = {
  video1Poster: 'https://play.teleporthq.io/static/svg/videoposter.svg',
  action1: undefined,
  content1: undefined,
  heading1: undefined,
  video1Src: '',
}

Banner24.propTypes = {
  video1Poster: PropTypes.string,
  action1: PropTypes.element,
  content1: PropTypes.element,
  heading1: PropTypes.element,
  video1Src: PropTypes.string,
}

export default Banner24
