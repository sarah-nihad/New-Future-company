import React from 'react';
import Context from '../../../assets/js/context';
import ScrollAnimation from 'react-animate-on-scroll';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import LaptopWindowsIcon from '@material-ui/icons/LaptopWindows';
import SettingsIcon from '@material-ui/icons/Settings';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import DvrIcon from '@material-ui/icons/Dvr';
class Services extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           
         
            data:[
                {                   
                    "img":<PhoneAndroidIcon  style={{fontSize:40}}/>,  
                    "img2":<PhoneAndroidIcon  id='servicesImg2' />,                  
                    "name":"Android Applications",
                    "desc":"Cras ultricies ligula sed magna dictum porta. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur aliquet quam id dui posuere blandit.",
                },
                {                   
                    "img":<PhoneIphoneIcon  style={{fontSize:40}}/>,  
                    "img2":<PhoneIphoneIcon  id='servicesImg2'/>,                 
                    "name":"IOS Applications",
                    "desc":"Cras ultricies ligula sed magna dictum porta. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur aliquet quam id dui posuere blandit.",
                },
                {                    
                    "img":<LaptopWindowsIcon  style={{fontSize:40}}/>,  
                    "img2":<LaptopWindowsIcon  id='servicesImg2'/>,                 
                    "name":"Desktop Applications",
                    "desc":"Cras ultricies ligula sed magna dictum porta. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur aliquet quam id dui posuere blandit.",
                },
                {                    
                    "img":<DvrIcon  style={{fontSize:40}}/>,  
                    "img2":<DvrIcon  id='servicesImg2'/>,                 
                    "name":"Web Applications",
                    "desc":"Cras ultricies ligula sed magna dictum porta. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur aliquet quam id dui posuere blandit.",
                },
                {                    
                    "img":<CloudUploadIcon  style={{fontSize:40}}/>,  
                    "img2":<CloudUploadIcon  id='servicesImg2'/>,                 
                    "name":"Cloud Development",
                    "desc":"Cras ultricies ligula sed magna dictum porta. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur aliquet quam id dui posuere blandit.",
                },
                {                    
                    "img":<SettingsIcon  style={{fontSize:40}}/>,  
                    "img2":<SettingsIcon  id='servicesImg2'/>,                 
                    "name":"Corporate Solution",
                    "desc":"Cras ultricies ligula sed magna dictum porta. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur aliquet quam id dui posuere blandit.",
                },
              
            ]
        }
    }


    render() {

        return (
            <Context.Consumer>
                {ctx => {
                    return (
                        <div className='hometab box' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',flexDirection:'column' }}>
                       
                         <div id='ServicesContainer'  >
                        <div></div>
                        <div style={{marginBottom:'3%'}} >
                                    <ScrollAnimation animateIn='flipInX' 
                                        animateOut='flipOutX' >
                                            <span className='hometab-heading' > Our Services</span>
                                      
                                    </ScrollAnimation>
                                </div>
                            <div id='mainServices' >
                            {this.state.data.map(((item, i) =>

                               
                                <div id='MainCardServices'key={i} >
                                    <div id='img_CardServices' >
                                       {item.img}                                                                              
                                    </div>
                                    <div id='img_CardServices2' >
                                       {item.img2}                                                                              
                                    </div>
                                    <div id='title_CardServices' >
                                       {item.name}                                                                              
                                    </div>
                                  
                                    <div id='desc_CardServices' >
                                       {item.desc}                                                                              
                                    </div>
                                         
                                           
                               
                                </div>
                            ))}
                            </div>
                        </div>
                        </div>
                    )
                }}
            </Context.Consumer>
        )
    }
}
export default Services;