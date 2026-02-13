import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './banner23.css'

const Banner23 = (props) => {
  return (
    <div className="banner23-container1 thq-section-padding">
      <div className="banner23-thq-max-width-elm thq-section-max-width">
        <div className="banner23-container2">
          <h2 className="banner23-thq-title-elm thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="banner23-text">Prop Content</span>
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
          className="banner23-video"
        ></video>
      </div>
    </div>
  )
}

Banner23.defaultProps = {
  video1Src: '',
  video1Poster: 'https://play.teleporthq.io/static/svg/videoposter.svg',
  heading1: undefined,
}

Banner23.propTypes = {
  video1Src: PropTypes.string,
  video1Poster: PropTypes.string,
  heading1: PropTypes.element,
}

export default Banner23
