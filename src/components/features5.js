import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features5.css'

const Features5 = (props) => {
  return (
    <div className="features5-thq-layout223-elm thq-section-padding">
      <div className="features5-thq-max-width-elm thq-section-max-width thq-flex-row">
        <div className="thq-flex-column">
          <img
            alt={props.featureImageAlt}
            src={props.featureImageSrc}
            className="thq-img-ratio-4-3"
          />
        </div>
        <div className="thq-flex-column">
          <div className="features5-thq-list-elm thq-flex-column">
            <div className="thq-flex-row features5-thq-list-item-elm1">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="thq-team-image-round"
              />
              <div className="features5-thq-content-elm2 thq-flex-column">
                <h3 className="thq-heading-3 features5-thq-title2-elm">
                  {props.feature2Description1 ?? (
                    <Fragment>
                      <span className="features5-text5">
                        Discover the Power of Actions
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small features5-thq-description2-elm">
                  {props.feature2Description ?? (
                    <Fragment>
                      <span className="features5-text2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros elementum tristique.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="thq-flex-row features5-thq-list-item-elm2">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="thq-team-image-round"
              />
              <div className="features5-thq-content-elm3 thq-flex-column">
                <h3 className="thq-heading-3 features5-thq-title3-elm">
                  {props.feature3Title ?? (
                    <Fragment>
                      <span className="features5-text3">
                        Discover the Power of Actions
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small features5-thq-description3-elm">
                  {props.feature3Description ?? (
                    <Fragment>
                      <span className="features5-text6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros elementum tristique.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="thq-flex-row">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="thq-team-image-round"
              />
              <div className="features5-thq-content-elm4 thq-flex-column">
                <h3 className="thq-heading-3 features5-thq-title1-elm">
                  {props.feature1Title ?? (
                    <Fragment>
                      <span className="features5-text8">
                        Discover the Power of Actions
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small features5-thq-description1-elm">
                  {props.feature1Description ?? (
                    <Fragment>
                      <span className="features5-text7">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros elementum tristique.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-flex-row features5-thq-actions-elm">
            <button className="thq-button-filled features5-thq-button-elm1">
              <span className="thq-body-small">
                {props.mainAction ?? (
                  <Fragment>
                    <span className="features5-text4">Main action</span>
                  </Fragment>
                )}
              </span>
            </button>
            <button className="thq-button-outline features5-thq-button-elm2">
              <span className="thq-body-small">
                {props.secondaryAction ?? (
                  <Fragment>
                    <span className="features5-text1">Secondary action</span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

Features5.defaultProps = {
  feature2ImageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  feature1ImageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  featureImageSrc:
    'https://images.unsplash.com/photo-1524169113253-c6ba17f68498?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDExMnx8YWJzdHJhY3R8ZW58MHx8fHwxNzEwOTMzOTc2fDA&ixlib=rb-4.0.3&w=1400',
  secondaryAction: undefined,
  feature2Description: undefined,
  feature3Title: undefined,
  feature1ImageAlt: 'image',
  mainAction: undefined,
  feature2Description1: undefined,
  featureImageAlt: 'PlaceholderImage1314',
  feature3Description: undefined,
  feature3ImageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  feature2ImageAlt: 'image',
  feature1Description: undefined,
  feature1Title: undefined,
  feature3ImageAlt: 'image',
}

Features5.propTypes = {
  feature2ImageSrc: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  featureImageSrc: PropTypes.string,
  secondaryAction: PropTypes.element,
  feature2Description: PropTypes.element,
  feature3Title: PropTypes.element,
  feature1ImageAlt: PropTypes.string,
  mainAction: PropTypes.element,
  feature2Description1: PropTypes.element,
  featureImageAlt: PropTypes.string,
  feature3Description: PropTypes.element,
  feature3ImageSrc: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature1Description: PropTypes.element,
  feature1Title: PropTypes.element,
  feature3ImageAlt: PropTypes.string,
}

export default Features5
