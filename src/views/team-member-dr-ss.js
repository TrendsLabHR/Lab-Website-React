import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './team-member-dr-ss.css'

const TeamMemberDrSS = (props) => {
  return (
    <div className="team-member-dr-ss-container1">
      <Helmet>
        <title>Team-Member-Dr-SS - Lab Website</title>
        <meta property="og:title" content="Team-Member-Dr-SS - Lab Website" />
        <link
          rel="canonical"
          href="https://jaunty-gummy-crow-9dzyq6.teleporthq.app/team-member-dr-ss"
        />
      </Helmet>
      <Navigation></Navigation>
      <main className="neuro-page">
        <section
          id="team"
          className="team-member-dr-ss-thq-team-section-elm team-section"
        >
          <div className="team-container">
            <h2 className="section-title">Lead Investigator</h2>
            <div className="team-member-dr-ss-thq-team-card-wrapper-elm team-card-wrapper">
              <article className="team-member-dr-ss-thq-member-card-elm member-card">
                <div className="team-member-dr-ss-thq-member-info-side-elm member-info-side">
                  <div className="member-header">
                    <h3 className="member-name">
                      <span>Dr. Sheila Shanmugan, M.D., Ph.D.</span>
                      <br></br>
                      Dr. Elena Sterling
                    </h3>
                    <span className="member-role">Principal Investigator</span>
                  </div>
                  <div className="member-education">
                    <div className="edu-item">
                      <span className="section-content">
                        <span>BA, University of Pennsylvania, 2013</span>
                        <br></br>
                        <span>Ph.D., University of Pennsylvania, 2017</span>
                        <br></br>
                        <span>M.D., University of Pennsylvania, 2018</span>
                        Ph.D. in Cognitive Neuroscience, Stanford University
                      </span>
                    </div>
                  </div>
                  <p className="member-bio section-content">
                    <span>Principal Investigator</span>
                    <br></br>
                    <span>
                      Assistant Professor of Psychiatry, Obstetrics/Gynecology,
                      and Radiology
                    </span>
                    <br></br>
                    <span>
                      Director of Research, Penn Center for Women&apos;s
                      Behavioral Wellness
                    </span>
                    <br></br>
                    <span>
                      Reproductive Psychiatrist, Penn Center for Women&apos;s
                      Behavioral Wellness
                    </span>
                    Dr. Sterling leads our research into hormonal influences on
                    neuroplasticity. With over 15 years of experience, her work
                    bridges the gap between endocrinology and functional brain
                    imaging to improve therapeutic outcomes for women globally.
                  </p>
                  <p className="team-member-dr-ss-thq-section-content-elm3 member-bio section-content">
                    <span>
                      Dr. Sheila Shanmugan is an Assistant Professor in the
                      Departments of Psychiatry, Obstetrics/Gynecology, and
                      Radiology at the University of Pennsylvania Perelman
                      School of Medicine. She is also a Reproductive
                      Psychiatrist and is the Director of research at the Penn
                      Center for Women&apos;s Behavioral Wellness. She completed
                      her medical, graduate, and postdoctoral training at Penn.
                      During her PhD, she worked with Dr. Neill Epperson, and
                      during her postdoc, she worked with Dr. Ted Satterthwaite.
                      Dr. Shanmugan&apos;s work leverages multi-modal
                      neuroimaging, clinical data science, and hormone
                      administration paradigms to understand mechanisms
                      underlying sex differences in psychopathology and identify
                      neuroendocrinologic markers of risk vs. resilience for
                      psychiatric disorders. The goal of her work is to use this
                      information to personalize early interventions in
                      reproductive psychiatry. She has received multiple
                      prestigious awards for her research including the NIH
                      Director&apos;s DP5 Early Independence Award, the
                      Burroughs Wellcome Fund Career Award for Medical
                      Scientists, and a Brain and Behavior Research Foundation
                      Young Investigator Award.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      Dr. Shanmugan is also a Reproductive Psychiatrist and her
                      clinical expertise includes perinatal and postpartum
                      psychiatric disorders, perimenopausal mood disorders and
                      cognitive dysfunction, menopausal hormone therapy, and
                      premenstrual dysphoric disorder. She precepts the
                      Women&apos;s Mental Health Clinic at Penn, during which
                      she supervises senior resident physicians who treat
                      patients with hormone-related psychiatric symptoms. She is
                      also a dedicated teacher, and in 2021, she founded
                      Penn&apos;s Women&apos;s Mental Health Certificate
                      Program, a curriculum consisting of clinical experiences,
                      expert mentorship, focused didactics, and research
                      pursuits by which psychiatry residents can obtain
                      specialized training in reproductive psychiatry. She
                      continues to direct and serve as a mentor for this
                      program.
                    </span>
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>
      <div className="team-member-dr-ss-container2">
        <div className="team-member-dr-ss-container3">
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

export default TeamMemberDrSS
