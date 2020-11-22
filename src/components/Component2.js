import React, { Component } from 'react'
import { Spring } from 'react-spring/renderprops'
import './Component1.css'

export class Component2 extends Component {
    render() {
        return (
            <Spring
        from ={{opacity:0}}
        to={{opacity:1}}
        config={{delay:1000,duration:1000}}
        >
            { props => (
                <div style={props}>
        <div className="bgimg2">
            <h1>Component 2</h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipiscing elit. Possimus obis adipisci eum minima deserunt at porro, veritatis officia commodi itaque voluptates vel susceipit assumenda soluta ispa voluptatibus laudantium labore harum?
                </p>
            <button style={btn} onClick={this.props.toggle}>Toggle Component3 </button>
        </div>

                </div>
            )}
        </Spring>        )
    }
}



export default Component2


const btn = {
    background: "#333",
    color: "#fff",
    padding: "1rem 2rem",
    border: "none",
    textTransform: "uppercase",
    margin: "15px 0"
}