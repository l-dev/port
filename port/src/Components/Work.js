import React, { Component } from "react";
import "./Comp.css";

class Work extends Component {
  render() {
    return (
      <div className="Work">

        <div className="childWork">
        <a href="https://github.com/l-dev/l-dev.github.io"><img
            className="project"
            src="https://user-images.githubusercontent.com/54283215/69578614-b5992100-0f85-11ea-8466-ec4230c5b5e0.png"
          />
          </a>
          <a href="https://github.com/l-dev/ExpressApp"><img
            className="project"
            src="https://user-images.githubusercontent.com/54283215/66490971-014c4580-ea80-11e9-999f-364719e7b0ca.png"
          /></a>
          <a href="https://github.com/ChrisKCarr/Pollista-FrontEnd"><img
            className="project"
            src="https://user-images.githubusercontent.com/54283215/69387058-76af5680-0c79-11ea-9d37-69fa388926e5.png"
          />
          </a>
          <a href="https://github.com/l-dev/bafroom"><img
            className="project"
            src="https://user-images.githubusercontent.com/54283215/69175389-87649e80-0ab8-11ea-8775-8282e9f66047.png"
          />
          </a>
          <a href="https://github.com/l-dev/recipeapp"><img
            className="project"
            src="https://cdn-learn.adafruit.com/assets/assets/000/049/441/medium800/circuitpython_circuit_playground_adafruit_blinka_computer.png?1513729326"
          />
          </a>
     
        </div>
      </div>
    );
  }
}

export default Work;
