import React, { Component } from "react";
import "./Comp.css";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <img
          src="https://i.paste.pics/d123c339e124a4ec80caf37b70964d62.png"
          className="profile"
        />

          <h1 className="intro">
          <h1 className="intro hello"> Hello, there!</h1>
            My name is Lauren Robinson. I am a coffee connoisseur, an entry level sommellier, and a meticulously passionate software
            engineer located in beautiful Boston, Massachusettes. When I am not dedicating my energy to coding or drinking copious amounts of coffee I enjoy running, playing mario kart, and networking with other software engineers! I would love to get to know you better. Click one of the links below or contact me at
            laurenhaleyrobinson@gmail.com.
          </h1>
 

       
              <footer>   <a className="links" href="https://www.linkedin.com/in/laurrobinson/">LINKEDIN</a>
               <a className="links"href="https://github.com/l-dev">GITHUB</a>
               <a className="links"href="mailto: laurenhaleyrobinson@gmail.com">EMAIL</a></footer>
      </div>
    );
  }
}

export default Home;
