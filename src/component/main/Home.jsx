import React from 'react';
import Context from '../../assets/js/context';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
  
    };
   
  }



  render() {
    return (
        <Context.Consumer>
          {ctx => {
 return (
    <div >
       
Home
        </div>
      
    );
 }}
 </Context.Consumer>
 )
  }
}

export default Home;
