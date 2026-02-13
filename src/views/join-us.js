import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Banner23 from '../components/banner23'
import BlogPostHeader2 from '../components/blog-post-header2'
import Banner14 from '../components/banner14'
import './join-us.css'

const JoinUs = (props) => {
  return (
    <div className="join-us-container">
      <Helmet>
        <title>Join-us - Lab Website</title>
        <meta property="og:title" content="Join-us - Lab Website" />
        <link
          rel="canonical"
          href="https://jaunty-gummy-crow-9dzyq6.teleporthq.app/join-us"
        />
      </Helmet>
      <Banner23
        heading1={
          <Fragment>
            <span className="join-us-text1">Join a Research Study Today!</span>
          </Fragment>
        }
        video1Src="https://videos.pexels.com/video-files/3196602/3196602-hd_1920_1080_25fps.mp4"
      ></Banner23>
      <BlogPostHeader2
        blogPostTitle={
          <Fragment>
            <span className="join-us-text2">PMADS Project</span>
          </Fragment>
        }
        rootClassName="blog-post-header2root-class-name"
      ></BlogPostHeader2>
      <Banner14></Banner14>
    </div>
  )
}

export default JoinUs
