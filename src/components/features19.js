import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features19.css'

const Features19 = (props) => {
  return (
    <div className="features19-thq-layout349-elm thq-section-padding">
      <div className="features19-thq-max-width-elm thq-section-max-width">
        <div className="features19-thq-image-container-elm">
          <img
            alt={props.imageAlt1}
            src={props.imageSrc1}
            className="features19-image"
          />
        </div>
        <div className="features19-thq-content-elm1">
          <div className="features19-thq-section-title-elm">
            <div className="features19-thq-content-elm2">
              <h2 className="thq-heading-2">
                {props.feature1Title ?? (
                  <Fragment>
                    <span className="features19-text2">
                      Discover the Key Feature #1
                    </span>
                  </Fragment>
                )}
              </h2>
              <p className="thq-body-large">
                {props.feature1Description ?? (
                  <Fragment>
                    <span className="features19-text1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla,
                      ut commodo diam libero vitae erat. Suspendisse varius enim
                      in eros elementum tristique. Duis cursus, mi quis viverra
                      ornare, eros dolor interdum nulla.
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
            <div className="features19-thq-actions-elm"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features19.defaultProps = {
  imageSrc1: '/pnas.2110416119fig04-1-500w.jpg',
  feature1Description: undefined,
  imageAlt1: 'image',
  feature1Title: undefined,
}

Features19.propTypes = {
  imageSrc1: PropTypes.string,
  feature1Description: PropTypes.element,
  imageAlt1: PropTypes.string,
  feature1Title: PropTypes.element,
}

export default Features19
