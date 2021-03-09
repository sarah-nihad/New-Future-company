import React from 'react';
import Context from '../../assets/js/context';
import ScrollAnimation from 'react-animate-on-scroll';
class WhyUs extends React.Component {
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
                        <div className='whyUsCont' >
                             <div style={{marginBottom:'3%'}} >
                                    <ScrollAnimation animateIn='flipInX' 
                                        animateOut='flipOutX' >
                                           <div className='hometab-heading' >Why Choose Us</div>
                                      
                                    </ScrollAnimation>
                                </div>
                            
<div className='whyUsMain' >
<div className='whyUsMainCard' >
    <div className='advantages-item-count'>
    01
    </div>
    <div className='advantages-item-info' >
        <div className='advantages-item-title' >High Quality Hardware</div>
        <div>We use top-notch hardware to develop the most efficient apps for our customers</div>
    </div>
</div>
<div className='whyUsMainCard' >
    <div className='advantages-item-count'>
    02
    </div>
    <div className='advantages-item-info' >
        <div className='advantages-item-title' >Dedicated 24\7 Support</div>
        <div>You can rely on our 24/7 tech support that will gladly solve any app issue you may have.</div>
    </div>
</div>
<div className='whyUsMainCard' >
    <div className='advantages-item-count'>
    03
    </div>
    <div className='advantages-item-info' >
        <div className='advantages-item-title' >30-Day Money-back Guarantee</div>
        <div>If you are not satisfied with our apps, we will return your money in the first 30 days.</div>
    </div>
</div>
<div className='whyUsMainCard' >
    <div className='advantages-item-count'>
    04
    </div>
    <div className='advantages-item-info' >
        <div className='advantages-item-title' >Agile and Fast Working Style</div>
        <div>This type of approach to our work helps our specialists to quickly develop better apps.</div>
    </div>
</div>
<div className='whyUsMainCard' >
    <div className='advantages-item-count'>
    05
    </div>
    <div className='advantages-item-info' >
        <div className='advantages-item-title' >Some Apps are Free</div>
        <div>We also develop free apps that can be downloaded online without any payments.</div>
    </div>
</div>
<div className='whyUsMainCard' >
    <div className='advantages-item-count'>
    06
    </div>
    <div className='advantages-item-info' >
        <div className='advantages-item-title' >High Level of Usability</div>
        <div>All our products have high usability allowing users to easily operate the apps.</div>
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
export default WhyUs;