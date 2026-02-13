import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './team-member-eb.css'

const TeamMemberEb = (props) => {
  return (
    <div className="team-member-eb-container1">
      <Helmet>
        <title>Team-Member-eb - Lab Website</title>
        <meta property="og:title" content="Team-Member-eb - Lab Website" />
        <link
          rel="canonical"
          href="https://jaunty-gummy-crow-9dzyq6.teleporthq.app/team-member-eb"
        />
      </Helmet>
      <Navigation></Navigation>
      <main className="neuro-page">
        <section
          id="team"
          className="team-member-eb-thq-team-section-elm team-section"
        >
          <div className="team-container">
            <h2 className="section-title">
              <span>Psychiatry Resident</span>
              <br></br>
            </h2>
            <div className="team-member-eb-thq-team-card-wrapper-elm team-card-wrapper">
              <article className="team-member-eb-thq-member-card-elm member-card">
                <div className="team-member-eb-thq-member-info-side-elm member-info-side">
                  <div className="member-header">
                    <h3 className="member-name">
                      <span>Dr. Emily Beydler, M.D.</span>
                      <br></br>
                    </h3>
                    <span className="member-role">
                      <span>Psychiatry Resident</span>
                      <br></br>
                    </span>
                  </div>
                  <div className="member-education">
                    <div className="edu-item">
                      <span className="section-content">
                        <span>B.S., The College of William and Mary, 2017</span>
                        <br></br>
                        <span>
                          M.D., University of Florida College of Medicine, 2023
                        </span>
                        <br></br>
                      </span>
                    </div>
                  </div>
                  <p className="team-member-eb-thq-section-content-elm2 member-bio section-content">
                    <span>
                      Emily Beydler (she/her) is a PGY2 psychiatry resident at
                      the University of Pennsylvania. Prior to earning her M.D.
                      at the University of Florida College of Medicine, she
                      studied neuroscience and biochemistry at The College of
                      William and Mary. She spent her gap years as a research
                      fellow at the National Institute of Mental Health, where
                      she studied circuit-based and neurosteroid therapeutics
                      for anxiety disorders. As a medical student, she
                      recognized her passion for caring for patients across the
                      reproductive lifespan. Her interests lie at the
                      intersection of neuropsychiatry and reproductive
                      psychiatry, with a particular focus on pre-clinical
                      markers of postpartum depression.
                    </span>
                    <br></br>
                    <br></br>
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>
      <div className="team-member-eb-container2">
        <div className="team-member-eb-container3">
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

export default TeamMemberEb
