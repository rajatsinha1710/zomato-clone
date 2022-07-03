import React from 'react'
import './footer.css'
import {FaChevronDown, FaGlobe, FaLinkedin, FaInstagramSquare, FaTwitterSquare, FaYoutubeSquare, FaFacebookSquare} from 'react-icons/fa'

function Footer() {
  return (
      <footer className='footer'>
      <div className='Allcontent'>
        <section className='section-container'>
        <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*" alt="logo" className='zomato-logo' />
          <div className='text'></div>
          <section className='country-lang'>
            <div className='country-selector'>
              <div className='country-container'>
                <div className='country-tags'>
                  <span className='flag'></span>
                  <span className='country-name'>India</span>
                  <i className='drop-down'>
                    <FaChevronDown className='icon'/>
                  </i>
                  
                  </div>
              </div>
            </div>
            <div className='gap'></div>
            <div className='language-container'>
              <div className='lang'>
                <div className='flex-container'>
                  <i className='globe-icon'>
                    <FaGlobe/>
                  </i>
                  <span className='english'>English</span>
                  <i className='drop-down'>
                    <FaChevronDown/>
                  </i>
                </div>
              </div>
            </div>
          </section>
        </section>
        <div className='All-about'>
          <div className='about-zomato'>
            <h6 className='heading'>About Zomato</h6>
            <nav>
              <a href="https://www.zomato.com/who-we-are" className='link-text'>
                <p>Who We Are</p>
              </a>
              <a href="https://blog.zomato.com/" className='link-text'>
                <p>Blog</p>
              </a>
              <a href="https://www.zomato.com/careers" className='link-text'>
                <p>Work With Us</p>
              </a>
              <a href="https://www.zomato.com/investor-relations" className='link-text'>
                <p>Investor Relations</p>
              </a>
              <a href="https://www.zomato.com/report-fraud" className='link-text'>
                <p>Report Fraud</p>
              </a>
            </nav>
          </div>
          <div className='zomaverse'>
          <h6 className='heading'>Zomaverse</h6>
            <nav>
              <a href="https://www.zomato.com/" className='link-text'>
                <p>Zomato</p>
              </a>
              <a href="https://www.feedingindia.org/" className='link-text'>
                <p>Feeding India</p>
              </a>
              <a href="https://www.hyperpure.com/" className='link-text'>
                <p>Hyper Pure</p>
              </a>
              <a href="https://www.zomato.com/zomaland" className='link-text'>
                <p>Zomaland</p>
              </a>
              </nav>
          </div>
          <div className='restaurants-enterprises'>
            <div className='restaurants'>
              <h6 className='heading'>For Restaurants</h6>
              <nav>
              <a href="https://www.zomato.com/partner_with_us" className='link-text'>
                <p>Partner with Us</p>
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.application.services.partner&hl=en_IN&gl=US" className='link-text'>
                <p>Apps for You</p>
              </a>
              </nav>
            </div>
            <div className='enterprises'>
            <h6 className='heading'>For Enterprises</h6>
              <nav>
              <a href="https://www.zomato.com/enterprise-solutions" className='link-text'>
                <p>Work for Zomato</p>
              </a>
              </nav>
            </div>
          </div>
          <div className='learn-More'>
          <h6 className='heading'>Learn More</h6>
            <nav>
              <a href="https://www.zomato.com/privacy" className='link-text'>
                <p>Privacy</p>
              </a>
              <a href="https://www.zomato.com/security" className='link-text'>
                <p>Security</p>
              </a>
              <a href="https://www.zomato.com/conditions" className='link-text'>
                <p>Terms</p>
              </a>
              <a href="https://www.zomato.com/directory" className='link-text'>
                <p>Sitemaps</p>
              </a>
              </nav>
          </div>
          <div className='social-links'>
            <h6 className='heading'>Social links</h6>
            <div className='social-icons'>
              <a href="https://in.linkedin.com/company/zomato" className='links'>
                <div className='social-media-logo'>
                  <i className='soc-icons'>
                    <FaLinkedin/>
                  </i>
                </div>
              </a>
              <a href="https://www.instagram.com/zomato/" className='links'>
                <div className='social-media-logo'>
                  <i className='soc-icons'>
                    <FaInstagramSquare/>
                  </i>
                </div>
              </a>
              <a href="https://twitter.com/zomato" className='links'>
                <div className='social-media-logo'>
                  <i className='soc-icons'>
                    <FaTwitterSquare/>
                  </i>
                </div>
              </a>
              <a href="https://youtube.com/zomato" className='links'>
                <div className='social-media-logo'>
                  <i className='soc-icons'>
                    <FaYoutubeSquare/>
                  </i>
                </div>
              </a>
              <a href="https://facebook.com/zomato" className='links'>
                <div className='social-media-logo'>
                  <i className='soc-icons'>
                    <FaFacebookSquare/>
                  </i>
                </div>
              </a>
            </div>
            <div className='gap1'></div>
            <div className='gap1'></div>
            <section className='phone-store'>
              <a href="https://bnc.lt/download-zomato-ios" className='link-text'>
                <div className='hero'>
                  <div className='eeee'></div>
                  <img src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" alt="ios" className='logo-for-appStore'/>
                </div>
              </a>
              <div className='gap1'></div>
              <a href="https://bnc.lt/download-z-android" className='link-text'>
                <div className='hero'>
                  <div className='eeee'></div>
                  <img src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" alt="ios" className='logo-for-appStore'/>
                </div>
              </a>
            </section>
          </div>
        </div>
        <hr className='border-gap' />
        <p className='footer-para'>
        By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2022 © Zomato™ Ltd. All rights reserved.
          </p>          
      </div>
      </footer>
    )
}

export default Footer