import React, { Component } from "react"
import "./Comp.css"

class Home extends Component {

    render(){
        return (
            <div className="home">
              <h1 className="intro">Hello! I'm Lauren Robinson. <br/> I am a passionate software engineer located in Boston, Massachusettes.</h1> 
              
              <img src="https://i.paste.pics/d123c339e124a4ec80caf37b70964d62.png" className="profile"/>
              <a href=""><img className="link" src="https://icon-library.net/images/github-icon-png/github-icon-png-22.jpg"/></a>
              <a href=""><img className="link2" src="https://retohercules.com/images/linkedin-logo-transparent-background-2.png"/></a>
              <img className="link3"src="https://huntpng.com/images250/sherlock-smiley-face-png-1.png"/>
            </div>
        )
    }
}

export default Home