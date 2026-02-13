import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './blog-post-header92.css'

const BlogPostHeader92 = (props) => {
  return (
    <div
      className={`blog-post-header92-thq-blog-post-header3-elm thq-section-padding ${props.rootClassName} `}
    >
      <div className="blog-post-header92-thq-max-width-elm thq-section-max-width">
        <span className="blog-post-header92-thq-date-elm thq-body-small">
          {props.date ?? (
            <Fragment>
              <span className="blog-post-header92-text2">23 March 2024</span>
            </Fragment>
          )}
        </span>
        <div className="thq-card thq-flex-column">
          <h1 className="thq-heading-1 blog-post-header92-thq-text-elm">
            {props.blogPostTitle ?? (
              <Fragment>
                <span className="blog-post-header92-text3">
                  Awesome Blog Header
                </span>
              </Fragment>
            )}
          </h1>
          <div className="thq-divider-horizontal"></div>
          <span className="blog-post-header92-text1 thq-body-small">
            {props.articleBody ?? (
              <Fragment>
                <span className="blog-post-header92-text4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </span>
              </Fragment>
            )}
          </span>
          <button
            type="button"
            className="blog-post-header92-button thq-button-flat"
          >
            <a
              href="https://pubmed.ncbi.nlm.nih.gov/32563173/"
              target="_blank"
              rel="noreferrer noopener"
              className="blog-post-header92-link thq-body-small"
            >
              Read more
            </a>
            <svg viewBox="0 0 1024 1024" className="thq-icon-small">
              <path d="M426 256l256 256-256 256-60-60 196-196-196-196z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

BlogPostHeader92.defaultProps = {
  rootClassName: '',
  date: undefined,
  blogPostTitle: undefined,
  articleBody: undefined,
}

BlogPostHeader92.propTypes = {
  rootClassName: PropTypes.string,
  date: PropTypes.element,
  blogPostTitle: PropTypes.element,
  articleBody: PropTypes.element,
}

export default BlogPostHeader92
