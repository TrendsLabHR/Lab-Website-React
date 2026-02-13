import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features42.css'

const Features42 = (props) => {
  return (
    <div className="features42-thq-layout301-elm thq-section-padding">
      <div className="features42-thq-max-width-elm thq-section-max-width">
        <h2 className="features42-thq-text-elm thq-heading-2">
          {props.sectionTitle ?? (
            <Fragment>
              <span className="features42-text19">Research Focus</span>
            </Fragment>
          )}
        </h2>
        <div className="features42-thq-row-elm thq-grid-auto-300">
          <div className="features42-thq-feature1-elm">
            <img
              alt={props.feature1ImageAlt}
              src={props.feature1ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <div className="features42-thq-content-elm1 thq-flex-column">
              <div className="features42-thq-section-title-elm1 thq-flex-column">
                <h3 className="features42-thq-title1-elm thq-heading-3">
                  {props.feature1Title ?? (
                    <Fragment>
                      <span className="features42-text10">
                        <span className="features42-text11">
                          Neuroimaging in Pregnancy
                        </span>
                        <br></br>
                      </span>
                    </Fragment>
                  )}
                </h3>
              </div>
            </div>
          </div>
          <div className="features42-thq-feature2-elm">
            <img
              alt={props.feature2ImageAlt}
              src={props.feature2ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <div className="features42-thq-content-elm2 thq-flex-column">
              <div className="features42-thq-section-title-elm2 thq-flex-column">
                <strong className="features42-thq-title2-elm thq-heading-3">
                  {props.feature2Title ?? (
                    <Fragment>
                      <span className="features42-text13">
                        <span>Perinatal Psychiatry</span>
                        <br></br>
                      </span>
                    </Fragment>
                  )}
                </strong>
              </div>
              <div className="features42-thq-action-elm thq-flex-row"></div>
            </div>
          </div>
          <div className="features42-thq-feature3-elm">
            <img
              alt={props.feature3ImageAlt}
              src={props.feature3ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <div className="features42-thq-content-elm3 thq-flex-column">
              <div className="features42-thq-section-title-elm3 thq-flex-column">
                <strong className="features42-thq-title3-elm thq-heading-3">
                  {props.feature3Title ?? (
                    <Fragment>
                      <span className="features42-text20">
                        <span>Menopause</span>
                        <br></br>
                      </span>
                    </Fragment>
                  )}
                </strong>
              </div>
            </div>
          </div>
          <div className="features42-thq-feature4-elm">
            <img
              alt={props.feature4ImageAlt}
              src={props.feature4ImageSrc}
              className="thq-img-ratio-4-3"
            />
            <div className="features42-thq-content-elm4 thq-flex-column">
              <div className="features42-thq-section-title-elm4 thq-flex-column">
                <strong className="features42-thq-title4-elm thq-heading-3">
                  {props.feature4Title ?? (
                    <Fragment>
                      <span className="features42-text16">
                        <span>Sex Differences</span>
                        <br></br>
                      </span>
                    </Fragment>
                  )}
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features42.defaultProps = {
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1552083974-186346191183?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=600',
  feature3ImageAlt: 'PlaceholderImage1314',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=600',
  feature1Title: undefined,
  feature2ImageAlt: 'image2',
  feature2Title: undefined,
  feature4ImageAlt: 'image 4',
  feature4Title: undefined,
  sectionTitle: undefined,
  feature3Title: undefined,
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI0fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=600',
  feature1ImageAlt: 'image1',
  feature4ImageSrc:
    'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQ0fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=600',
}

Features42.propTypes = {
  feature2ImageSrc: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature1Title: PropTypes.element,
  feature2ImageAlt: PropTypes.string,
  feature2Title: PropTypes.element,
  feature4ImageAlt: PropTypes.string,
  feature4Title: PropTypes.element,
  sectionTitle: PropTypes.element,
  feature3Title: PropTypes.element,
  feature3ImageSrc: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature4ImageSrc: PropTypes.string,
}

export default Features42
