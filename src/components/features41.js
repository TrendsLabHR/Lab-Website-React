import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features41.css'

const Features41 = (props) => {
  return (
    <div className="features41-thq-layout301-elm thq-section-padding">
      <div className="features41-thq-max-width-elm thq-section-max-width">
        <h2 className="features41-thq-text-elm thq-heading-2">
          {props.sectionTitle ?? (
            <Fragment>
              <span className="features41-text10">
                Discover the Key Features
              </span>
            </Fragment>
          )}
        </h2>
        <div className="features41-thq-row-elm thq-grid-auto-300">
          <div className="features41-thq-feature1-elm">
            <img
              alt={props.feature1ImageAlt}
              src={props.feature1ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <div className="features41-thq-content-elm1 thq-flex-column">
              <div className="features41-thq-section-title-elm1 thq-flex-column">
                <h3 className="features41-thq-title1-elm thq-heading-3">
                  {props.feature1Title ?? (
                    <Fragment>
                      <span className="features41-text13">Prop Content</span>
                    </Fragment>
                  )}
                </h3>
                <span className="features41-thq-description1-elm thq-body-small">
                  {props.feature1Description ?? (
                    <Fragment>
                      <span className="features41-text14">Prop Content</span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="features41-thq-action-elm1 thq-flex-row">
                <button className="thq-button-flat">
                  <span className="thq-body-small">
                    {props.feature1Button ?? (
                      <Fragment>
                        <span className="features41-text15">Button</span>
                      </Fragment>
                    )}
                  </span>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M426 256l256 256-256 256-60-60 196-196-196-196z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="features41-thq-feature2-elm">
            <img
              alt={props.feature2ImageAlt}
              src={props.feature2ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <div className="features41-thq-content-elm2 thq-flex-column">
              <div className="features41-thq-section-title-elm2 thq-flex-column">
                <strong className="features41-thq-title2-elm thq-heading-3">
                  {props.feature2Title ?? (
                    <Fragment>
                      <span className="features41-text18">Prop Content</span>
                    </Fragment>
                  )}
                </strong>
                <span className="features41-thq-description2-elm thq-body-small">
                  {props.feature2Description ?? (
                    <Fragment>
                      <span className="features41-text11">Prop Content</span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="features41-thq-action-elm2 thq-flex-row">
                <button className="thq-button-flat">
                  <span className="thq-body-small">
                    {props.feature2Button ?? (
                      <Fragment>
                        <span className="features41-text22">Button</span>
                      </Fragment>
                    )}
                  </span>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M426 256l256 256-256 256-60-60 196-196-196-196z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="features41-thq-feature3-elm">
            <img
              alt={props.feature3ImageAlt}
              src={props.feature3ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <div className="features41-thq-content-elm3 thq-flex-column">
              <div className="features41-thq-section-title-elm3 thq-flex-column">
                <strong className="features41-thq-title3-elm thq-heading-3">
                  {props.feature3Title ?? (
                    <Fragment>
                      <span className="features41-text16">
                        Discover the Magic of Lorem Ipsum Text Generation
                      </span>
                    </Fragment>
                  )}
                </strong>
                <span className="features41-thq-description3-elm thq-body-small">
                  {props.feature3Description ?? (
                    <Fragment>
                      <span className="features41-text20">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros elementum tristique.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="features41-thq-action-elm3 thq-flex-row">
                <button className="thq-button-flat">
                  <span className="thq-body-small">
                    {props.feature3Button ?? (
                      <Fragment>
                        <span className="features41-text21">Button</span>
                      </Fragment>
                    )}
                  </span>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M426 256l256 256-256 256-60-60 196-196-196-196z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="features41-thq-feature4-elm">
            <img
              alt={props.feature4ImageAlt}
              src={props.feature4ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <div className="features41-thq-content-elm4 thq-flex-column">
              <div className="features41-thq-section-title-elm4 thq-flex-column">
                <strong className="features41-thq-title4-elm thq-heading-3">
                  {props.feature4Title ?? (
                    <Fragment>
                      <span className="features41-text19">
                        Discover the Magic of Lorem Ipsum Text Generation
                      </span>
                    </Fragment>
                  )}
                </strong>
                <span className="features41-thq-description4-elm thq-body-small">
                  {props.feature4Description ?? (
                    <Fragment>
                      <span className="features41-text17">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros elementum tristique.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="features41-thq-action-elm4 thq-flex-row">
                <button className="thq-button-flat">
                  <span className="thq-body-small">
                    {props.feature4Button ?? (
                      <Fragment>
                        <span className="features41-text12">Button</span>
                      </Fragment>
                    )}
                  </span>
                  <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                    <path d="M426 256l256 256-256 256-60-60 196-196-196-196z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features41.defaultProps = {
  feature4ImageAlt: 'image 4',
  sectionTitle: undefined,
  feature2Description: undefined,
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1533043760339-585a91d9f317?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI2fHxmZWF0dXJlfGVufDB8fHx8MTcxNjQ2MDY3M3ww&ixlib=rb-4.0.3&w=1400',
  feature1ImageAlt: 'icon',
  feature3ImageAlt: 'PlaceholderImage1314',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI0fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=600',
  feature4Button: undefined,
  feature1Title: undefined,
  feature1Description: undefined,
  feature1Button: undefined,
  feature3Title: undefined,
  feature4Description: undefined,
  feature2ImageAlt: 'icon',
  feature2Title: undefined,
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1664251929714-8e4cbf0d075d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDM0fHxmZWF0dXJlfGVufDB8fHx8MTcxNjQ2MDY3M3ww&ixlib=rb-4.0.3&w=1400',
  feature4Title: undefined,
  feature3Description: undefined,
  feature3Button: undefined,
  feature4ImageSrc:
    'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQ0fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=600',
  feature2Button: undefined,
}

Features41.propTypes = {
  feature4ImageAlt: PropTypes.string,
  sectionTitle: PropTypes.element,
  feature2Description: PropTypes.element,
  feature1ImageSrc: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature4Button: PropTypes.element,
  feature1Title: PropTypes.element,
  feature1Description: PropTypes.element,
  feature1Button: PropTypes.element,
  feature3Title: PropTypes.element,
  feature4Description: PropTypes.element,
  feature2ImageAlt: PropTypes.string,
  feature2Title: PropTypes.element,
  feature2ImageSrc: PropTypes.string,
  feature4Title: PropTypes.element,
  feature3Description: PropTypes.element,
  feature3Button: PropTypes.element,
  feature4ImageSrc: PropTypes.string,
  feature2Button: PropTypes.element,
}

export default Features41
