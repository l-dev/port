import React, { Component } from "react";
import "./Comp.css";

class Work extends Component {
  render() {
    return (
      <div className="Work">
        <h1 className="my"> MY PROJECTS</h1>
        <div className="childWork">
          <img
            className="project"
            src="https://user-images.githubusercontent.com/54283215/66490971-014c4580-ea80-11e9-999f-364719e7b0ca.png"
          />
          <br />
          <br />
          <img
            className="project"
            src="https://user-images.githubusercontent.com/54283215/69387058-76af5680-0c79-11ea-9d37-69fa388926e5.png"
          />
          <br />
          <br />
          <br />
          <img
            className="project"
            src="https://user-images.githubusercontent.com/54283215/69175389-87649e80-0ab8-11ea-8775-8282e9f66047.png"
          />
        </div>
      </div>
    );
  }
}

export default Work;
