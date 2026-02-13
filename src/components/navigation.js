import React from 'react'

import Script from 'dangerous-html/react'

import './navigation.css'

const Navigation = (props) => {
  return (
    <div className="navigation-container1">
      <div className="navigation-container2">
        <div className="navigation-container3">
          <Script
            html={`<style>
@media (prefers-reduced-motion: reduce) {
.navigation-link::after, .navigation-overlay-link, .navigation-mobile-overlay.is-active {
  transition: none;
  animation: none;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <nav className="navigation-wrapper">
        <div className="navigation-thq-navigation-container-elm navigation-container">
          <a href="/">
            <div aria-label="NeuroViva Lab - Home" className="navigation-logo">
              <div className="navigation-logo-icon">
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <g
                    fill="none"
                    color="currentColor"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4.222 21.995v-3.55c0-1.271-.333-1.932-.987-3.037A8.888 8.888 0 0 1 10.889 2a8.89 8.89 0 0 1 8.889 8.887c0 .58 0 .87.024 1.032c.058.388.24.722.417 1.068L22 16.441l-1.4.7c-.405.202-.608.303-.749.49s-.181.399-.26.82l-.008.042c-.183.968-.384 2.036-.95 2.71c-.2.237-.448.43-.727.567c-.461.225-1.028.225-2.162.225c-.525 0-1.051.012-1.576 0c-1.243-.031-2.168-1.077-2.168-2.29"></path>
                    <path d="M14.388 10.532c-.426 0-.815-.162-1.11-.427m1.11.426c0 1.146-.664 2.235-1.942 2.235S10.504 13.854 10.504 15m3.884-4.469c2.15 0 2.15-3.35 0-3.35q-.294.001-.557.095c.105-2.498-3.496-3.176-4.312-.836m.985 1.857c0-.774-.39-1.456-.985-1.857m0 0c-1.852-1.25-4.32.993-3.146 2.993c-1.97.295-1.76 3.333.247 3.333a1.66 1.66 0 0 0 1.362-.712"></path>
                  </g>
                </svg>
              </div>
              <span className="navigation-thq-section-title-elm1 section-title">
                TReNDS Lab
              </span>
            </div>
          </a>
          <div className="navigation-desktop-menu">
            <ul className="navigation-links-list">
              <li>
                <a href="/">
                  <div className="navigation-link">
                    <span className="navigation-text10">About Us</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="/">
                  <div className="navigation-link">
                    <span className="navigation-text11">Team</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="/">
                  <div className="navigation-link">
                    <span className="navigation-text12">Publications</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="/">
                  <div className="navigation-link">
                    <span className="navigation-text13">Participate</span>
                  </div>
                </a>
              </li>
            </ul>
            <a href="/">
              <div className="btn-primary btn-sm btn">
                <span className="navigation-text14">Join Our Study</span>
              </div>
            </a>
          </div>
          <button
            id="navToggle"
            aria-label="Toggle Menu"
            aria-expanded="false"
            className="navigation-mobile-toggle"
          >
            <svg
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              className="icon-menu"
            >
              <path
                d="M4 5h16M4 12h16M4 19h16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
      <div id="mobileOverlay" className="navigation-mobile-overlay">
        <div className="navigation-overlay-header">
          <a href="/">
            <div aria-label="NeuroViva Lab - Home" className="navigation-logo">
              <div className="navigation-logo-icon">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 18V5m3 8a4.17 4.17 0 0 1-3-4a4.17 4.17 0 0 1-3 4m8.598-6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path>
                    <path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path>
                    <path d="M18 18a4 4 0 0 0 2-7.464"></path>
                    <path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"></path>
                    <path d="M6 18a4 4 0 0 1-2-7.464"></path>
                    <path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path>
                  </g>
                </svg>
              </div>
              <span className="section-title">NeuroViva Lab</span>
            </div>
          </a>
          <button
            id="navClose"
            aria-label="Close Menu"
            className="navigation-mobile-close"
          >
            <svg
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              className="icon-close"
            >
              <path
                d="M18 6L6 18M6 6l12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
        </div>
        <div className="navigation-overlay-content">
          <ul className="navigation-overlay-links">
            <li>
              <a href="/">
                <div className="navigation-overlay-link">
                  <span>Research</span>
                </div>
              </a>
            </li>
            <li>
              <a href="/">
                <div className="navigation-overlay-link">
                  <span>Team Members</span>
                </div>
              </a>
            </li>
            <li>
              <a href="/">
                <div className="navigation-overlay-link">
                  <span>Research Publications</span>
                </div>
              </a>
            </li>
            <li>
              <a href="/">
                <div className="navigation-overlay-link">
                  <span>Lab News</span>
                </div>
              </a>
            </li>
            <li>
              <a href="/">
                <div className="navigation-overlay-link">
                  <span>Study Participation</span>
                </div>
              </a>
            </li>
            <li>
              <a href="/">
                <div className="navigation-overlay-link">
                  <span>Lab Photos</span>
                </div>
              </a>
            </li>
          </ul>
          <div className="navigation-overlay-footer">
            <a href="/">
              <div className="btn-primary btn-lg btn">
                <span>Join Our Study</span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="navigation-container4">
        <div className="navigation-container5">
          <Script
            html={`<style>
        @keyframes overlayFadeIn {from {opacity: 0;
transform: translateY(-10px);}
to {opacity: 1;
transform: translateY(0);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="navigation-container6">
        <div className="navigation-container7">
          <Script
            html={`<script defer data-name="navigation-logic">
(function(){
  const navToggle = document.getElementById('navToggle');
  const navClose = document.getElementById('navClose');
  const mobileOverlay = document.getElementById('mobileOverlay');

  const toggleMenu = () => {
    const isActive = mobileOverlay.classList.toggle('is-active');
    navToggle.setAttribute('aria-expanded', isActive);
    
    if (isActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  navToggle.addEventListener('click', toggleMenu);
  navClose.addEventListener('click', toggleMenu);

  mobileOverlay.addEventListener('click', (e) => {
    if (e.target === mobileOverlay) {
      toggleMenu();
    }
  });

  const overlayLinks = mobileOverlay.querySelectorAll('.navigation-overlay-link');
  overlayLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileOverlay.classList.remove('is-active');
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 767 && mobileOverlay.classList.contains('is-active')) {
      mobileOverlay.classList.remove('is-active');
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Navigation
