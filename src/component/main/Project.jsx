import React from 'react';
import Context from '../../assets/js/context';
import ScrollAnimation from 'react-animate-on-scroll';
import NavBar from './common/NavBar'; 
import Footer from './common/Footer';
import Particles from 'react-particles-js';
import ExploreIcon from '@material-ui/icons/Explore';
class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {


            data: [
                {
                    "img": require('../../assets/img/nirvana.jpg'),

                    "name": "Android Applications",
                    "desc": "Cras ultricies ligula sed magna dictum porta. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur aliquet quam id dui posuere blandit.",
                },
                {
                    "img": require('../../assets/img/qualia.jpg'),

                    "name": "IOS Applications",
                    "desc": "Cras ultricies ligula sed magna dictum porta. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur aliquet quam id dui posuere blandit.",
                },
                {
                    "img": require('../../assets/img/nirvana.jpg'),

                    "name": "Desktop Applications",
                    "desc": "Cras ultricies ligula sed magna dictum porta. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur aliquet quam id dui posuere blandit.",
                },
                {
                    "img": require('../../assets/img/qualia.jpg'),

                    "name": "Web Applications",
                    "desc": "Cras ultricies ligula sed magna dictum porta. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur aliquet quam id dui posuere blandit.",
                },
          

            ]
        }
    }


    render() {

        return (
            <Context.Consumer>
                {ctx => {
                    return (
                        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                             <NavBar />
                            <div id='project_bgb2' >
                                <Particles style={{ position: 'absolute' }}
                                    params={{
                                        particles: {
                                            number: {
                                                value: 200,
                                                density: {
                                                    enable: true,
                                                    value_area: 2000,
                                                }
                                            },
                                            shape: {
                                                type: "circle",
                                                stroke: {
                                                    "width": 2,
                                                    "color": "#fff"
                                                }
                                            },
                                        }
                                    }}
                                />
                                <img src={require('../../assets/img/laptop.png')} alt='img' className='laptop-img' ></img>
                                <video autoPlay loop >
                         <source src={require('../../assets/Comp_1_x264_002.mp4')} type='video/mp4'  />
                                </video>
                            </div>
                            <div id='ServicesContainer'  >
                                <div style={{ marginBottom: '3%' }} >
                                    <ScrollAnimation animateIn='flipInX'
                                        animateOut='flipOutX' >
                                        <span className='hometab-heading'  > OUR WORKS</span>

                                    </ScrollAnimation>
                                </div>
                                <div id='mainServices' >
                                    {this.state.data.map(((item, i) =>
                                        i <= 3 ? (
                                            <div id='mainCardProject'  >
                                                <div id='card' key={i} >
                                                    <div id='details'>

                                                        <div style={{ padding: '14px' }} id='concepttext' >{item.desc}</div>
                                                        <div id='projectIcon' >
                                                            <ExploreIcon />
                                                        BROWSE
                                                        </div>
                                                    </div>
                                                    <div id='imgBox'> <img src={item.img} alt='img' />   </div>


                                                </div>
                                                <div id='project_title'  >{item.name}</div>
                                            </div>

                                        ) : (null)


                                    ))}
                                </div>
                              
                            </div>
                            <Footer />
                        </div>
                    )
                }}
            </Context.Consumer>
        )
    }
}
export default Project;