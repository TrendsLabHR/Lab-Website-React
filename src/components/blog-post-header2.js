import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './blog-post-header2.css'

const BlogPostHeader2 = (props) => {
  return (
    <div
      className={`blog-post-header2-thq-blog-post-header3-elm thq-section-padding ${props.rootClassName} `}
    >
      <div className="blog-post-header2-thq-max-width-elm thq-section-max-width">
        <div className="blog-post-header2-thq-section-title-elm thq-flex-column">
          <div className="blog-post-header2-thq-title-elm thq-flex-column">
            <div className="blog-post-header2-thq-content-elm1"></div>
            <div className="blog-post-header2-thq-content-elm2">
              <h1 className="blog-post-header2-thq-text-elm1 thq-heading-1">
                {props.blogPostTitle ?? (
                  <Fragment>
                    <span className="blog-post-header2-text7">
                      PMADS Project
                    </span>
                  </Fragment>
                )}
              </h1>
              <div className="blog-post-header2-thq-content-elm3">
                <div className="blog-post-header2-thq-author-elm">
                  <span className="blog-post-header2-thq-text-elm2 thq-body-small">
                    <span className="blog-post-header2-text1">
                      The primary purpose of this study is to understand risk
                      factors and mechanisms for underlying the potential
                      development of perinatal mood and anxiety disorders
                      (PMADS) and related symptoms.
                    </span>
                    <br className="blog-post-header2-text2"></br>
                    <br></br>
                  </span>
                </div>
                <div className="blog-post-header2-thq-time-elm">
                  <span className="blog-post-header2-thq-text-elm3 thq-body-small">
                    <span>
                      Click
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="blog-post-header2-text5">Here</span>
                    <span>
                      {' '}
                      to Complete the Screening Form                            
                                                                         
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="blog-post-header2-container">
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className="blog-post-header2-image"
          />
        </div>
      </div>
    </div>
  )
}

BlogPostHeader2.defaultProps = {
  blogPostTitle: undefined,
  imageSrc:
    '/screenshot%202026-01-12%20at%205.10.56%C3%A2%C2%80%C2%AFpm-700w.jpeg',
  imageAlt: 'image',
  rootClassName: '',
}

BlogPostHeader2.propTypes = {
  blogPostTitle: PropTypes.element,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default BlogPostHeader2
