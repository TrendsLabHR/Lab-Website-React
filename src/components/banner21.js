import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './banner21.css'

const Banner21 = (props) => {
  return (
    <div className="banner21-container1 thq-section-padding">
      <div className="banner21-thq-max-width-elm thq-section-max-width">
        <div className="banner21-container2">
          <h2 className="banner21-thq-title-elm thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="banner21-text3">Prop Content</span>
              </Fragment>
            )}
          </h2>
          <h3 className="banner21-text1 thq-heading-3">
            {props.content1 ?? (
              <Fragment>
                <span className="banner21-text5">Prop Content</span>
              </Fragment>
            )}
          </h3>
        </div>
        <button type="button" className="banner21-button thq-button-filled">
          <span>
            {props.action1 ?? (
              <Fragment>
                <span className="banner21-text4">Prop Content</span>
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
          className="banner21-video"
        ></video>
      </div>
    </div>
  )
}

Banner21.defaultProps = {
  heading1: undefined,
  action1: undefined,
  video1Poster: 'https://play.teleporthq.io/static/svg/videoposter.svg',
  content1: undefined,
  video1Src: '',
}

Banner21.propTypes = {
  heading1: PropTypes.element,
  action1: PropTypes.element,
  video1Poster: PropTypes.string,
  content1: PropTypes.element,
  video1Src: PropTypes.string,
}

export default Banner21
