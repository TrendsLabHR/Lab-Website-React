import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features1.css'

const Features1 = (props) => {
  return (
    <div className="features1-thq-layout251-elm thq-section-padding">
      <div className="features1-thq-max-width-elm thq-section-max-width">
        <div className="thq-flex-row features1-thq-section-title-elm">
          <div className="features1-thq-column-elm thq-flex-column">
            <span className="thq-body-small">
              {props.slogan ?? (
                <Fragment>
                  <span className="features1-text20">Slogan</span>
                </Fragment>
              )}
            </span>
            <h2 className="thq-heading-2 features1-thq-text-elm2">
              {props.sectionTitle ?? (
                <Fragment>
                  <span className="features1-text16">
                    Discover the Key Features
                  </span>
                </Fragment>
              )}
            </h2>
          </div>
          <span className="thq-body-small">
            {props.sectionDescription ?? (
              <Fragment>
                <span className="features1-text12">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat. Suspendisse varius enim in
                  eros elementum tristique. Duis cursus, mi quis viverra ornare,
                  eros dolor interdum nulla.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="features1-thq-content-elm1">
          <div className="features1-thq-row-elm thq-flex-row">
            <div className="features1-thq-feature1-elm thq-flex-column">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="thq-img-ratio-4-3 features1-thq-feature1-image-elm"
              />
              <div className="features1-thq-content-elm2 thq-flex-column">
                <h3 className="thq-heading-3">
                  {props.feature1Title ?? (
                    <Fragment>
                      <span className="features1-text15">
                        Explore our key features
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature1Description ?? (
                    <Fragment>
                      <span className="features1-text10">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros elementum tristique.
                        Duis cursus, mi quis viverra ornare, eros dolor interdum
                        nulla.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="features1-thq-feature2-elm thq-flex-column">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="thq-img-ratio-4-3 features1-thq-feature2-image-elm"
              />
              <div className="features1-thq-content-elm3 thq-flex-column">
                <h3 className="thq-heading-3">
                  {props.feature2Title ?? (
                    <Fragment>
                      <span className="features1-text19">
                        Explore our key features
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature2Description ?? (
                    <Fragment>
                      <span className="features1-text11">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros elementum tristique.
                        Duis cursus, mi quis viverra ornare, eros dolor interdum
                        nulla.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="features1-thq-feature3-elm thq-flex-column">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="thq-img-ratio-4-3 features1-thq-feature3-image-elm"
              />
              <div className="features1-thq-content-elm4 thq-flex-column">
                <h3 className="thq-heading-3">
                  {props.feature3Title ?? (
                    <Fragment>
                      <span className="features1-text18">
                        Explore our key features
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature3Description ?? (
                    <Fragment>
                      <span className="features1-text17">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros elementum tristique.
                        Duis cursus, mi quis viverra ornare, eros dolor interdum
                        nulla.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="features1-thq-actions-elm">
          <button className="thq-button-filled features1-thq-button-elm1">
            <span className="thq-body-small">
              {props.mainAction ?? (
                <Fragment>
                  <span className="features1-text13">Main action</span>
                </Fragment>
              )}
            </span>
          </button>
          <button className="thq-button-outline features1-thq-button-elm2">
            <span className="thq-body-small">
              {props.secondaryAction ?? (
                <Fragment>
                  <span className="features1-text14">Secondary action</span>
                </Fragment>
              )}
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

Features1.defaultProps = {
  feature1Description: undefined,
  feature3ImageAlt: 'PlaceholderImage1314',
  feature2Description: undefined,
  sectionDescription: undefined,
  mainAction: undefined,
  secondaryAction: undefined,
  feature1Title: undefined,
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1563089145-599997674d42?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&h=300',
  sectionTitle: undefined,
  feature1ImageAlt: 'PlaceholderImage1314',
  feature3Description: undefined,
  feature2ImageAlt: 'PlaceholderImage1314',
  feature3Title: undefined,
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&h=300',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1574169208507-84376144848b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=1400',
  feature2Title: undefined,
  slogan: undefined,
}

Features1.propTypes = {
  feature1Description: PropTypes.element,
  feature3ImageAlt: PropTypes.string,
  feature2Description: PropTypes.element,
  sectionDescription: PropTypes.element,
  mainAction: PropTypes.element,
  secondaryAction: PropTypes.element,
  feature1Title: PropTypes.element,
  feature2ImageSrc: PropTypes.string,
  sectionTitle: PropTypes.element,
  feature1ImageAlt: PropTypes.string,
  feature3Description: PropTypes.element,
  feature2ImageAlt: PropTypes.string,
  feature3Title: PropTypes.element,
  feature3ImageSrc: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature2Title: PropTypes.element,
  slogan: PropTypes.element,
}

export default Features1
