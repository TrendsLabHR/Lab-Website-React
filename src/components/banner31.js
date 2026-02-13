import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './banner31.css'

const Banner31 = (props) => {
  return (
    <div className="banner31-container1 thq-section-padding">
      <img
        alt={props.image1Alt}
        src={props.image1Src}
        className="banner31-image thq-img-ratio-16-9"
      />
      <div className="banner31-thq-max-width-elm thq-section-max-width">
        <div className="banner31-container2">
          <div className="banner31-container3">
            <h2 className="banner31-thq-title-elm thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="banner31-text3">Prop Content</span>
                </Fragment>
              )}
            </h2>
            <h3 className="banner31-text1 thq-heading-3">
              {props.content1 ?? (
                <Fragment>
                  <span className="banner31-text5">Prop Content</span>
                </Fragment>
              )}
            </h3>
          </div>
        </div>
        <button type="button" className="thq-button-filled">
          <span>
            {props.action1 ?? (
              <Fragment>
                <span className="banner31-text4">Prop Content</span>
              </Fragment>
            )}
          </span>
        </button>
      </div>
    </div>
  )
}

Banner31.defaultProps = {
  image1Src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  heading1: undefined,
  action1: undefined,
  image1Alt: 'image',
  content1: undefined,
}

Banner31.propTypes = {
  image1Src: PropTypes.string,
  heading1: PropTypes.element,
  action1: PropTypes.element,
  image1Alt: PropTypes.string,
  content1: PropTypes.element,
}

export default Banner31
