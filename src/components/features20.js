import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features20.css'

const Features20 = (props) => {
  return (
    <div className="features20-thq-layout349-elm thq-section-padding">
      <div className="features20-thq-max-width-elm thq-section-max-width">
        <div className="features20-thq-content-elm1">
          <div className="features20-thq-section-title-elm">
            <span className="thq-body-small">
              {props.feature1Slogan ?? (
                <Fragment>
                  <span className="features20-text3">Slogan</span>
                </Fragment>
              )}
            </span>
            <div className="features20-thq-content-elm2">
              <h2 className="thq-heading-2">
                {props.feature1Title ?? (
                  <Fragment>
                    <span className="features20-text2">Prop Content</span>
                  </Fragment>
                )}
              </h2>
              <p className="thq-body-large">
                {props.feature1Description ?? (
                  <Fragment>
                    <span className="features20-text1">Prop Content</span>
                  </Fragment>
                )}
              </p>
            </div>
            <div className="features20-thq-actions-elm">
              <button className="features20-thq-button-elm1 thq-button-filled">
                <span className="thq-body-small">
                  {props.feature1Action1 ?? (
                    <Fragment>
                      <span className="features20-text5">Main action</span>
                    </Fragment>
                  )}
                </span>
              </button>
              <button className="features20-thq-button-elm2 thq-button-outline">
                <span className="thq-body-small">
                  {props.feature1Action2 ?? (
                    <Fragment>
                      <span className="features20-text4">Secondary action</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="features20-thq-image-container-elm">
          <img
            alt={props.feature1ImageAlt}
            src={props.feature1ImageSrc}
            className="features20-thq-placeholder-image-elm thq-img-ratio-16-9"
          />
        </div>
      </div>
    </div>
  )
}

Features20.defaultProps = {
  feature1Description: undefined,
  feature1ImageAlt: 'PlaceholderImage1314',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1574169208507-84376144848b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=1400',
  feature1Title: undefined,
  feature1Slogan: undefined,
  feature1Action2: undefined,
  feature1Action1: undefined,
}

Features20.propTypes = {
  feature1Description: PropTypes.element,
  feature1ImageAlt: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature1Title: PropTypes.element,
  feature1Slogan: PropTypes.element,
  feature1Action2: PropTypes.element,
  feature1Action1: PropTypes.element,
}

export default Features20
