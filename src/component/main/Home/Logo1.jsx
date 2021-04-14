
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import React from 'react';
import Media from "react-media";
import { logoData } from '../common/Data';
class Logo1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.wrapper = React.createRef();
    }


    render() {

        return (
            <div ref={this.wrapper}   >
                    <svg viewBox="0 0 1440 181" preserveAspectRatio="none" style={{ height: 100, width: "100%",backgroundColor:'#fff'}} className='css-1d3w5wq'  >
                                <path style={{ fill: "rgb(251 247 248)", stroke: "rgb(251 247 248)", strokeWidth: 1, fillRule: 'nonzero' }} d="M0 96l60-10.7C120 75 240 53 360 74.7 480 96 600 160 720 176s240-16 360-42.7c120-26.3 240-48.3 300-58.6l60-10.7V0H0v96z"   >
                                </path>
                            </svg>
                           
                <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}  >
                    <Media queries={{
                        small: "(max-width: 599px)",
                        medium: "(min-width: 600px) and (max-width: 1199px)",
                        large: "(min-width: 1200px)"
                    }}>
                        {matches => (
                            <React.Fragment>
                                {matches.small &&
                                    <div style={{ width: '100%', backgroundColor: '#fff', height: '150px', alignItems: 'center', justifyContent: 'center', display: 'flex' }}  >
                                        <Carousel
                                            addArrowClickHandler
                                            slidesPerPage={2}
                                            slidesPerScroll={1}
                                            animationSpeed={1000}
                                            autoPlay={2000}
                                            stopAutoPlayOnHover
                                            clickToChange
                                            infinite={true}
                                        >

                                            {logoData.map((item, i) => {
                                                return (
                                                    <img src={item.img} alt='img' key={i} />

                                                )
                                            })}
                                        </Carousel>
                                    </div>
                                }
                                {matches.medium &&
                                    <div style={{ width: '100%', backgroundColor: '#fff', height: '150px', alignItems: 'center', justifyContent: 'center', display: 'flex' }}  >
                                        <Carousel
                                            addArrowClickHandler
                                            slidesPerPage={4}
                                            slidesPerScroll={1}
                                            animationSpeed={1000}
                                            autoPlay={2000}
                                            stopAutoPlayOnHover
                                            clickToChange
                                            infinite={true}
                                        >
                                              {logoData.map((item, i) => {
                                                return (
                                                    <img src={item.img} alt='img' key={i} />

                                                )
                                            })}
                                        </Carousel>
                                    </div>
                                }
                                {matches.large &&
                                    <div style={{ width: '100%', backgroundColor: '#fff', height: '150px', alignItems: 'center', justifyContent: 'center', display: 'flex' }}  >
                                        <Carousel
                                            addArrowClickHandler
                                            slidesPerPage={6}
                                            slidesPerScroll={1}
                                            animationSpeed={1000}
                                            autoPlay={2000}
                                            stopAutoPlayOnHover
                                            clickToChange
                                            infinite={true}
                                        >
                                             {logoData.map((item, i) => {
                                                return (
                                                    <img src={item.img} alt='img' key={i} />

                                                )
                                            })}
                                        </Carousel>
                                    </div>
                                }




                            </React.Fragment>



                        )}
                    </Media>
                </div>
            </div>
        )
    }
}
export default Logo1;