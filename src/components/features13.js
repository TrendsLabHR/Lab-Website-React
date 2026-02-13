import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features13.css'

const Features13 = (props) => {
  return (
    <div className="features13-thq-layout226-elm thq-section-padding">
      <div className="features13-thq-max-width-elm thq-section-max-width">
        <div className="thq-flex-column">
          <img
            alt={props.feature1ImageAlt}
            src={props.feature1ImageSrc}
            className="thq-img-ratio-4-3"
          />
          <div className="thq-flex-column">
            <span className="features13-thq-over-title1-elm thq-body-small">
              {props.feature1Slogan ?? (
                <Fragment>
                  <span className="features13-text19">Logo</span>
                </Fragment>
              )}
            </span>
            <div className="thq-flex-column features13-thq-content-elm1">
              <h3 className="features13-thq-title1-elm thq-heading-3">
                {props.feature1Title ?? (
                  <Fragment>
                    <span className="features13-text14">
                      Discover the Magic of Lorem Ipsum Text Generation
                    </span>
                  </Fragment>
                )}
              </h3>
              <span className="features13-thq-description1-elm thq-body-small">
                {props.feature1Description ?? (
                  <Fragment>
                    <span className="features13-text17">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="thq-flex-row features13-thq-actions-elm1">
              <button className="thq-button-filled features13-thq-button-elm1">
                <span className="features13-thq-action1-elm1 thq-body-small">
                  {props.feature1MainAction ?? (
                    <Fragment>
                      <span className="features13-text10">Main action</span>
                    </Fragment>
                  )}
                </span>
              </button>
              <button className="thq-button-outline features13-thq-button-elm2">
                <span className="features13-thq-action2-elm1 thq-body-small">
                  {props.feature1SecondaryAction ?? (
                    <Fragment>
                      <span className="features13-text11">
                        Secondary action
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="thq-flex-column">
          <img
            alt={props.feature2ImageAlt}
            src={props.feature2ImageSrc}
            className="thq-img-ratio-4-3"
          />
          <div className="thq-flex-column">
            <span className="features13-thq-over-title2-elm thq-body-small">
              {props.feature2Slogan ?? (
                <Fragment>
                  <span className="features13-text15">Logo</span>
                </Fragment>
              )}
            </span>
            <div className="thq-flex-column">
              <h3 className="features13-thq-title2-elm thq-heading-3">
                {props.feature2Title ?? (
                  <Fragment>
                    <span className="features13-text18">
                      Discover the Magic of Lorem Ipsum Text Generation
                    </span>
                  </Fragment>
                )}
              </h3>
              <span className="features13-thq-description2-elm thq-body-small">
                {props.feature2Description ?? (
                  <Fragment>
                    <span className="features13-text12">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="thq-flex-row features13-thq-actions-elm2">
              <button className="thq-button-filled features13-thq-button-elm3">
                <span className="features13-thq-action1-elm2 thq-body-small">
                  {props.feature2MainAction ?? (
                    <Fragment>
                      <span className="features13-text16">Main action</span>
                    </Fragment>
                  )}
                </span>
              </button>
              <button className="thq-button-outline features13-thq-button-elm4">
                <span className="features13-thq-action2-elm2 thq-body-small">
                  {props.feature2Action2 ?? (
                    <Fragment>
                      <span className="features13-text13">
                        Secondary action
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features13.defaultProps = {
  feature1MainAction: undefined,
  feature1SecondaryAction: undefined,
  feature2Description: undefined,
  feature2Action2: undefined,
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1664251929714-8e4cbf0d075d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDM0fHxmZWF0dXJlfGVufDB8fHx8MTcxNjQ2MDY3M3ww&ixlib=rb-4.0.3&w=1400',
  feature1Title: undefined,
  feature2Slogan: undefined,
  feature2MainAction: undefined,
  feature2ImageAlt: 'icon',
  feature1ImageAlt: 'icon',
  feature1Description: undefined,
  feature2Title: undefined,
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1533043760339-585a91d9f317?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI2fHxmZWF0dXJlfGVufDB8fHx8MTcxNjQ2MDY3M3ww&ixlib=rb-4.0.3&w=1400',
  feature1Slogan: undefined,
}

Features13.propTypes = {
  feature1MainAction: PropTypes.element,
  feature1SecondaryAction: PropTypes.element,
  feature2Description: PropTypes.element,
  feature2Action2: PropTypes.element,
  feature2ImageSrc: PropTypes.string,
  feature1Title: PropTypes.element,
  feature2Slogan: PropTypes.element,
  feature2MainAction: PropTypes.element,
  feature2ImageAlt: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature1Description: PropTypes.element,
  feature2Title: PropTypes.element,
  feature1ImageSrc: PropTypes.string,
  feature1Slogan: PropTypes.element,
}

export default Features13
