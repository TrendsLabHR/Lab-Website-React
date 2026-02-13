import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Banner24 from '../components/banner24'
import BlogPostHeader91 from '../components/blog-post-header91'
import BlogPostHeader92 from '../components/blog-post-header92'
import Banner16 from '../components/banner16'
import './publications.css'

const Publications = (props) => {
  return (
    <div className="publications-container">
      <Helmet>
        <title>Publications - Lab Website</title>
        <meta property="og:title" content="Publications - Lab Website" />
        <link
          rel="canonical"
          href="https://jaunty-gummy-crow-9dzyq6.teleporthq.app/publications"
        />
      </Helmet>
      <Banner24
        action1={
          <Fragment>
            <span className="publications-text10">View All</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="publications-text11">
              Read our Latest research here
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="publications-text12">Publications</span>
          </Fragment>
        }
        video1Src="https://videos.pexels.com/video-files/29184317/12601881_640_360_30fps.mp4"
      ></Banner24>
      <BlogPostHeader91
        date={
          <Fragment>
            <span className="publications-text13">
              <span>Pritschet et al.</span>
              <br></br>
              <span>Science Advances, 2025</span>
              <br></br>
            </span>
          </Fragment>
        }
        articleBody={
          <Fragment>
            <span className="publications-text18">
              <span className="publications-text19">
                Pritschet et al. investigate how precision functional mapping of
                individual-specific brain networks across pregnancy can be
                leveraged to identify neurobiological markers of risk for
                perinatal depression. Their work highlights the potential of
                personalized association network architecture to inform risk
                stratification and guide individualized clinical interventions
                in perinatal mental health
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </Fragment>
        }
        blogPostTitle={
          <Fragment>
            <span className="publications-text21">
              <span className="publications-text22">
                Toward personalized clinical interventions for perinatal
                depression: Leveraging precision functional mapping
              </span>
              <br></br>
            </span>
          </Fragment>
        }
        rootClassName="blog-post-header91root-class-name1"
      ></BlogPostHeader91>
      <BlogPostHeader91
        date={
          <Fragment>
            <span className="publications-text24">
              <span>Keller et al.</span>
              <br></br>
              <span>The British Journal of Psychiatry, 2025</span>
            </span>
          </Fragment>
        }
        articleBody={
          <Fragment>
            <span className="publications-text28">
              <span className="publications-text29">
                Keller et al. investigate whether sex is associated with
                reproducible differences in the spatial organization of
                personalized functional brain networks in youth using precision
                functional mapping in a large, multi-site cohort. They
                demonstrate robust, replicable sex differences concentrated in
                association networks such as the default mode, frontoparietal,
                and ventral attention networks, with implications for
                understanding sex-biased risk for emerging psychiatric disorders
                during adolescence
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </Fragment>
        }
        blogPostTitle={
          <Fragment>
            <span className="publications-text31">
              <span className="publications-text32">
                Reproducible sex differences in personalised functional network
                topography in youth
              </span>
              <br></br>
            </span>
          </Fragment>
        }
        rootClassName="blog-post-header91root-class-name"
      ></BlogPostHeader91>
      <BlogPostHeader92
        date={
          <Fragment>
            <span className="publications-text34">
              <span>Shanmugan et al.</span>
              <br></br>
              <span>Psychoneuroendocrinology, 2017</span>
              <br></br>
            </span>
          </Fragment>
        }
        articleBody={
          <Fragment>
            <span className="publications-text39">
              <span className="publications-text40">
                Shanmugan et al. investigate how adverse childhood experiences
                and experimentally reduced serotonin (via tryptophan depletion)
                shape large-scale functional network connectivity in healthy
                menopausal women using a double-blind, placebo-controlled
                crossover fMRI design. They find that higher childhood adversity
                is associated with lower within-network connectivity across
                large-scale networks, and that tryptophan depletion shows
                evidence of moderating adversity-related connectivity patterns,
                implicating serotonergic mechanisms in menopause-related
                vulnerability to executive difficulties
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </Fragment>
        }
        blogPostTitle={
          <Fragment>
            <span className="publications-text42">
              <span className="publications-text43">
                Impact of Early Life Adversity and Tryptophan Depletion on
                Functional Connectivity in Menopausal Women: A Double-Blind,
                Placebo-Controlled Crossover Study
              </span>
              <br></br>
            </span>
          </Fragment>
        }
      ></BlogPostHeader92>
      <BlogPostHeader92
        date={
          <Fragment>
            <span className="publications-text45">
              <span>Shanmugan et al.</span>
              <br></br>
              <span>Neuropsychopharmacology, 2017</span>
              <br></br>
            </span>
          </Fragment>
        }
        articleBody={
          <Fragment>
            <span className="publications-text50">
              <span className="publications-text51">
                Shanmugan et al. investigate how early life adversity interacts
                with serotonergic function to shape executive system activity
                during menopause using a tryptophan depletion fMRI paradigm.
                They show that childhood adversity moderates dorsolateral
                prefrontal cortex responses to serotonin manipulation in
                hypogonadal women, an effect that is attenuated by estradiol
                treatment, revealing a mechanism by which hormonal loss unmasks
                latent vulnerability in executive circuits
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </Fragment>
        }
        blogPostTitle={
          <Fragment>
            <span className="publications-text53">
              <span className="publications-text54">
                Impact of Tryptophan Depletion on Executive System Function
                during Menopause is Moderated by Childhood Adversity
              </span>
              <br></br>
            </span>
          </Fragment>
        }
        rootClassName="blog-post-header92root-class-name"
      ></BlogPostHeader92>
      <BlogPostHeader92
        date={
          <Fragment>
            <span className="publications-text56">
              <span>Shanmugan et al.</span>
              <br></br>
              <span>Psychoneuroendocrinology, 2021</span>
            </span>
          </Fragment>
        }
        articleBody={
          <Fragment>
            <span className="publications-text60">
              <span className="publications-text61">
                Shanmugan et al. investigate how adverse childhood experiences
                shape dynamic reconfiguration (“flexibility”) of
                executive-relevant functional networks, frontoparietal,
                salience, and default mode, during an n-back working memory task
                in hypogonadal women. They find that higher childhood adversity
                is associated with greater (potentially supra-optimal) network
                flexibility, and that experimentally lowering serotonin via
                tryptophan depletion increases flexibility across groups,
                suggesting enduring adversity-related alterations in network
                dynamics that may be exacerbated by reduced serotonergic tone
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </Fragment>
        }
        blogPostTitle={
          <Fragment>
            <span className="publications-text63">
              <span className="publications-text64">
                Impact of childhood adversity on network reconfiguration
                dynamics during working memory in hypogonadal women
              </span>
              <br></br>
            </span>
          </Fragment>
        }
      ></BlogPostHeader92>
      <Banner16></Banner16>
    </div>
  )
}

export default Publications
