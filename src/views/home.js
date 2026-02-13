import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>Lab Website</title>
        <meta property="og:title" content="Lab Website" />
        <link
          rel="canonical"
          href="https://jaunty-gummy-crow-9dzyq6.teleporthq.app/"
        />
      </Helmet>
      <Navigation></Navigation>
      <section className="hero-section">
        <div className="hero-media-container">
          <img
            alt="Detailed brain MRI scan for neuroscience research"
            src="https://images.pexels.com/photos/7089331/pexels-photo-7089331.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
            className="hero-background-image"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="home-thq-hero-content-wrapper-elm hero-content-wrapper">
          <div className="hero-text-block">
            <h1 className="home-thq-hero-title-elm home-hero-title hero-title">
              <span className="home-text10">
                Translational Reproductive Neuropsychiatry and Data Science Lab
              </span>
              <br></br>
              Advancing Women&apos;s Brain Health Through Science
            </h1>
            <p className="home-thq-hero-subtitle-elm hero-subtitle home-hero-subtitle">
              PI Dr. Sheila Shanmugan
            </p>
            <div className="hero-cta-group">
              <a href="#research">
                <div className="btn-primary btn-lg btn">
                  <span className="home-text12">Explore Our Research</span>
                </div>
              </a>
              <a href="#participate">
                <div className="btn-lg btn-outline btn">
                  <span className="home-text13">Join a Study</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="quick-links-section">
        <div className="section-container">
          <h2 className="section-title">Explore Our Lab</h2>
          <div className="home-thq-links-grid-elm links-grid">
            <div className="link-card">
              <div className="link-icon-box">
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewbox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle r="4" cx="9" cy="7"></circle>
                  <path d="M19 8v6m3-3h-6"></path>
                </svg>
              </div>
              <h3 className="section-subtitle">Team &amp; Members</h3>
              <p className="section-content">
                Meet the dedicated researchers, clinicians, and students driving
                our mission forward.
              </p>
              <a href="#">
                <div className="btn-link">
                  <span>View Team</span>
                </div>
              </a>
            </div>
            <div className="link-card">
              <div className="link-icon-box">
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewbox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"></path>
                  <path d="M8.62 9.8A2.25 2.25 0 1 1 12 6.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0z"></path>
                </svg>
              </div>
              <h3 className="section-subtitle">Research &amp; Publications</h3>
              <p className="section-content">
                Browse our latest findings and high-impact contributions to
                neuroscience.
              </p>
              <a href="#">
                <div className="btn-link">
                  <span>Read Papers</span>
                </div>
              </a>
            </div>
            <div className="link-card">
              <div className="link-icon-box">
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewbox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m14.45 13.39l5.05-4.694C20.196 8 21 6.85 21 5.75a2.75 2.75 0 0 0-4.797-1.837a.276.276 0 0 1-.406 0A2.75 2.75 0 0 0 11 5.75c0 1.2.802 2.248 1.5 2.946L16 11.95M2 15l6 6"></path>
                  <path d="m7 20l1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a1 1 0 0 0-2.75-2.91"></path>
                </svg>
              </div>
              <h3 className="section-subtitle">Participation</h3>
              <p className="section-content">
                Learn how you can contribute to science by joining our ongoing
                clinical studies.
              </p>
              <a href="#">
                <div className="btn-link">
                  <span>Join Us</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="about-section">
        <div className="section-container">
          <h2 className="section-title">
            Bridging the Gender Gap in Neuroscience
          </h2>
          <div className="about-grid">
            <div className="about-column">
              <h3 className="section-subtitle">Our Mission</h3>
              <p className="section-content">
                We aim to define the neurobiological markers of women&apos;s
                health. By investigating how hormonal transitions and
                environmental factors shape the female brain, we provide
                critical insights for personalized medicine.
              </p>
            </div>
            <div className="about-column">
              <h3 className="section-subtitle">Research Themes</h3>
              <p className="section-content">
                Our core themes include endocrine-brain interactions,
                neuroplasticity during pregnancy, and the impact of menopause on
                cognitive resilience and long-term brain health outcomes.
              </p>
            </div>
            <div className="about-column">
              <h3 className="section-subtitle">Methods &amp; Impact</h3>
              <p className="section-content">
                Utilizing high-resolution fMRI, DTI, and advanced biochemical
                assays, we translate bench-side discoveries into clinical
                strategies that improve the lives of women globally.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="news-timeline-section">
        <div className="section-container">
          <h2 className="home-thq-section-title-elm3 section-title">
            Lab News &amp; Events
          </h2>
          <div className="timeline-container">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <span className="timeline-date">December 01, 2025</span>
                <h3 className="section-subtitle">WHAM Grant Awarded</h3>
                <p className="section-content">
                  Congratulations to Dr. Laura Pritschet for receiving the WHAM
                  grant! 
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <span className="timeline-date">December 01, 2025</span>
                <h3 className="section-subtitle"> Poster Presentation</h3>
                <p className="section-content">
                  <span>
                    Caro Hayes and Noemí Rubau Apa presented the PMADS poster!
                  </span>
                  <br></br>
                  Graduate students presented three posters at the Society for
                  Neuroscience (SfN) conference in Chicago.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <span className="timeline-date">December 01, 2025</span>
                <h3 className="section-subtitle">Lucid Award </h3>
                <p className="section-content">
                  Congratulations to Noemí for receiving the Lucid Award!
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <span className="timeline-date">
                  <span>Mar 20, 2025</span>
                  <br></br>
                  July 20, 2024
                </span>
                <h3 className="section-subtitle">
                  <span>
                    Predicting Perinatal Depression: A Podcast Interview with
                    Dr. Shanmugan
                  </span>
                  <br></br>
                </h3>
                <p className="section-content">
                  <span>
                    One in five women face a perinatal mood disorder during or
                    after pregnancy. On the &quot;Making Sense of
                    Pregnancy&quot; podcast, Dr. Shanmugan shares how new brain
                    imaging tools may help us better predict who is most at
                    risk—paving the way for more personalized and supportive
                    care in the future. Listen to the full episode
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <a
                    href="https://podcasts.apple.com/us/podcast/predicting-perinatal-depression-the-future-of/id1779600854?i=1000699780893"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link6"
                  >
                    HERE
                  </a>
                  <span>
                    .
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
      <div className="home-container2">
        <div className="home-container3">
          <Script
            html={`<script defer data-name="neuroviva-animations">
(function(){
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const revealOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        revealOnScroll.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const elementsToAnimate = document.querySelectorAll('.link-card, .pub-card, .timeline-item, .stat-item');
  
  elementsToAnimate.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    revealOnScroll.observe(el);
  });
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Home
