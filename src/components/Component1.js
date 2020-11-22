import React from 'react'
import { Spring } from 'react-spring/renderprops'
import './Component1.css'


export default function Component1() {
    return (
        <Spring
        from ={{opacity:0, marginTop:-500}}
        to={{opacity:1, marginTop:0}}
        >
        { props => (
        <div style={props}>
            <div className="bgimg">
                <h1>Component 1</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipiscing elit. Possimus obis adipisci eum minima deserunt at porro, veritatis officia commodi itaque voluptates vel susceipit assumenda soluta ispa voluptatibus laudantium labore harum?</p>
            <Spring
            from ={{number:0}}
            to={{number:10}}
            config={{duration:10000}}
            >
            { props =>(
                <div style={props}>
                    <h1 style={counter}>
                        {props.number.toFixed()}
                    </h1>
                </div>
            )}
            </Spring>
            </div>
        </div>)}
        </Spring>

    )
}


const counter = { 
    background: "#333",
    textAlign: "center",
    width: "100px",
    borderRadius: "50%",
    margin: "1rem-auto"
}