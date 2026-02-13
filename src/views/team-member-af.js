import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './team-member-af.css'

const TeamMemberAF = (props) => {
  return (
    <div className="team-member-af-container1">
      <Helmet>
        <title>Team-Member-AF - Lab Website</title>
        <meta property="og:title" content="Team-Member-AF - Lab Website" />
        <link
          rel="canonical"
          href="https://jaunty-gummy-crow-9dzyq6.teleporthq.app/team-member-af"
        />
      </Helmet>
      <Navigation></Navigation>
      <main className="neuro-page">
        <section
          id="team"
          className="team-member-af-thq-team-section-elm team-section"
        >
          <div className="team-container">
            <h2 className="section-title">Data Analyst</h2>
            <div className="team-member-af-thq-team-card-wrapper-elm team-card-wrapper">
              <article className="team-member-af-thq-member-card-elm member-card">
                <div className="team-member-af-thq-member-info-side-elm member-info-side">
                  <div className="member-header">
                    <h3 className="member-name">
                      <span>Ashley Francisco, B.A.</span>
                      <br></br>
                    </h3>
                    <span className="member-role">
                      <span>Data Analyst</span>
                      <br></br>
                    </span>
                  </div>
                  <div className="member-education">
                    <div className="edu-item">
                      <span className="section-content">
                        <span>B.A., Dartmouth College, 2021</span>
                        <br></br>
                      </span>
                    </div>
                  </div>
                  <p className="team-member-af-thq-section-content-elm2 member-bio section-content">
                    <span>
                      Ashley Francisco is a computer science masters student at
                      the University of Pennsylvania. She obtained her
                      undergraduate degree in Computer Science modified with
                      Neuroscience from Dartmouth College where she also spent
                      her time doing research with the Dartmouth Institute in
                      learning how to use machine learning to predict heart
                      attack readmissions from clinical data. She also completed
                      internships at the University of Pennsylvania that allowed
                      her to use machine learning to predict Alzheimer&apos;s
                      disease states from multi-modal data. Additionally, she
                      worked in industry as a software engineer within the
                      healthcare tech field. Ashley is interested in the
                      intersection of technology and mental health and is
                      currently working as a data analyst for Dr. Sheila
                      Shanmugan&apos;s lab.
                    </span>
                    <br></br>
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>
      <div className="team-member-af-container2">
        <div className="team-member-af-container3">
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
      <div>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default TeamMemberAF
