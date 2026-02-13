import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './banner3.css'

const Banner3 = (props) => {
  return (
    <div className="banner3-container1 thq-section-padding">
      <img
        alt={props.image1Alt}
        src={props.image1Src}
        className="banner3-image thq-img-ratio-16-9"
      />
      <div className="banner3-thq-max-width-elm thq-section-max-width">
        <div className="banner3-container2">
          <h2 className="banner3-thq-title-elm thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="banner3-text3">Company Name</span>
              </Fragment>
            )}
          </h2>
          <h3 className="banner3-text1 thq-heading-3">
            {props.content1 ?? (
              <Fragment>
                <span className="banner3-text5">Company mission statement</span>
              </Fragment>
            )}
          </h3>
        </div>
        <button type="button" className="thq-button-filled">
          <span>
            {props.action1 ?? (
              <Fragment>
                <span className="banner3-text4">Call to Action</span>
              </Fragment>
            )}
          </span>
        </button>
      </div>
    </div>
  )
}

Banner3.defaultProps = {
  image1Src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  heading1: undefined,
  image1Alt: 'image',
  action1: undefined,
  content1: undefined,
}

Banner3.propTypes = {
  image1Src: PropTypes.string,
  heading1: PropTypes.element,
  image1Alt: PropTypes.string,
  action1: PropTypes.element,
  content1: PropTypes.element,
}

export default Banner3
