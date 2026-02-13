import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './hero6.css'

const Hero6 = (props) => {
  return (
    <div className="hero6-thq-header19-elm thq-section-padding">
      <div className="hero6-container">
        <div className="hero6-thq-image-frame-inner-elm image-frame-inner">
          <div className="image-frame-border"></div>
          <img
            alt={props.imageAlt4}
            src={props.imageSrc4}
            className="hero6-image"
          />
        </div>
      </div>
      <div className="hero6-thq-max-width-elm thq-section-max-width thq-flex-row">
        <div className="hero6-thq-column-elm">
          <h1 className="thq-heading-1 hero6-thq-text-elm1">
            {props.heading1 ?? (
              <Fragment>
                <span className="hero6-text5">
                  <span>Perinatal Psychiatry</span>
                  <br></br>
                </span>
              </Fragment>
            )}
          </h1>
          <div className="hero6-thq-content-elm">
            <p className="hero6-thq-text-elm2 thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="hero6-text1">
                    <span>
                      Mental health conditions are a leading cause of
                      pregnancy-related deaths. Our work takes two complementary
                      approaches to studying mechanisms underlying risk for
                      psychiatric symptoms during pregnancy and the postpartum:
                      1) we combine the power of computational data science
                      techniques with the massive data resource of the
                      electronic health record and 2) we conduct prospective,
                      longitudinal cohort studies with deeply characterized
                      samples.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <br></br>
                  </span>
                </Fragment>
              )}
            </p>
            <div className="hero6-thq-actions-elm"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

Hero6.defaultProps = {
  content1: undefined,
  heading1: undefined,
  imageAlt4: 'image',
  imageSrc4: '/sciadv.adt8104-f1-500h.jpg',
}

Hero6.propTypes = {
  content1: PropTypes.element,
  heading1: PropTypes.element,
  imageAlt4: PropTypes.string,
  imageSrc4: PropTypes.string,
}

export default Hero6
