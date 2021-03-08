import React from 'react';
import Context from '../../assets/js/context';
import NavBar from './common/NavBar';
import { withController } from 'react-scroll-parallax';
import ScrollUpButton from "react-scroll-up-button";
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'react-router-dom';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Services from './Services';
class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }


    }


    render() {
        return (
            <Context.Consumer>
                {ctx => {
                    return (
                        <div id='min1_home1' >
                            <div id='mainCont1'>
                                <div className='homeBgbimg'  >
                                    <NavBar />
                                    <div style={{ position: 'relative' }} >
                                        <div id='homeBgMainDiv' >
                                            <div id='homeBgMainP1'  >IT Solution for Your Business</div>
                                            <div></div>
                                            <Link id='btn' >
                                                <div id='getInbtn' >
                                                    <span>  Get in Touch  <ArrowRightAltIcon /> </span>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div id='downHeaderNavContiner'>

                                        <Services />


                                        <ScrollUpButton
                                            StopPosition={0}
                                            ShowAtPosition={150}
                                            EasingType='easeOutCubic'
                                            AnimationDuration={2000}
                                            ContainerClassName='ScrollUpButton__Container'
                                            TransitionClassName='ScrollUpButton__Toggled'
                                            style={{ backgroundColor: 'rgba(46, 48, 49, 0.7)' }}
                                            ToggledStyle={{}}
                                        />

                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </Context.Consumer>
        )
    }
}
export default withController(Home);