import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features201.css'

const Features201 = (props) => {
  return (
    <div className="features201-thq-layout349-elm thq-section-padding">
      <div className="features201-thq-max-width-elm thq-section-max-width">
        <div className="features201-thq-content-elm1">
          <div className="features201-thq-section-title-elm">
            <div className="features201-thq-content-elm2">
              <h2 className="thq-heading-2">
                {props.feature1Title ?? (
                  <Fragment>
                    <span className="features201-text1">
                      <span>Mapping the Brain Across Pregnancy</span>
                      <br></br>
                    </span>
                  </Fragment>
                )}
              </h2>
              <p className="thq-body-large">
                {props.feature1Description ?? (
                  <Fragment>
                    <span className="features201-text4">
                      <span>
                        Recent groundbreaking studies have revealed that
                        pregnancy shapes the brain. Our work seeks to delineate
                        how brain structure and function change across the
                        gestational window as well as the mechanisms underlying
                        these changes. In pursuit of these answers, we leverage
                        multi-modal neuroimaging, clinical data science,
                        precision functional mapping, and
                        imaging-transcriptomics. To learn more about how to
                        participate in our studies on this topic, click here.
                      </span>
                      <br></br>
                      <br></br>
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
          </div>
        </div>
        <div className="features201-thq-image-container-elm">
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className="features201-image"
          />
        </div>
      </div>
    </div>
  )
}

Features201.defaultProps = {
  feature1Title: undefined,
  feature1Description: undefined,
  imageSrc: '/41593_2024_1741_fig1_html-500w.webp',
  imageAlt: 'image',
}

Features201.propTypes = {
  feature1Title: PropTypes.element,
  feature1Description: PropTypes.element,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default Features201
