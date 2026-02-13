import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Banner1 from '../components/banner1'
import Footer from '../components/footer'
import './team.css'

const Team = (props) => {
  return (
    <div className="team-container1">
      <Helmet>
        <title>Team - Lab Website</title>
        <meta property="og:title" content="Team - Lab Website" />
        <link
          rel="canonical"
          href="https://jaunty-gummy-crow-9dzyq6.teleporthq.app/team"
        />
      </Helmet>
      <Navigation></Navigation>
      <div className="team-container2">
        <div className="team-container3">
          <Banner1
            heading1={
              <Fragment>
                <span className="team-text10">Meet the Team</span>
              </Fragment>
            }
            rootClassName="banner1root-class-name"
          ></Banner1>
        </div>
        <img
          alt="image"
          src="/screenshot%202025-12-29%20at%2010.19.20%C3%A2%C2%80%C2%AFpm-500h.png"
          loading="lazy"
          className="team-image10"
        />
      </div>
      <section className="team-thq-faculty-section-elm faculty-section">
        <div className="container-inner">
          <h2 className="section-title">
            Principal Investigator &amp; Faculty
          </h2>
          <div className="faculty-grid">
            <article className="faculty-card">
              <div className="faculty-image-wrapper">
                <img
                  alt="image"
                  src="/46db66_a537a2b86bad4bbf90123be3b0f5afd5~mv2-200h.jpeg"
                  className="team-image11"
                />
                <img
                  alt="Dr. Elena Vance"
                  src="https://images.pexels.com/photos/5726796/pexels-photo-5726796.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
              </div>
              <div className="faculty-info">
                <h3 className="faculty-name">
                  <span>Sheila Shanmugan, MD, PhD</span>
                  <br></br>
                  Dr. Elena Vance, Ph.D.
                </h3>
                <p className="faculty-role"> Principal Investigator</p>
                <p className="section-content">
                  <span>
                    Director of Research, Penn Center for Women&apos;s
                    Behavioral Wellness
                  </span>
                  <br></br>
                  <br></br>
                </p>
                <div className="faculty-meta">
                  <div className="meta-item">
                    <svg
                      fill="none"
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                      height="18"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle r="3" cx="12" cy="10"></circle>
                    </svg>
                    <span>
                      <span>Richards Research Lab, 5th Floor, Pod A</span>
                      <br></br>
                      Science Building, Room 402
                    </span>
                  </div>
                  <div className="meta-item">
                    <svg
                      fill="none"
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                      height="18"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="4" rx="2" width="20" height="16"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                    <span>sheila.shanmugan@pennmedicine.upenn.edu</span>
                  </div>
                </div>
                <div className="btn-link">
                  <Link to="/team-member-dr-ss" className="team-navlink">
                    Read More
                  </Link>
                </div>
              </div>
            </article>
            <article className="faculty-card">
              <div className="faculty-image-wrapper">
                <img
                  alt="image"
                  src="/2023_lp%20(1)-300h.png"
                  className="team-image13"
                />
                <img
                  alt="Dr. Marcus Thorne"
                  src="https://images.pexels.com/photos/8538868/pexels-photo-8538868.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
              </div>
              <div className="faculty-info">
                <h3 className="faculty-name">
                  <span>Laura Pritschet, PhD</span>
                  <br></br>
                  Dr. Marcus Thorne, M.D., Ph.D.
                </h3>
                <p className="faculty-role">
                  <span>Postdoctoral Fellow</span>
                  <br></br>
                  Associate Professor of Neurology
                </p>
                <p className="section-content">
                  <span>
                    Postdoctoral Research Fellow (Neuroimaging &amp;
                    Computational Neuroscience)
                  </span>
                  <br></br>
                </p>
                <div className="faculty-meta">
                  <div className="meta-item">
                    <svg
                      fill="none"
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                      height="18"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle r="3" cx="12" cy="10"></circle>
                    </svg>
                    <span>Richards Research Lab, 5th Floor, Pod A</span>
                  </div>
                  <div className="meta-item">
                    <svg
                      fill="none"
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                      height="18"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="4" rx="2" width="20" height="16"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                    <span>EMAIL</span>
                  </div>
                </div>
                <a href="#">
                  <div className="btn-link">
                    <span>Read More</span>
                  </div>
                </a>
              </div>
            </article>
            <article className="faculty-card">
              <div className="faculty-image-wrapper">
                <img
                  alt="image"
                  src="/image0-200w.png"
                  className="team-image15"
                />
                <img
                  alt="Dr. Sarah Chen"
                  src="https://images.pexels.com/photos/5726713/pexels-photo-5726713.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
              </div>
              <div className="faculty-info">
                <h3 className="faculty-name">
                  <span>Ashley Francisco, BA</span>
                  <br></br>
                  Dr. Sarah Chen, Ph.D.
                </h3>
                <p className="faculty-role">
                  <span>Data Analyst</span>
                  <br></br>
                  Assistant Professor of Neuroscience
                </p>
                <p className="section-content">
                  Computational Neuroscience &amp; Data Science Specialist
                </p>
                <div className="faculty-meta">
                  <div className="meta-item">
                    <svg
                      fill="none"
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                      height="18"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle r="3" cx="12" cy="10"></circle>
                    </svg>
                    <span>Richards Research Lab, 5th Floor, Pod A</span>
                  </div>
                  <div className="meta-item">
                    <svg
                      fill="none"
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                      height="18"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="4" rx="2" width="20" height="16"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                    <span>EMAIL</span>
                  </div>
                </div>
                <a href="#">
                  <div className="btn-link">
                    <span>Read More</span>
                  </div>
                </a>
              </div>
            </article>
            <article className="faculty-card">
              <div className="faculty-image-wrapper">
                <img
                  alt="image"
                  src="/professionalphoto-1%202-300h.png"
                  className="team-image17"
                />
                <img
                  alt="Dr. Julian Ross"
                  src="https://images.pexels.com/photos/5726705/pexels-photo-5726705.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
              </div>
              <div className="faculty-info">
                <h3 className="faculty-name">
                  <span>Emily Beydler, MD</span>
                  <br></br>
                  Dr. Julian Ross, Ph.D.
                </h3>
                <p className="faculty-role">
                  <span>Psychiatry Resident</span>
                  <br></br>
                  Senior Research Scientist
                </p>
                <p className="section-content">
                  Clinical Psychiatry Specialist – Reproductive Mental Health
                </p>
                <div className="faculty-meta">
                  <div className="meta-item">
                    <svg
                      fill="none"
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                      height="18"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle r="3" cx="12" cy="10"></circle>
                    </svg>
                    <span>Richards Research Lab, 5th Floor, Pod A</span>
                  </div>
                  <div className="meta-item">
                    <svg
                      fill="none"
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                      height="18"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="4" rx="2" width="20" height="16"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                    <span>EMAIL</span>
                  </div>
                </div>
                <a href="#">
                  <div className="btn-link">
                    <span>Read More</span>
                  </div>
                </a>
              </div>
            </article>
            <article className="faculty-card">
              <div className="faculty-image-wrapper">
                <img
                  alt="image"
                  src="/img_3568_edited-1-200w.png"
                  className="team-image19"
                />
                <img
                  alt="Dr. Julian Ross"
                  src="https://images.pexels.com/photos/5726705/pexels-photo-5726705.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
              </div>
              <div className="faculty-info">
                <h3 className="faculty-name">
                  <span>Caroline Hayes, MS</span>
                  <br></br>
                </h3>
                <p className="faculty-role">
                  <span>Clinical Research Coordinator</span>
                  <br></br>
                </p>
                <p className="section-content">
                  Reproductive Mood Disorders Research Specialist
                </p>
                <div className="faculty-meta">
                  <div className="meta-item">
                    <svg
                      fill="none"
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                      height="18"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle r="3" cx="12" cy="10"></circle>
                    </svg>
                    <span>Richards Research Lab, 5th Floor, Pod A</span>
                  </div>
                  <div className="meta-item">
                    <svg
                      fill="none"
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                      height="18"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="4" rx="2" width="20" height="16"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                    <span>Caroline.Hayes@pennmedicine.upenn.edu</span>
                  </div>
                </div>
                <a href="#">
                  <div className="btn-link">
                    <span>Read More</span>
                  </div>
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="team-thq-students-section-elm students-section">
        <div className="team-thq-container-inner-elm2 container-inner">
          <h2 className="section-title">
            {' '}
            Undergraduate Students and Lab Alumni
          </h2>
          <div className="students-grid">
            <div className="student-card">
              <img
                alt="image"
                src="/image_7201-400h.png"
                className="team-image21"
              />
              <div className="student-content">
                <h4 className="student-name">
                  <span>Noemí Rubau Apa</span>
                  <br></br>
                  Aria Montgomery
                </h4>
                <span className="student-role">
                  Undergraduate Senior Research Assistant
                </span>
                <a href="mailto:a.montgomery@neuroviva.edu?subject=">
                  <div className="student-email">
                    <span>Read More</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="student-card">
              <img alt="image" src="/1_720-400w.jpg" className="team-image22" />
              <div className="student-content">
                <h4 className="student-name">Hudah Rana</h4>
                <span className="student-role">
                  Undergraduate Research Assistant
                </span>
                <a href="mailto:l.sterling@neuroviva.edu?subject=">
                  <div className="student-email">
                    <span>Read More</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="student-card">
              <img
                alt="image"
                src="/image_720-400w.png"
                className="team-image23"
              />
              <div className="student-content">
                <h4 className="student-name">Mahima Islam</h4>
                <span className="student-role">
                  Undergraduate Research Assistant
                </span>
                <a href="mailto:s.rodriguez@neuroviva.edu?subject=">
                  <div className="student-email">
                    <span>Read More</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="student-card">
              <img
                alt="image"
                src="/1_720-1-400w.jpg"
                className="team-image24"
              />
              <div className="student-content">
                <h4 className="student-name">Tjaden Litwiler</h4>
                <span className="student-role">
                  Undergraduate Research Assistant
                </span>
                <a href="mailto:d.park@neuroviva.edu?subject=">
                  <div className="student-email">
                    <span>Read More</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="student-card">
              <img
                alt="image"
                src="/image_720-1-400h.png"
                className="team-image25"
              />
              <div className="student-content">
                <h4 className="student-name">
                  <span>Lily Hunter</span>
                  <br></br>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  Maya Gupta
                </h4>
                <span className="student-role">
                  Undergraduate Research Assistant
                </span>
                <a href="mailto:m.gupta@neuroviva.edu?subject=">
                  <div className="student-email">
                    <span>Read More</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="team-thq-student-card-elm6 student-card">
              <img
                alt="image"
                src="/image_720-2-400w.png"
                className="team-image26"
              />
              <div className="student-content">
                <h4 className="student-name">
                  <span>Anuli Okafor</span>
                  <br></br>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  Ethan Clarke
                </h4>
                <span className="student-role">
                  Undergraduate Research Assistant
                </span>
                <a href="mailto:e.clarke@neuroviva.edu?subject=">
                  <div className="student-email">
                    <span>Read More</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <dialog id="contactModal" className="contact-dialog">
        <div className="dialog-content">
          <h3 className="section-subtitle">Inquire About Collaboration</h3>
          <p className="section-content">
            Please provide your details and research interest. Our team will get
            back to you within 48 hours.
          </p>
          <form
            action="/submit"
            method="POST"
            data-form-id="3f7394df-2180-4576-8de7-a1f7340ac89c"
            className="contact-form"
          >
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="true"
                required="true"
                placeholder="Dr. Jane Smith"
                data-form-field-id="name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Institutional Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required="true"
                placeholder="j.smith@university.edu"
                data-form-field-id="email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Research Inquiry</label>
              <textarea
                id="message"
                name="message"
                required="true"
                minlength="20"
                placeholder="Briefly describe your proposed collaboration..."
                data-form-field-id="message"
              ></textarea>
            </div>
            <div className="form-actions">
              <button
                id="closeContactModal"
                name="button"
                type="button"
                data-form-field-id="closeContactModal"
                className="btn-outline"
              >
                Cancel
              </button>
              <button
                id="thq_button_O3Cu"
                name="button"
                type="submit"
                data-form-field-id="thq_button_O3Cu"
                className="btn-primary"
              >
                Send Inquiry
              </button>
            </div>
          </form>
        </div>
      </dialog>
      <div className="team-container4">
        <div className="team-container5">
          <Script
            html={`<script defer data-name="neuroviva-team-interactions">
(function(){
  // Directory Search Functionality
  const searchInput = document.getElementById("directorySearch")
  const directoryBody = document.getElementById("directoryBody")
  const rows = directoryBody.getElementsByTagName("tr")

  searchInput.addEventListener("keyup", function () {
    const filter = searchInput.value.toLowerCase()
    for (let i = 0; i < rows.length; i++) {
      const cells = rows[i].getElementsByTagName("td")
      let found = false
      for (let j = 0; j < cells.length; j++) {
        if (cells[j].innerText.toLowerCase().includes(filter)) {
          found = true
          break
        }
      }
      rows[i].style.display = found ? "" : "none"
    }
  })

  // Role Filtering Logic (Visual Only for Demo)
  const chips = document.querySelectorAll(".hero-chip")
  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      chips.forEach((c) => c.classList.remove("active"))
      chip.classList.add("active")

      const role = chip.getAttribute("data-role")
      // In a real app, this would filter the actual DOM sections
      console.log("Filtering team by role:", role)
    })
  })

  // Modal Functionality
  const contactModal = document.getElementById("contactModal")
  const openModalBtn = document.getElementById("openContactModal")
  const closeModalBtn = document.getElementById("closeContactModal")

  if (openModalBtn && contactModal) {
    openModalBtn.addEventListener("click", () => {
      contactModal.showModal()
    })
  }

  if (closeModalBtn && contactModal) {
    closeModalBtn.addEventListener("click", () => {
      contactModal.close()
    })
  }

  // Close modal on backdrop click
  contactModal.addEventListener("click", (e) => {
    const dialogDimensions = contactModal.getBoundingClientRect()
    if (e.clientX < dialogDimensions.left || e.clientX > dialogDimensions.right || e.clientY < dialogDimensions.top || e.clientY > dialogDimensions.bottom) {
      contactModal.close()
    }
  })

  // Accessibility: Handle Escape key is native to <dialog>, but ensure focus management
  contactModal.addEventListener("close", () => {
    openModalBtn.focus()
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Team
