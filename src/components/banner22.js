import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './banner22.css'

const Banner22 = (props) => {
  return (
    <div className="banner22-container1 thq-section-padding">
      <div className="banner22-thq-max-width-elm thq-section-max-width">
        <div className="banner22-container2">
          <h2 className="banner22-thq-title-elm thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="banner22-text3">Prop Content</span>
              </Fragment>
            )}
          </h2>
          <h3 className="banner22-text1 thq-heading-3">
            {props.content1 ?? (
              <Fragment>
                <span className="banner22-text4">Prop Content</span>
              </Fragment>
            )}
          </h3>
        </div>
        <button type="button" className="banner22-button thq-button-filled">
          <span>
            {props.action1 ?? (
              <Fragment>
                <span className="banner22-text5">Prop Content</span>
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
          className="banner22-video"
        ></video>
      </div>
    </div>
  )
}

Banner22.defaultProps = {
  heading1: undefined,
  content1: undefined,
  video1Src: '',
  action1: undefined,
  video1Poster: 'https://play.teleporthq.io/static/svg/videoposter.svg',
}

Banner22.propTypes = {
  heading1: PropTypes.element,
  content1: PropTypes.element,
  video1Src: PropTypes.string,
  action1: PropTypes.element,
  video1Poster: PropTypes.string,
}

export default Banner22
