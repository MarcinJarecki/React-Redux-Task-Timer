import React, { Component } from 'react';
import { withCookies, Cookies  } from 'react-cookie';
import { instanceOf } from 'prop-types';
import Routes from './config/Routes';
import Footer from './components/main/Footer';
import NavBar from './components/main/NavBar';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false
    }
  }

  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  setAuthCookies = (value) =>{
    const { cookies } = this.props;
    if (cookies)  { 
      cookies.set('isAuthenticated', value); 
    } 
  }

  /**
   * Get "isAuthenticated" coockie, when don`t exist,  create new coockie with false value
   */
  getAuthCookies = () => {
    const { cookies } = this.props;
    if (cookies)  { 
      let isAuth = cookies.get('isAuthenticated');
      if (isAuth) {
        isAuth = (isAuth === "true") ? true : false
        return isAuth;
      } 
      else {
        this.setAuthCookies(false);
        return false
      }     
    } else {
      this.setAuthCookies(false);
      return false;
    }
  }

  setAuthStatus = (status) =>{
    this.setState({isAuthenticated : status});  
  }
  
  componentWillMount() {
    let isAuth = this.getAuthCookies(); 
    this.setAuthStatus(isAuth);         
  }

  render() {
    return (      
          <div className="App">         
              <NavBar setAuthCookies={this.setAuthCookies} setAuthStatus={this.setAuthStatus} isAuthenticated={this.state.isAuthenticated}/>
              <Routes isAuthenticated={this.state.isAuthenticated}/>
              <Footer />
          </div>    
    );
  }
}

export default  withCookies(App);
