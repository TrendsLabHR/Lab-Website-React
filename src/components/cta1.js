import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './cta1.css'

const CTA1 = (props) => {
  return (
    <div className="cta1-container thq-section-padding">
      <div className="cta1-thq-max-width-elm thq-section-max-width">
        <div className="cta1-thq-content-elm">
          <h2 className="cta1-thq-heading1-elm thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="cta1-text2">
                  Call to action that excites the visitor to try your product
                </span>
              </Fragment>
            )}
          </h2>
          <p className="cta1-thq-content1-elm thq-body-large">
            {props.content1 ?? (
              <Fragment>
                <span className="cta1-text4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat.
                </span>
              </Fragment>
            )}
          </p>
          <div className="cta1-thq-actions-elm">
            <button className="thq-button-filled cta1-thq-button-elm1">
              <span className="cta1-thq-action1-elm thq-body-small">
                {props.action1 ?? (
                  <Fragment>
                    <span className="cta1-text3">Main action</span>
                  </Fragment>
                )}
              </span>
            </button>
            <button className="thq-button-outline cta1-thq-button-elm2">
              <span className="cta1-thq-action2-elm thq-body-small">
                {props.action2 ?? (
                  <Fragment>
                    <span className="cta1-text1">Secondary action</span>
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

CTA1.defaultProps = {
  action2: undefined,
  heading1: undefined,
  action1: undefined,
  content1: undefined,
}

CTA1.propTypes = {
  action2: PropTypes.element,
  heading1: PropTypes.element,
  action1: PropTypes.element,
  content1: PropTypes.element,
}

export default CTA1
