import React, {Component} from "react"
import "./Comp.css"

class Land extends Component {
render(){
    return(
        <div className="Land">
            <h1 className="welcome">WELCOME</h1>
            <h1 className="welcome2">WELCOME</h1>
            <h1 className="welcome3">WELCOME</h1>
           {/* <a href="/work"><h1 className="arrow">Projects this way &rarr; &rarr; &rarr;</h1></a>  */}
           <footer>
               <a className="links" href="https://www.linkedin.com/in/laurrobinson/">LINKEDIN</a>
               <a className="links"href="https://github.com/l-dev">GITHUB</a>
               <a className="links"href="mailto: laurenhaleyrobinson@gmail.com">EMAIL</a>
           </footer>
        </div>
    )
}
}

export default Land