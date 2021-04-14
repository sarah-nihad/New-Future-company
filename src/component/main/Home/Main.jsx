
import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import NavBar from '../common/NavBar';

var rotated = false;


class Main extends Component {
  state = {
    open: true,
  }

  add(e) {

    var x = document.getElementById('svg'),
      angle = rotated ? 0 : 180;
    x.style.transform = 'rotate(' + angle + 'deg)';
    x.style.backfaceVisibility ='hidden';
    x.style.transformStyle='preserve-3d';
    x.style.transformOrigin='50% 160%';
    x.style.transition='1s .2s cubic-bezier(.88,.17,0,.99)';
    x.style.willChange='transform';
    x.style.position= 'absolute';
    // x.style.top= '50%';
    x.style.left= 'auto';
    rotated = !rotated;
    
 
 
  }

  render() {
    return (

      <div>

        <div  >
          <NavBar />
          <div id='tpbgimg'   >
            <svg onClick={() => this.add()} id='svg' viewBox="0 0 1440 181" xmlns='http://www.w3.org/2000/svg' preserveAspectRatio="none" style={{ height: 200, width: "100%" }} className='css-1d3w5wq' >
              <linearGradient id='SVGID_1_' gradientUnits='userSpaceOnUse' x1='1543.491' y1='1474.8508' x2='2952.8528' y2='659.8721' >
                <stop offset='0' style={{ stopColor: '#131217' }} />
                <stop offset='1' style={{ stopColor: '#292A33' }} />
              </linearGradient>

              <path className='st0' style={{ fill: "#0a2861", stroke: "#0a2861", strokeWidth: 1, fillRule: 'nonzero' }} d="M0 96l60-10.7C120 75 240 53 360 74.7 480 96 600 160 720 176s240-16 360-42.7c120-26.3 240-48.3 300-58.6l60-10.7V0H0v96z"   >
              </path>

            </svg>
          </div>
          <Carousel prevLabel={null} interval={9000} onSlide={(e) => {
            console.log('s');
            this.add(e)
          }} >
            <Carousel.Item   >
            <div id='slotholder' >
                <div id='tpbgimg' ></div>
              </div>  
           
              <div className='tp-parallax-wrap' style={{ position: 'absolute', display: 'block', visibility: 'visible', width: '100%', height: '100%', left: 0, top: 0, zIndex: 0 }} >
                <div className='tp-loop-wrap'>
                  <div className='tp-mask-wrap'>
                    <div className='tp-caption'>
                      <a>
                        <span />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item  >
              <div id='slotholder' >
                <div id='tpbgimg1' ></div>
              </div>          
              <div className='tp-parallax-wrap' style={{ position: 'absolute', display: 'block', visibility: 'visible', width: '100%', height: '100%', left: 0, top: 0, zIndex: 0 }} >
                <div className='tp-loop-wrap'>
                  <div className='tp-mask-wrap'>
                    <div className='tp-caption'>
                      <a>
                        <span />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>

            <Carousel.Item>
            <div id='slotholder' >
                <div id='tpbgimg2' ></div>
              </div>  
              <div className='tp-parallax-wrap' style={{ position: 'absolute', display: 'block', visibility: 'visible', width: '100%', height: '100%', left: 0, top: 0, zIndex: 0 }} >
                <div className='tp-loop-wrap'>
                  <div className='tp-mask-wrap'>
                    <div className='tp-caption'>
                      <a>
                        <span />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </Carousel.Item>
          </Carousel>





        </div>



      </div>
    );
  }
}
export default Main;
