import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './team-member-lp.css'

const TeamMemberLP = (props) => {
  return (
    <div className="team-member-lp-container1">
      <Helmet>
        <title>Team-Member-LP - Lab Website</title>
        <meta property="og:title" content="Team-Member-LP - Lab Website" />
        <link
          rel="canonical"
          href="https://jaunty-gummy-crow-9dzyq6.teleporthq.app/team-member-lp"
        />
      </Helmet>
      <Navigation></Navigation>
      <main className="neuro-page">
        <section
          id="team"
          className="team-member-lp-thq-team-section-elm team-section"
        >
          <div className="team-container">
            <h2 className="section-title">
              <span>Postdoctoral Fellow</span>
              <br></br>
            </h2>
            <div className="team-member-lp-thq-team-card-wrapper-elm team-card-wrapper">
              <article className="team-member-lp-thq-member-card-elm member-card">
                <div className="team-member-lp-thq-member-info-side-elm member-info-side">
                  <div className="member-header">
                    <h3 className="member-name">
                      <span>Dr. Laura Pritschet, Ph.D.</span>
                      <br></br>
                    </h3>
                    <span className="member-role">
                      <span>Postdoctoral Fellow</span>
                      <br></br>
                    </span>
                  </div>
                  <div className="member-education">
                    <div className="edu-item">
                      <span className="section-content">
                        <span>
                          B.S., University of Illinois, Urbana-Champaign, 2017
                        </span>
                        <br></br>
                        <span>
                          Ph.D., University of California, Santa Barbara, 2023
                        </span>
                        <br></br>
                      </span>
                    </div>
                  </div>
                  <p className="team-member-lp-thq-section-content-elm2 member-bio section-content">
                    <span>
                      Laura&apos;s fascination with the brain began as an
                      undergraduate studying psychology at the University of
                      Illinois, Urbana-Champaign, where she was introduced to
                      the field of cognitive neuroscience and human brain
                      imaging. This, paired with her interests in sex
                      differences and women&apos;s health, led her to Dr. Emily
                      Jacobs&apos; lab at the University of California, Santa
                      Barbara. Over the course of her PhD, she designed and led
                      precision imaging studies linking sex steroid hormones to
                      human brain structure and function. Now as a postdoc
                      supported by a National Institutes of Health K00, Laura
                      works to apply advanced computational methods to
                      multi-modal brain imaging data to comprehensively map the
                      brain&apos;s response to critical endocrine transition
                      periods (e.g., puberty, pregnancy, menopause) over the
                      lifespan. Her ultimate pursuit is to establish endocrine
                      drivers of vulnerability for neuropsychiatric and
                      neurodegenerative diseases that disproportionately burden
                      women.
                    </span>
                    <br></br>
                    <br></br>
                    <br></br>
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>
      <div className="team-member-lp-container2">
        <div className="team-member-lp-container3">
          <Script
            html={`<script defer data-name="neuroviva-interactions">
(function(){
  // Parallax effect for hero background
  window.addEventListener("scroll", () => {
    const heroImage = document.querySelector(".hero-bg-image")
    if (heroImage) {
      const scrollValue = window.scrollY
      heroImage.style.transform = \`translateY(\${scrollValue * 0.3}px)\`
    }
  })

  // Staggered reveal for research cards
  const observerOptions = {
    threshold: 0.1,
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const cards = entry.target.querySelectorAll(".pub-card")
        cards.forEach((card, index) => {
          setTimeout(() => {
            card.style.opacity = "1"
            card.style.transform = "translateY(0)"
          }, index * 100)
        })
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  const researchGrid = document.querySelector(".research-grid")
  if (researchGrid) {
    const cards = researchGrid.querySelectorAll(".pub-card")
    cards.forEach((card) => {
      card.style.opacity = "0"
      card.style.transform = "translateY(20px)"
      card.style.transition = "all 0.5s ease-out"
    })
    observer.observe(researchGrid)
  }

  // Horizontal scroll behavior for news rail
  const newsRail = document.querySelector(".news-rail-container")
  if (newsRail) {
    let isDown = false
    let startX
    let scrollLeft

    newsRail.addEventListener("mousedown", (e) => {
      isDown = true
      startX = e.pageX - newsRail.offsetLeft
      scrollLeft = newsRail.scrollLeft
    })

    newsRail.addEventListener("mouseleave", () => {
      isDown = false
    })

    newsRail.addEventListener("mouseup", () => {
      isDown = false
    })

    newsRail.addEventListener("mousemove", (e) => {
      if (!isDown) return
      e.preventDefault()
      const x = e.pageX - newsRail.offsetLeft
      const walk = (x - startX) * 2
      newsRail.scrollLeft = scrollLeft - walk
    })
  }
})()
</script>`}
          ></Script>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default TeamMemberLP
