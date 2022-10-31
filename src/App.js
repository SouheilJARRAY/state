import './App.css';
import { Component } from 'react';
import { render } from '@testing-library/react';
import React from 'react';
import { useState } from 'react';
import Profile from './Profile/Profile';
import souheil from './souheil.jpg';
import anonymous from './anonymous.jpg';

class App extends Component{

  buttonSize={color:'red', textAlign:'center', fontSize:'20px', margin: '4px 20px',width:'20%'};
  constructor(props) {
    super(props);
    this.state = {
      fullName : "Anonymous",
      bio : "nothing to show",
      imgSrc : anonymous,
      profession : "nothing to show",
      buttonText : "who am I?",
      booleanShow : false  
    };
  }

  handleChange = () => {
    this.setState({booleanShow:!this.state.booleanShow});

  }

  handleClick = () => {
    this.state.fullName==='Souheil JARRAY'? (
      this.setState({fullName:'Anonymous', bio:'nothing to show', imgSrc:anonymous, profession:'nothing to show', buttonText:"who am I?"})
    ) : ( this.state.booleanShow === true ? (
      this.setState({fullName:'Souheil JARRAY', bio:'2 years of experience', imgSrc:souheil, profession:'engineer', buttonText:'change to Anonymous'})
    ) : (
      alert("you need to check the enable checkbox first")
    ));
  }

  render() {
    return (
      <div>
        <Profile fullName={this.state.fullName} bio={this.state.bio} profession={this.state.profession} >{this.state.imgSrc}</Profile>
        <button onClick={this.handleClick} style={this.buttonSize}>{this.state.buttonText}</button>
        <br></br>
        <input type="checkbox" onChange={this.handleChange}/> enable show identity {this.state.booleanShow}
        
      </div>
    )
  }
  

}

export default App;
