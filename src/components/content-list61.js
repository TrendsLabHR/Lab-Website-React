import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './content-list61.css'

const ContentList61 = (props) => {
  const [isTermsVisible, setIsTermsVisible] = useState(true)
  const [isRefundVisible, setIsRefundVisible] = useState(false)
  const [isPrivacyVisible, setIsPrivacyVisible] = useState(false)
  return (
    <div className="content-list61-container1 thq-section-padding">
      <div className="content-list61-thq-max-width-elm thq-section-max-width">
        <div className="content-list61-container2 thq-flex-column">
          {isTermsVisible === true && (
            <button
              onClick={() => {
                setIsRefundVisible(false)
                setIsTermsVisible(true)
                setIsPrivacyVisible(false)
              }}
              className="thq-button-filled"
            >
              <span>
                {props.button ?? (
                  <Fragment>
                    <span className="content-list61-text23">Prop Content</span>
                  </Fragment>
                )}
              </span>
            </button>
          )}
          {isTermsVisible === false && (
            <button
              onClick={() => {
                setIsPrivacyVisible(false)
                setIsRefundVisible(false)
                setIsTermsVisible(true)
              }}
              className="thq-button-outline"
            >
              <span>
                {props.button ?? (
                  <Fragment>
                    <span className="content-list61-text23">Prop Content</span>
                  </Fragment>
                )}
              </span>
            </button>
          )}
          {isPrivacyVisible === false && (
            <button
              onClick={() => {
                setIsTermsVisible(false)
                setIsPrivacyVisible(true)
                setIsRefundVisible(false)
              }}
              className="thq-button-outline"
            >
              <span>
                {props.button1 ?? (
                  <Fragment>
                    <span className="content-list61-text22">Prop Content</span>
                  </Fragment>
                )}
              </span>
            </button>
          )}
          {isPrivacyVisible === true && (
            <button
              onClick={() => {
                setIsTermsVisible(false)
                setIsRefundVisible(false)
                setIsPrivacyVisible(true)
              }}
              className="thq-button-filled"
            >
              <span>
                {props.button1 ?? (
                  <Fragment>
                    <span className="content-list61-text22">Prop Content</span>
                  </Fragment>
                )}
              </span>
            </button>
          )}
          {isRefundVisible === false && (
            <button
              onClick={() => {
                setIsRefundVisible(true)
                setIsPrivacyVisible(false)
                setIsTermsVisible(false)
              }}
              className="thq-button-outline"
            >
              <span>
                {props.button2 ?? (
                  <Fragment>
                    <span className="content-list61-text20">Prop Content</span>
                  </Fragment>
                )}
              </span>
            </button>
          )}
          {isRefundVisible === true && (
            <button
              onClick={() => {
                setIsRefundVisible(true)
                setIsTermsVisible(false)
                setIsPrivacyVisible(false)
              }}
              className="thq-button-filled"
            >
              <span>
                {props.button2 ?? (
                  <Fragment>
                    <span className="content-list61-text20">Prop Content</span>
                  </Fragment>
                )}
              </span>
            </button>
          )}
        </div>
        <div className="content-list61-container3 thq-flex-column">
          {isTermsVisible === true && (
            <div className="content-list61-container4">
              <ul className="content-list61-ul1 thq-flex-column">
                <li className="content-list61-li10 thq-flex-column list-item">
                  <h2 className="content-list61-thq-heading7-elm thq-heading-2">
                    {props.heading7 ?? (
                      <Fragment>
                        <span className="content-list61-text16">
                          Prop Content
                        </span>
                      </Fragment>
                    )}
                  </h2>
                  <p className="thq-body-small">
                    {props.content7 ?? (
                      <Fragment>
                        <span className="content-list61-text29">
                          Prop Content
                        </span>
                      </Fragment>
                    )}
                  </p>
                  <ul className="content-list61-ul2 thq-flex-column">
                    <li className="list-item">
                      <h3 className="thq-heading-3">
                        {props.heading8 ?? (
                          <Fragment>
                            <span className="content-list61-text33">
                              Prop Content
                            </span>
                          </Fragment>
                        )}
                      </h3>
                      <p className="thq-body-small">
                        {props.content2 ?? (
                          <Fragment>
                            <span className="content-list61-text38">
                              Prop Content
                            </span>
                          </Fragment>
                        )}
                      </p>
                    </li>
                    <li className="list-item">
                      <h3 className="thq-heading-3">
                        {props.heading9 ?? (
                          <Fragment>
                            <span className="content-list61-text40">
                              Prop Content
                            </span>
                          </Fragment>
                        )}
                      </h3>
                      <p className="thq-body-small">
                        {props.content9 ?? (
                          <Fragment>
                            <span className="content-list61-text21">
                              Prop Content
                            </span>
                          </Fragment>
                        )}
                      </p>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          )}
          {isPrivacyVisible === true && (
            <div className="content-list61-container5">
              <ul className="thq-flex-column">
                <li className="content-list61-li13 thq-flex-column list-item">
                  <h1 className="content-list61-thq-heading1-elm thq-heading-2">
                    {props.heading1 ?? (
                      <Fragment>
                        <span className="content-list61-text31">
                          Prop Content
                        </span>
                      </Fragment>
                    )}
                  </h1>
                  <span className="thq-body-small">
                    {props.content1 ?? (
                      <Fragment>
                        <span className="content-list61-text26">
                          Prop Content
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <ul className="content-list61-ul4 thq-flex-column">
                    <li className="list-item">
                      <h1 className="thq-heading-3">
                        {props.heading2 ?? (
                          <Fragment>
                            <span className="content-list61-text41">
                              Prop Content
                            </span>
                          </Fragment>
                        )}
                      </h1>
                      <p className="thq-body-small">
                        {props.content2 ?? (
                          <Fragment>
                            <span className="content-list61-text38">
                              Prop Content
                            </span>
                          </Fragment>
                        )}
                      </p>
                    </li>
                    <li className="list-item">
                      <h1 className="thq-heading-3">
                        {props.heading3 ?? (
                          <Fragment>
                            <span className="content-list61-text25">
                              Prop Content
                            </span>
                          </Fragment>
                        )}
                      </h1>
                      <span className="thq-body-small">
                        {props.content3 ?? (
                          <Fragment>
                            <span className="content-list61-text28">
                              Prop Content
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </li>
                    <li className="list-item">
                      <h1 className="thq-heading-3">
                        {props.heading4 ?? (
                          <Fragment>
                            <span className="content-list61-text43">
                              Prop Content
                            </span>
                          </Fragment>
                        )}
                      </h1>
                      <span className="thq-body-small">
                        {props.content4 ?? (
                          <Fragment>
                            <span className="content-list61-text17">
                              Prop Content
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </li>
                    <li className="list-item">
                      <h1 className="thq-heading-3">
                        {props.heading5 ?? (
                          <Fragment>
                            <span className="content-list61-text24">
                              Prop Content
                            </span>
                          </Fragment>
                        )}
                      </h1>
                      <span className="thq-body-small">
                        {props.content5 ?? (
                          <Fragment>
                            <span className="content-list61-text27">
                              Prop Content
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </li>
                    <li className="list-item">
                      <h1 className="thq-heading-3">
                        {props.heading6 ?? (
                          <Fragment>
                            <span className="content-list61-text35">
                              Prop Content
                            </span>
                          </Fragment>
                        )}
                      </h1>
                      <span className="thq-body-small">
                        {props.content6 ?? (
                          <Fragment>
                            <span className="content-list61-text42">
                              Prop Content
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          )}
          {isRefundVisible === true && (
            <div className="content-list61-container6">
              <ul className="content-list61-ul5 thq-flex-column">
                <li className="content-list61-li19 thq-flex-column list-item">
                  <h1 className="content-list61-thq-heading10-elm thq-heading-2">
                    {props.heading10 ?? (
                      <Fragment>
                        <span className="content-list61-text19">
                          Prop Content
                        </span>
                      </Fragment>
                    )}
                  </h1>
                  <span className="thq-body-small">
                    {props.content10 ?? (
                      <Fragment>
                        <span className="content-list61-text32">
                          Prop Content
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <ul className="content-list61-ul6 thq-flex-column">
                    <li className="list-item">
                      <h1 className="thq-heading-3">
                        {props.heading11 ?? (
                          <Fragment>
                            <span className="content-list61-text34">
                              Prop Content
                            </span>
                          </Fragment>
                        )}
                      </h1>
                      <span className="thq-body-small">
                        {props.content11 ?? (
                          <Fragment>
                            <span className="content-list61-text30">
                              Prop Content
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </li>
                    <li className="list-item">
                      <h1 className="thq-heading-3">
                        {props.heading12 ?? (
                          <Fragment>
                            <span className="content-list61-text39">
                              Prop Content
                            </span>
                          </Fragment>
                        )}
                      </h1>
                      <span className="thq-body-small">
                        {props.content12 ?? (
                          <Fragment>
                            <span className="content-list61-text37">
                              Prop Content
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </li>
                    <li className="list-item">
                      <h1 className="thq-heading-3">
                        {props.heading13 ?? (
                          <Fragment>
                            <span className="content-list61-text18">
                              Prop Content
                            </span>
                          </Fragment>
                        )}
                      </h1>
                      <span className="thq-body-small">
                        {props.content13 ?? (
                          <Fragment>
                            <span className="content-list61-text36">
                              Prop Content
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

ContentList61.defaultProps = {
  heading7: undefined,
  content4: undefined,
  heading13: undefined,
  heading10: undefined,
  button2: undefined,
  content9: undefined,
  button1: undefined,
  button: undefined,
  heading5: undefined,
  heading3: undefined,
  content1: undefined,
  content5: undefined,
  content3: undefined,
  content7: undefined,
  content11: undefined,
  heading1: undefined,
  content10: undefined,
  heading8: undefined,
  heading11: undefined,
  heading6: undefined,
  content13: undefined,
  content12: undefined,
  content2: undefined,
  heading12: undefined,
  heading9: undefined,
  heading2: undefined,
  content6: undefined,
  heading4: undefined,
}

ContentList61.propTypes = {
  heading7: PropTypes.element,
  content4: PropTypes.element,
  heading13: PropTypes.element,
  heading10: PropTypes.element,
  button2: PropTypes.element,
  content9: PropTypes.element,
  button1: PropTypes.element,
  button: PropTypes.element,
  heading5: PropTypes.element,
  heading3: PropTypes.element,
  content1: PropTypes.element,
  content5: PropTypes.element,
  content3: PropTypes.element,
  content7: PropTypes.element,
  content11: PropTypes.element,
  heading1: PropTypes.element,
  content10: PropTypes.element,
  heading8: PropTypes.element,
  heading11: PropTypes.element,
  heading6: PropTypes.element,
  content13: PropTypes.element,
  content12: PropTypes.element,
  content2: PropTypes.element,
  heading12: PropTypes.element,
  heading9: PropTypes.element,
  heading2: PropTypes.element,
  content6: PropTypes.element,
  heading4: PropTypes.element,
}

export default ContentList61
