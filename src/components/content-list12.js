import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './content-list12.css'

const ContentList12 = (props) => {
  return (
    <div className="content-list12-container thq-section-padding">
      <div className="content-list12-thq-max-width-elm thq-section-max-width">
        <div className="content-list12-thq-content-elm thq-flex-column">
          <ul className="content-list12-ul thq-flex-column">
            <li className="thq-flex-column list-item">
              <h2 className="content-list12-thq-heading1-elm thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="content-list12-text18">Prop Content</span>
                  </Fragment>
                )}
              </h2>
              <p className="thq-body-small">
                {props.content1 ?? (
                  <Fragment>
                    <span className="content-list12-text21">Prop Content</span>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3 className="thq-heading-3">
                {props.heading2 ?? (
                  <Fragment>
                    <span className="content-list12-text17">Prop Content</span>
                  </Fragment>
                )}
              </h3>
              <p className="thq-body-small">
                {props.content2 ?? (
                  <Fragment>
                    <span className="content-list12-text16">Prop Content</span>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3 className="thq-heading-3">
                {props.heading3 ?? (
                  <Fragment>
                    <span className="content-list12-text19">Prop Content</span>
                  </Fragment>
                )}
              </h3>
              <p className="thq-body-small">
                {props.content3 ?? (
                  <Fragment>
                    <span className="content-list12-text11">Prop Content</span>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3 className="thq-heading-3">
                {props.heading4 ?? (
                  <Fragment>
                    <span className="content-list12-text13">Prop Content</span>
                  </Fragment>
                )}
              </h3>
              <p className="thq-body-small">
                {props.content4 ?? (
                  <Fragment>
                    <span className="content-list12-text14">Prop Content</span>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3 className="thq-heading-3">
                {props.heading5 ?? (
                  <Fragment>
                    <span className="content-list12-text10">Prop Content</span>
                  </Fragment>
                )}
              </h3>
              <p className="thq-body-small">
                {props.content5 ?? (
                  <Fragment>
                    <span className="content-list12-text12">Prop Content</span>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3 className="thq-heading-3">
                {props.heading6 ?? (
                  <Fragment>
                    <span className="content-list12-text15">Prop Content</span>
                  </Fragment>
                )}
              </h3>
              <p className="thq-body-small">
                {props.content6 ?? (
                  <Fragment>
                    <span className="content-list12-text20">Prop Content</span>
                  </Fragment>
                )}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

ContentList12.defaultProps = {
  heading5: undefined,
  content3: undefined,
  content5: undefined,
  heading4: undefined,
  content4: undefined,
  heading6: undefined,
  content2: undefined,
  heading2: undefined,
  heading1: undefined,
  heading3: undefined,
  content6: undefined,
  content1: undefined,
}

ContentList12.propTypes = {
  heading5: PropTypes.element,
  content3: PropTypes.element,
  content5: PropTypes.element,
  heading4: PropTypes.element,
  content4: PropTypes.element,
  heading6: PropTypes.element,
  content2: PropTypes.element,
  heading2: PropTypes.element,
  heading1: PropTypes.element,
  heading3: PropTypes.element,
  content6: PropTypes.element,
  content1: PropTypes.element,
}

export default ContentList12
