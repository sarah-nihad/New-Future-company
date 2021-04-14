import React from "react";
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { Container,  Card } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Memberinfo } from "./Data.js";
import Media from "react-media";
class TeamSection extends React.Component {
  constructor(props) {
    super(props);
    this.state={
     
    }
  }

  render() {
    return (
      <div className="team-section" style={{minHeight:360}}  >
     
        <Container>
          <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}  >
            <Media queries={{
              small: "(max-width: 599px)",
              medium: "(min-width: 600px) and (max-width: 1199px)",
              large: "(min-width: 1200px)"
            }}>
              {matches => (
                <React.Fragment>
                  {matches.small &&
                    <div style={{ width: '100%',  height: '150px', alignItems: 'center', justifyContent: 'center', display: 'flex' }}  >
                      <Carousel
                        addArrowClickHandler
                        slidesPerPage={1}
                        slidesPerScroll={1}
                        animationSpeed={1000}
                        autoPlay={2000}
                        stopAutoPlayOnHover
                        clickToChange
                        infinite={true}
                      >

                        {Memberinfo.map((member, index) => {
                          return (

                            <Card>
                              <Card.Img src={member.img} />
                              <Card.Body className="team-info">
                                <div className="social-media">
                                  <ul>
                                    <FacebookIcon />
                                    <LinkedInIcon />

                                    <InstagramIcon />
                                  </ul>
                                </div>
                                <Card.Title>{member.name}</Card.Title>
                                <Card.Text>{member.job}</Card.Text>
                              </Card.Body>
                            </Card>

                          );
                        })}
                      </Carousel>
                    </div>
                  }
                  {matches.medium &&
                    <div style={{ width: '100%', height: '150px', alignItems: 'center', justifyContent: 'center', display: 'flex' }}  >
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
                        {Memberinfo.map((member, index) => {
                          return (

                            <Card>
                              <Card.Img src={member.img} />
                              <Card.Body className="team-info">
                                <div className="social-media">
                                  <ul>
                                    <FacebookIcon />
                                    <LinkedInIcon />

                                    <InstagramIcon />
                                  </ul>
                                </div>
                                <Card.Title>{member.name}</Card.Title>
                                <Card.Text>{member.job}</Card.Text>
                              </Card.Body>
                            </Card>

                          );
                        })}
                      </Carousel>
                    </div>
                  }
                  {matches.large &&
                    <div style={{ width: '100%', height: '150px', alignItems: 'center', justifyContent: 'center', display: 'flex' }}  >
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
                        {Memberinfo.map((member, index) => {
                          return (

                            <Card>
                              <Card.Img src={member.img} />
                              <Card.Body className="team-info">
                                <div className="social-media">
                                  <ul>
                                    <FacebookIcon />
                                    <LinkedInIcon />

                                    <InstagramIcon />
                                  </ul>
                                </div>
                                <Card.Title>{member.name}</Card.Title>
                                <Card.Text>{member.job}</Card.Text>
                              </Card.Body>
                            </Card>

                          );
                        })}
                      </Carousel>
                    </div>
                  }




                </React.Fragment>



              )}
            </Media>
          </div>

        </Container>
      </div>
    );
  }
}
export default TeamSection;
