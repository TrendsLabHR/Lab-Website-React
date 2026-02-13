import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './team-member-ch.css'

const TeamMemberCH = (props) => {
  return (
    <div className="team-member-ch-container1">
      <Helmet>
        <title>Team-Member-CH - Lab Website</title>
        <meta property="og:title" content="Team-Member-CH - Lab Website" />
        <link
          rel="canonical"
          href="https://jaunty-gummy-crow-9dzyq6.teleporthq.app/team-member-ch"
        />
      </Helmet>
      <Navigation></Navigation>
      <main className="neuro-page">
        <section
          id="team"
          className="team-member-ch-thq-team-section-elm team-section"
        >
          <div className="team-container">
            <h2 className="section-title">
              <span>Clinical Research Coordinator</span>
              <br></br>
            </h2>
            <div className="team-member-ch-thq-team-card-wrapper-elm team-card-wrapper">
              <article className="team-member-ch-thq-member-card-elm member-card">
                <div className="team-member-ch-thq-member-info-side-elm member-info-side">
                  <div className="member-header">
                    <h3 className="member-name">
                      <span>Caroline &quot;Caro&quot; Hayes, M.S.</span>
                      <br></br>
                    </h3>
                    <span className="member-role">
                      <span>Clinical Research Coordinator</span>
                      <br></br>
                    </span>
                  </div>
                  <div className="member-education">
                    <div className="edu-item">
                      <span className="section-content">
                        <span>B.A., NYU</span>
                        <br></br>
                        <span>M.S., Drexel University</span>
                        <br></br>
                      </span>
                    </div>
                  </div>
                  <p className="team-member-ch-thq-section-content-elm2 member-bio section-content">
                    <span>
                      Caroline &quot;Caro&quot; Hayes is the TReNDS Lab CRC. She
                      is most inspired by research that aims to elucidate
                      reproductive factors in the development and treatment of
                      mood disorders, and hopes to one day earn a PhD in
                      Clinical Psychology. Prior to working with Dr. Shanmugan,
                      Caro was a member of the Geller Women&apos;s Health
                      Psychology Lab at Drexel University.
                    </span>
                    <br></br>
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>
      <div className="team-member-ch-container2">
        <div className="team-member-ch-container3">
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

export default TeamMemberCH
