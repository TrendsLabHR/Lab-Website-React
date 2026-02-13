import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './gallery1.css'

const Gallery1 = (props) => {
  return (
    <div className="gallery1-thq-gallery3-elm thq-section-padding">
      <div className="gallery1-thq-max-width-elm thq-section-max-width">
        <div className="gallery1-thq-section-title-elm">
          <h2 className="gallery1-thq-text-elm1 thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="gallery1-text2">
                  Photo Gallery of the Services you provide
                </span>
              </Fragment>
            )}
          </h2>
          <span className="gallery1-thq-text-elm2 thq-body-large">
            {props.content1 ?? (
              <Fragment>
                <span className="gallery1-text1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat. Suspendisse varius enim in
                  eros elementum tristique. Duis cursus, mi quis viverra ornare,
                  eros dolor interdum nulla.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="gallery1-thq-content-elm">
          <div className="gallery1-container1">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="thq-img-ratio-4-3"
            />
          </div>
          <div className="gallery1-container2">
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="thq-img-ratio-4-3"
            />
          </div>
          <div className="gallery1-container3">
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="thq-img-ratio-4-3"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

Gallery1.defaultProps = {
  image3Alt: 'PlaceholderImage1302',
  image2Alt: 'PlaceholderImage1302',
  image3Src:
    'https://images.unsplash.com/photo-1552083974-186346191183?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1400',
  image2Src:
    'https://images.unsplash.com/photo-1574169208507-84376144848b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=1400',
  content1: undefined,
  heading1: undefined,
  image1Src:
    'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=1400',
  image1Alt: 'PlaceholderImage1302',
}

Gallery1.propTypes = {
  image3Alt: PropTypes.string,
  image2Alt: PropTypes.string,
  image3Src: PropTypes.string,
  image2Src: PropTypes.string,
  content1: PropTypes.element,
  heading1: PropTypes.element,
  image1Src: PropTypes.string,
  image1Alt: PropTypes.string,
}

export default Gallery1
