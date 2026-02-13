import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './content-list5.css'

const ContentList5 = (props) => {
  const [isRefundVisible, setIsRefundVisible] = useState(false)
  const [isTermsVisible, setIsTermsVisible] = useState(true)
  const [isPrivacyVisible, setIsPrivacyVisible] = useState(false)
  return (
    <div className="content-list5-container1 thq-section-padding">
      <div className="content-list5-thq-max-width-elm thq-flex-column thq-section-max-width">
        <div className="content-list5-container2 thq-section-max-width thq-flex-row">
          {isTermsVisible === true && (
            <button
              onClick={() => {
                setIsPrivacyVisible(false)
                setIsRefundVisible(false)
                setIsTermsVisible(true)
              }}
              className="thq-button-filled"
            >
              <span>
                {props.button ?? (
                  <Fragment>
                    <span className="content-list5-text32">
                      Terms of service
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
          )}
          {isTermsVisible === false && (
            <button
              onClick={() => {
                setIsRefundVisible(false)
                setIsTermsVisible(true)
                setIsPrivacyVisible(false)
              }}
              className="thq-button-outline"
            >
              <span>
                {props.button ?? (
                  <Fragment>
                    <span className="content-list5-text32">
                      Terms of service
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
          )}
          {isPrivacyVisible === false && (
            <button
              onClick={() => {
                setIsRefundVisible(false)
                setIsTermsVisible(false)
                setIsPrivacyVisible(true)
              }}
              className="thq-button-outline"
            >
              <span>
                {props.button1 ?? (
                  <Fragment>
                    <span className="content-list5-text23">
                      Privacy statement
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
          )}
          {isPrivacyVisible === true && (
            <button
              onClick={() => {
                setIsRefundVisible(false)
                setIsPrivacyVisible(true)
                setIsTermsVisible(false)
              }}
              className="thq-button-filled"
            >
              <span>
                {props.button1 ?? (
                  <Fragment>
                    <span className="content-list5-text23">
                      Privacy statement
                    </span>
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
                    <span className="content-list5-text33">Refund Policy</span>
                  </Fragment>
                )}
              </span>
            </button>
          )}
          {isRefundVisible === true && (
            <button
              onClick={() => {
                setIsTermsVisible(false)
                setIsRefundVisible(true)
                setIsPrivacyVisible(false)
              }}
              className="thq-button-filled"
            >
              <span>
                {props.button2 ?? (
                  <Fragment>
                    <span className="content-list5-text33">Refund Policy</span>
                  </Fragment>
                )}
              </span>
            </button>
          )}
        </div>
        <div className="content-list5-container3 thq-flex-column">
          {isTermsVisible === true && (
            <div className="content-list5-container4">
              <ul className="thq-flex-column">
                <li className="content-list5-li10 thq-flex-column list-item">
                  <h2 className="content-list5-thq-heading7-elm thq-heading-2">
                    {props.heading7 ?? (
                      <Fragment>
                        <span className="content-list5-text16">
                          Prop Content
                        </span>
                      </Fragment>
                    )}
                  </h2>
                  <p className="thq-body-small">
                    {props.content7 ?? (
                      <Fragment>
                        <span className="content-list5-text18">
                          Prop Content
                        </span>
                      </Fragment>
                    )}
                  </p>
                  <ul className="content-list5-ul2 thq-flex-column">
                    <li className="list-item">
                      <h3 className="thq-heading-3">
                        {props.heading8 ?? (
                          <Fragment>
                            <span className="content-list5-text20">
                              Prop Content
                            </span>
                          </Fragment>
                        )}
                      </h3>
                      <p className="thq-body-small">
                        {props.content2 ?? (
                          <Fragment>
                            <span className="content-list5-text28">
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
                            <span className="content-list5-text27">
                              Prop Content
                            </span>
                          </Fragment>
                        )}
                      </h3>
                      <p className="thq-body-small">
                        {props.content9 ?? (
                          <Fragment>
                            <span className="content-list5-text25">
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
            <div className="content-list5-container5">
              <ul className="thq-flex-column">
                <li className="content-list5-li13 thq-flex-column list-item">
                  <h1 className="content-list5-thq-heading1-elm thq-heading-2">
                    {props.heading1 ?? (
                      <Fragment>
                        <span className="content-list5-text41">
                          Prop Content
                        </span>
                      </Fragment>
                    )}
                  </h1>
                  <span className="thq-body-small">
                    {props.content1 ?? (
                      <Fragment>
                        <span className="content-list5-text22">
                          Prop Content
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <ul className="content-list5-ul4 thq-flex-column">
                    <li className="list-item">
                      <h1 className="thq-heading-3">
                        {props.heading2 ?? (
                          <Fragment>
                            <span className="content-list5-text21">
                              Prop Content
                            </span>
                          </Fragment>
                        )}
                      </h1>
                      <p className="thq-body-small">
                        {props.content2 ?? (
                          <Fragment>
                            <span className="content-list5-text28">
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
                            <span className="content-list5-text36">
                              Prop Content
                            </span>
                          </Fragment>
                        )}
                      </h1>
                      <span className="thq-body-small">
                        {props.content3 ?? (
                          <Fragment>
                            <span className="content-list5-text29">
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
                            <span className="content-list5-text35">
                              Prop Content
                            </span>
                          </Fragment>
                        )}
                      </h1>
                      <span className="thq-body-small">
                        {props.content4 ?? (
                          <Fragment>
                            <span className="content-list5-text34">
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
                            <span className="content-list5-text24">
                              Prop Content
                            </span>
                          </Fragment>
                        )}
                      </h1>
                      <span className="thq-body-small">
                        {props.content5 ?? (
                          <Fragment>
                            <span className="content-list5-text31">
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
                            <span className="content-list5-text17">
                              Prop Content
                            </span>
                          </Fragment>
                        )}
                      </h1>
                      <span className="thq-body-small">
                        {props.content6 ?? (
                          <Fragment>
                            <span className="content-list5-text38">
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
            <div className="content-list5-container6">
              <ul className="thq-flex-column">
                <li className="content-list5-li19 thq-flex-column list-item">
                  <h1 className="content-list5-thq-heading10-elm thq-heading-2">
                    {props.heading10 ?? (
                      <Fragment>
                        <span className="content-list5-text40">
                          Prop Content
                        </span>
                      </Fragment>
                    )}
                  </h1>
                  <span className="thq-body-small">
                    {props.content10 ?? (
                      <Fragment>
                        <span className="content-list5-text43">
                          Prop Content
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <ul className="content-list5-ul6 thq-flex-column">
                    <li className="list-item">
                      <h1 className="thq-heading-3">
                        {props.heading11 ?? (
                          <Fragment>
                            <span className="content-list5-text19">
                              Prop Content
                            </span>
                          </Fragment>
                        )}
                      </h1>
                      <span className="thq-body-small">
                        {props.content11 ?? (
                          <Fragment>
                            <span className="content-list5-text42">
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
                            <span className="content-list5-text37">
                              Prop Content
                            </span>
                          </Fragment>
                        )}
                      </h1>
                      <span className="thq-body-small">
                        {props.content12 ?? (
                          <Fragment>
                            <span className="content-list5-text30">
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
                            <span className="content-list5-text39">
                              Prop Content
                            </span>
                          </Fragment>
                        )}
                      </h1>
                      <span className="thq-body-small">
                        {props.content13 ?? (
                          <Fragment>
                            <span className="content-list5-text26">
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

ContentList5.defaultProps = {
  heading7: undefined,
  heading6: undefined,
  content7: undefined,
  heading11: undefined,
  heading8: undefined,
  heading2: undefined,
  content1: undefined,
  button1: undefined,
  heading5: undefined,
  content9: undefined,
  content13: undefined,
  heading9: undefined,
  content2: undefined,
  content3: undefined,
  content12: undefined,
  content5: undefined,
  button: undefined,
  button2: undefined,
  content4: undefined,
  heading4: undefined,
  heading3: undefined,
  heading12: undefined,
  content6: undefined,
  heading13: undefined,
  heading10: undefined,
  heading1: undefined,
  content11: undefined,
  content10: undefined,
}

ContentList5.propTypes = {
  heading7: PropTypes.element,
  heading6: PropTypes.element,
  content7: PropTypes.element,
  heading11: PropTypes.element,
  heading8: PropTypes.element,
  heading2: PropTypes.element,
  content1: PropTypes.element,
  button1: PropTypes.element,
  heading5: PropTypes.element,
  content9: PropTypes.element,
  content13: PropTypes.element,
  heading9: PropTypes.element,
  content2: PropTypes.element,
  content3: PropTypes.element,
  content12: PropTypes.element,
  content5: PropTypes.element,
  button: PropTypes.element,
  button2: PropTypes.element,
  content4: PropTypes.element,
  heading4: PropTypes.element,
  heading3: PropTypes.element,
  heading12: PropTypes.element,
  content6: PropTypes.element,
  heading13: PropTypes.element,
  heading10: PropTypes.element,
  heading1: PropTypes.element,
  content11: PropTypes.element,
  content10: PropTypes.element,
}

export default ContentList5
