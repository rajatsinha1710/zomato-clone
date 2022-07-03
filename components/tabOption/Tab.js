import React from 'react'
import "./tab.css"

function Tab() {
  return (
    <div className='tab-options max-width'>
        <div className='tabs-container'>
          <div className='Online-Tab'>
            <a href="./order-online-page" className='name-img-order'>
              <div className='order-tab'>
                <div className='tab'></div>
                <img src="https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*" alt="order-online" className='order-img' />
                </div>
                <div className='order-name'>
                  <p className='title'>Order Online</p>
                </div>
            </a>
          </div>
          <div className='dining-Tab'>
          <a href="./order-online-page" className='name-img-order'>
              <div className='order-tab'>
                <div className='tab'></div>
                <img src="https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*" alt="Dining out" className='order-img' />
                </div>
                <div className='order-name'>
                  <p className='title'>Dining Out</p>
                </div>
            </a>
          </div>
          <div className='pro-Tab'>
          <a href="./order-online-page" className='name-img-order'>
              <div className='order-tab'>
                <div className='tab'></div>
                <img src="https://b.zmtcdn.com/webFrontend/7c5da5fa471e5e5f26745709f60498a71647365004.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*" alt="Pro & Pro Plus" className='order-img' />
                </div>
                <div className='order-name'>
                  <p className='title'>Pro and Pro Plus</p>
                </div>
            </a>
          </div>
          <div className='night-Tab'>
          <a href="./order-online-page" className='name-img-order'>
              <div className='order-tab'>
                <div className='tab'></div>
                <img src="https://b.zmtcdn.com/webFrontend/d9d80ef91cb552e3fdfadb3d4f4379761647365057.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*" alt="Nightlife" className='order-img' />
                </div>
                <div className='order-name'>
                  <p className='title'>Nightlife and Clubs</p>
                </div>
            </a>
          </div>
        </div>
        <div className='places'>
        <div className='localities'>
          <div className='title-name'>
            <p className='text'>
            Popular localities in and around <span className='city-name'>Delhi NCR</span>
            </p>
          </div>
          <div className='local max-width'>
            <div className='areas-container'>
              <div className='area box-1'>
                <a href="./cp">
                  <div className='box-content'>
                    <div className='content'>
                      <h5 className='area-name'>Connaught Place</h5>
                      <p className='number'>386 places</p>
                    </div>
                    <i className="fa-solid fa-angle-right arrow right"></i>
                  </div>
                </a>
              </div>
              <div className='area box-2'>
              <a href="./cp">
                  <div className='box-content'>
                    <div className='content'>
                      <h5 className='area-name'>Sector 29</h5>
                      <p className='number'>285 places</p>
                    </div>
                    <i className="fa-solid fa-angle-right arrow right absolute-centre"></i>
                  </div>
                </a>
              </div>
              <div className='area box-3'>
              <a href="./cp">
                  <div className='box-content'>
                    <div className='content'>
                      <h5 className='area-name'>Sector 18, Noida</h5>
                      <p className='number'>301 places</p>
                    </div>
                    <i className="fa-solid fa-angle-right arrow right absolute-centre"></i>
                  </div>
                </a>
              </div>
              <div className='area box-4'>
              <a href="./cp">
                  <div className='box-content'>
                    <div className='content'>
                      <h5 className='area-name'>Rajouri Garden</h5>
                      <p className='number'>747 places</p>
                    </div>
                    <i className="fa-solid fa-angle-right arrow right absolute-centre"></i>
                  </div>
                </a>
              </div>
              <div className='area box-5'>
              <a href="./cp">
                  <div className='box-content'>
                    <div className='content'>
                      <h5 className='area-name'>Saket</h5>
                      <p className='number'>665 places</p>
                    </div>
                    <i className="fa-solid fa-angle-right arrow right absolute-centre"></i>
                  </div>
                </a>
              </div>
              <div className='area box-6'>
              <a href="./cp">
                  <div className='box-content'>
                    <div className='content'>
                      <h5 className='area-name'>DLF Cyber City</h5>
                      <p className='number'>220 places</p>
                    </div>
                    <i className="fa-solid fa-angle-right arrow right absolute-centre"></i>
                  </div>
                </a>
              </div>
              <div className='area box-7'>
              <a href="./cp">
                  <div className='box-content'>
                    <div className='content'>
                      <h5 className='area-name'>Golf Course Road</h5>
                      <p className='number'>251 places</p>
                    </div>
                    <i className="fa-solid fa-angle-right arrow right absolute-centre"></i>
                  </div>
                </a>
              </div>
              <div className='area box-8'>
              <a href="./cp">
                  <div className='box-content'>
                    <div className='content'>
                      <h5 className='area-name'>DLF Phase-4</h5>
                      <p className='number'>750 places</p>
                    </div>
                    <i className="fa-solid fa-angle-right arrow right absolute-centre"></i>
                  </div>
                </a>
              </div>
              <div className='area box-9'>
                  <div className='box-content-seeMore'>
                    <div className='content'>See More</div>
                    <i className="fa-solid fa-angle-down down absolute-centre"></i>
                  </div>
              </div>
            </div>
          </div>
      </div>
        </div>
    </div>
  )
}

export default Tab