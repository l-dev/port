import React, {Component} from "react"
import "./Comp.css"

class Work extends Component {
    render(){
        return(
            <div className="Work">
<h1> MY Work WOrk WOrk work</h1>
<div className="childWork">
<img className="project" src="https://user-images.githubusercontent.com/54283215/66490971-014c4580-ea80-11e9-999f-364719e7b0ca.png"/>
{/* <h1 className="descrip2">
    EXPRESS APPLICATION<br/> I have to redo this one but when i do it is going to look sooo good and great and beautiful
</h1> */}
<br/>
<br/>
<img className="project" src="https://user-images.githubusercontent.com/54283215/69387058-76af5680-0c79-11ea-9d37-69fa388926e5.png"/>
{/* <h1 className="descrip3">
    POLLISTA APP<br/> Full stack MERN Application! This one was a group project. The application allows users to create Polls of their liking and have other users vote on it. Powered with Google Auth, Canvas.js.
</h1> */}
<br/>
<br/>
<img className="project" src="https://user-images.githubusercontent.com/54283215/69175389-87649e80-0ab8-11ea-8775-8282e9f66047.png"/>
{/* <h1 className="descrip4">
    BATHROOM LOCATOR<br/> Full stack MERN application. Users have the ability to find their current location with the map as well as nearest restaurants around them using a YElP API. In the course this was our final project.
</h1> */}
<br/>
<br/>
</div>
            </div>
        )
    }
}

export default Work 