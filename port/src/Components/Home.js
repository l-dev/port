import React, { Component } from "react"
import "./Comp.css"

class Home extends Component {

    render(){
        return (
            <div className="home">
                <h1 className ="hello">Hello, there! <img className="link3"src="https://huntpng.com/images250/sherlock-smiley-face-png-1.png"/></h1>
                <img src="https://i.paste.pics/d123c339e124a4ec80caf37b70964d62.png" className="profile"/>
              <h1 className="intro">I'm Lauren Robinson. <br/> I am a passionate software engineer located in Boston, Massachusettes. <br/>
              Get to know me better! Click one of the links below or contact me at laurenhaleyrobinson@gmail.com!</h1> 
              
         
              <a href="https://github.com/l-dev"><img className="link" src="https://icon-library.net/images/github-icon-png/github-icon-png-22.jpg"/></a>
              <a href="https://www.linkedin.com/in/laurrobinson/"><img className="link2" src="https://retohercules.com/images/linkedin-logo-transparent-background-2.png"/></a>
             
            </div>
        )
    }
}

export default Home