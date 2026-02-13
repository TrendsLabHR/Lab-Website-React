import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './banner2.css'

const Banner2 = (props) => {
  return (
    <div className="banner2-container1 thq-section-padding">
      <div className="banner2-thq-max-width-elm thq-section-max-width">
        <div className="banner2-container2">
          <h2 className="banner2-thq-title-elm thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="banner2-text3">Company Name</span>
              </Fragment>
            )}
          </h2>
          <h3 className="banner2-text1 thq-heading-3">
            {props.content1 ?? (
              <Fragment>
                <span className="banner2-text5">Company mission statement</span>
              </Fragment>
            )}
          </h3>
        </div>
        <button type="button" className="banner2-button thq-button-filled">
          <span>
            {props.action1 ?? (
              <Fragment>
                <span className="banner2-text4">Call to Action</span>
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
          className="banner2-video"
        ></video>
      </div>
    </div>
  )
}

Banner2.defaultProps = {
  heading1: undefined,
  video1Poster: 'https://play.teleporthq.io/static/svg/videoposter.svg',
  action1: undefined,
  content1: undefined,
  video1Src: '',
}

Banner2.propTypes = {
  heading1: PropTypes.element,
  video1Poster: PropTypes.string,
  action1: PropTypes.element,
  content1: PropTypes.element,
  video1Src: PropTypes.string,
}

export default Banner2
