import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Context from './assets/js/context';
import Home from './component/main/Home';
import { ToastContainer } from "react-toastify";
import Cookies from "universal-cookie";

const cookies = new Cookies();
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
  
    };
   
  }



  render() {
    return (
      <BrowserRouter >
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
    

        <Context.Provider value={{
          value: this.state,
          action: {
          }
        }} >

          <Switch>

            <Route exact path='/' component={Home} />
           

          </Switch>
        </Context.Provider>
      </BrowserRouter>
    );
  }
}

export default App;
