import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './hero1.css'

const Hero1 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="hero1-thq-max-width-elm thq-section-max-width">
        <div className="thq-flex-row hero1-thq-container-elm">
          <div className="hero1-thq-column-elm">
            <div className="hero1-thq-content-elm">
              <h1 className="thq-heading-1 hero1-thq-heading1-elm">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="hero1-text1">
                      Engaging hero headline for your website
                    </span>
                  </Fragment>
                )}
              </h1>
              <p className="thq-body-large hero1-thq-content1-elm">
                {props.content1 ?? (
                  <Fragment>
                    <span className="hero1-text2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla,
                      ut commodo diam libero vitae erat.
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
            <div className="hero1-thq-actions-elm"></div>
          </div>
          <div className="hero1-container">
            <img
              alt={props.imageAlt1}
              src={props.imageSrc1}
              className="hero1-image"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

Hero1.defaultProps = {
  imageAlt1: 'image',
  heading1: undefined,
  imageSrc1: '/npp201764f3-600h.jpg',
  content1: undefined,
}

Hero1.propTypes = {
  imageAlt1: PropTypes.string,
  heading1: PropTypes.element,
  imageSrc1: PropTypes.string,
  content1: PropTypes.element,
}

export default Hero1
