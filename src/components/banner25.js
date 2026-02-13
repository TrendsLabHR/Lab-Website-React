import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './banner25.css'

const Banner25 = (props) => {
  return (
    <div className="banner25-container1 thq-section-padding">
      <div className="banner25-thq-max-width-elm thq-section-max-width">
        <div className="banner25-container2">
          <h2 className="banner25-thq-title-elm thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="banner25-text">Company Name</span>
              </Fragment>
            )}
          </h2>
        </div>
        <video
          src={props.video1Src}
          loop="true"
          muted="true"
          poster={props.video1Poster}
          autoPlay="true"
          className="banner25-video"
        ></video>
      </div>
    </div>
  )
}

Banner25.defaultProps = {
  video1Src: '',
  video1Poster: 'https://play.teleporthq.io/static/svg/videoposter.svg',
  heading1: undefined,
}

Banner25.propTypes = {
  video1Src: PropTypes.string,
  video1Poster: PropTypes.string,
  heading1: PropTypes.element,
}

export default Banner25
