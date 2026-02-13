import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Banner25 from '../components/banner25'
import Features201 from '../components/features201'
import Hero6 from '../components/hero6'
import Hero1 from '../components/hero1'
import Features19 from '../components/features19'
import Banner15 from '../components/banner15'
import './our-work.css'

const OurWork = (props) => {
  return (
    <div className="our-work-container">
      <Helmet>
        <title>Our-Work - Lab Website</title>
        <meta property="og:title" content="Our-Work - Lab Website" />
        <link
          rel="canonical"
          href="https://jaunty-gummy-crow-9dzyq6.teleporthq.app/our-work"
        />
      </Helmet>
      <Banner25
        heading1={
          <Fragment>
            <span className="our-work-text10">our Work</span>
          </Fragment>
        }
        video1Src="https://videos.pexels.com/video-files/7089952/7089952-hd_1920_1080_25fps.mp4"
        video1Poster="https://images.pexels.com/videos/7089944/pictures/preview-0.jpeg"
      ></Banner25>
      <Features201
        feature1Title={
          <Fragment>
            <span className="our-work-text11">
              <span className="our-work-text12">
                Mapping the Brain Across Pregnancy
              </span>
              <br></br>
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="our-work-text14">
              <span className="our-work-text15">
                Recent groundbreaking studies have revealed that pregnancy
                shapes the brain. Our work seeks to delineate how brain
                structure and function change across the gestational window as
                well as the mechanisms underlying these changes. In pursuit of
                these answers, we leverage multi-modal neuroimaging, clinical
                data science, precision functional mapping, and
                imaging-transcriptomics. To learn more about how to participate
                in our studies on this topic, click here.
              </span>
              <br className="our-work-text16"></br>
              <br></br>
            </span>
          </Fragment>
        }
      ></Features201>
      <Hero6
        content1={
          <Fragment>
            <span className="our-work-text18">
              <span className="our-work-text19">
                Mental health conditions are a leading cause of
                pregnancy-related deaths. Our work takes two complementary
                approaches to studying mechanisms underlying risk for
                psychiatric symptoms during pregnancy and the postpartum: 1) we
                combine the power of computational data science techniques with
                the massive data resource of the electronic health record and 2)
                we conduct prospective, longitudinal cohort studies with deeply
                characterized samples.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br className="our-work-text20"></br>
              <br></br>
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="our-work-text22">
              <span className="our-work-text23">Perinatal Psychiatry</span>
              <br></br>
            </span>
          </Fragment>
        }
      ></Hero6>
      <Hero1
        content1={
          <Fragment>
            <span className="our-work-text25">
              <span className="our-work-text26">
                During the menopause transition, many women report new or
                worsening cognitive and mood symptoms. Our work in this area,
                including two randomized, double-blind, placebo-controlled
                crossover trials, has led to novel treatment options for women
                with such symptoms. Ongoing work focuses on identifying
                predictors of menopause-related cognitive and mood symptoms and
                response to estrogen therapy in an effort to optimize early
                treatment response.
              </span>
              <br className="our-work-text27"></br>
              <br></br>
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="our-work-text29">
              <span className="our-work-text30">
                Menopausal Cognitive and Mood Symptoms
              </span>
              <br></br>
            </span>
          </Fragment>
        }
      ></Hero1>
      <Features19
        feature1Title={
          <Fragment>
            <span className="our-work-text32">
              <span className="our-work-text33">
                Sex Differences and Developmental Psychopathology
              </span>
              <br></br>
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="our-work-text35">
              <span className="our-work-text36">
                Sex differences in psychiatric disorders are well established
                and frequently emerge during development, but the mechanisms
                underlying such differences are not well defined. Using network
                science and machine learning, we seek to 1) understand how sex
                steroid hormones shape the brain during puberty and 2) link sex
                differences in personalized brain metrics to psychiatric
                symptoms such as anxiety and depression.
              </span>
              <br className="our-work-text37"></br>
              <br></br>
            </span>
          </Fragment>
        }
      ></Features19>
      <Banner15></Banner15>
    </div>
  )
}

export default OurWork
