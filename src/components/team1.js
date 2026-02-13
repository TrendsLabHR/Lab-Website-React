import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './team1.css'

const Team1 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="team1-thq-max-width-elm thq-section-max-width">
        <div className="team1-thq-section-title-elm">
          <div className="team1-thq-content-elm1">
            <h2 className="thq-heading-2 team1-thq-text-elm10">
              {props.heading1 ?? (
                <Fragment>
                  <span className="team1-text20">Meet our team</span>
                </Fragment>
              )}
            </h2>
          </div>
        </div>
        <div className="team1-thq-content-elm2">
          <div className="team1-thq-content-elm3">
            <div className="team1-thq-row-elm">
              <div className="team1-container1">
                <div className="team1-thq-card-elm1">
                  <img
                    alt={props.member1Alt}
                    src={props.member1Src}
                    className="team1-thq-placeholder-image-elm1 thq-img-round thq-img-ratio-1-1"
                  />
                  <div className="team1-thq-content-elm4">
                    <div className="team1-thq-title-elm1">
                      <span className="team1-thq-text-elm11 thq-body-small">
                        {props.member1 ?? (
                          <Fragment>
                            <span className="team1-text11">Full name</span>
                          </Fragment>
                        )}
                      </span>
                      <span className="team1-thq-text-elm12 thq-body-small">
                        {props.member1Job ?? (
                          <Fragment>
                            <span className="team1-text15">Job title</span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <span className="team1-thq-text-elm13 thq-body-small">
                      {props.member1Content ?? (
                        <Fragment>
                          <span className="team1-text10">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse varius enim in eros elementum
                            tristique.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <div className="team1-thq-card-elm2">
                  <img
                    alt={props.member2Alt}
                    src={props.member2Src}
                    className="team1-thq-placeholder-image-elm2 thq-img-round thq-img-ratio-1-1"
                  />
                  <div className="team1-thq-content-elm5">
                    <div className="team1-thq-title-elm2">
                      <span className="team1-thq-text-elm14 thq-body-small">
                        {props.member2 ?? (
                          <Fragment>
                            <span className="team1-text14">Full name</span>
                          </Fragment>
                        )}
                      </span>
                      <span className="team1-thq-text-elm15 thq-body-small">
                        {props.member2Job ?? (
                          <Fragment>
                            <span className="team1-text12">Job title</span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <span className="team1-thq-text-elm16 thq-body-small">
                      {props.member2Content ?? (
                        <Fragment>
                          <span className="team1-text18">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse varius enim in eros elementum
                            tristique.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <div className="team1-container2">
                <div className="team1-thq-card-elm3">
                  <img
                    alt={props.member3Alt}
                    src={props.member3Src}
                    className="team1-thq-placeholder-image-elm3 thq-img-round thq-img-ratio-1-1"
                  />
                  <div className="team1-thq-content-elm6">
                    <div className="team1-thq-title-elm3">
                      <span className="team1-thq-text-elm17 thq-body-small">
                        {props.member3 ?? (
                          <Fragment>
                            <span className="team1-text17">Full name</span>
                          </Fragment>
                        )}
                      </span>
                      <span className="team1-thq-text-elm18 thq-body-small">
                        {props.member3Job ?? (
                          <Fragment>
                            <span className="team1-text21">Job title</span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <span className="team1-thq-text-elm19 thq-body-small">
                      {props.member3Content ?? (
                        <Fragment>
                          <span className="team1-text19">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse varius enim in eros elementum
                            tristique.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <div className="team1-thq-card-elm4">
                  <img
                    alt={props.member4Alt}
                    src={props.member4Src}
                    className="team1-thq-placeholder-image-elm4 thq-img-round thq-img-ratio-1-1"
                  />
                  <div className="team1-thq-content-elm7">
                    <div className="team1-thq-title-elm4">
                      <span className="team1-thq-text-elm20 thq-body-small">
                        {props.member4 ?? (
                          <Fragment>
                            <span className="team1-text16">Full name</span>
                          </Fragment>
                        )}
                      </span>
                      <span className="team1-thq-text-elm21 thq-body-small">
                        {props.member4Job ?? (
                          <Fragment>
                            <span className="team1-text22">Job title</span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <span className="team1-thq-text-elm22 thq-body-small">
                      {props.member4Content ?? (
                        <Fragment>
                          <span className="team1-text13">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse varius enim in eros elementum
                            tristique.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Team1.defaultProps = {
  member2Src:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fHVzZXJ8ZW58MHx8fHwxNzEwOTQyNjEyfDA&ixlib=rb-4.0.3&w=500',
  member1Content: undefined,
  member1: undefined,
  member4Alt: 'Member Alt',
  member4Src:
    'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDV8fHVzZXJ8ZW58MHx8fHwxNzEwOTQyNjEyfDA&ixlib=rb-4.0.3&w=500',
  member2Job: undefined,
  member4Content: undefined,
  member2: undefined,
  member1Job: undefined,
  member4: undefined,
  member3: undefined,
  member3Alt: 'Member Alt',
  member2Content: undefined,
  member1Alt: 'Member Alt',
  member1Src:
    'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fHVzZXJ8ZW58MHx8fHwxNzEwOTQyNjEyfDA&ixlib=rb-4.0.3&w=500',
  member3Content: undefined,
  member3Src:
    'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fHVzZXJ8ZW58MHx8fHwxNzEwOTQyNjEyfDA&ixlib=rb-4.0.3&w=500',
  heading1: undefined,
  member3Job: undefined,
  member2Alt: 'Member Alt',
  member4Job: undefined,
}

Team1.propTypes = {
  member2Src: PropTypes.string,
  member1Content: PropTypes.element,
  member1: PropTypes.element,
  member4Alt: PropTypes.string,
  member4Src: PropTypes.string,
  member2Job: PropTypes.element,
  member4Content: PropTypes.element,
  member2: PropTypes.element,
  member1Job: PropTypes.element,
  member4: PropTypes.element,
  member3: PropTypes.element,
  member3Alt: PropTypes.string,
  member2Content: PropTypes.element,
  member1Alt: PropTypes.string,
  member1Src: PropTypes.string,
  member3Content: PropTypes.element,
  member3Src: PropTypes.string,
  heading1: PropTypes.element,
  member3Job: PropTypes.element,
  member2Alt: PropTypes.string,
  member4Job: PropTypes.element,
}

export default Team1
