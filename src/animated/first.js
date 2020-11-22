import React,{useEffect, useState} from 'react'
import './first.css'
import Aos from 'aos'
import "aos/dist/aos.css"
import './Boxes.css'
import Component1 from '../components/Component1'
import Component2 from '../components/Component2'
import Component3 from '../components/Component3'
import { Transition, animated} from 'react-spring/renderprops'
import useWebAnimations from "@wellyshen/use-web-animations"




export const First = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  const movingObj1 = useWebAnimations({
    
    keyframes: { 
        
        transform: [
        'translate(10px)',
        'translate(300px)',
      ] },
    timing: { 
        easing: 'steps(100, end)',
        direction:"reverse",
        duration: 2000,
        playbackRate: 1,
         
          },
  }
)

const movingObj2 = useWebAnimations({
    
    keyframes: { 
        
        transform: [
        'translate(10px)',
        'translate(300px)',
      ] },
    timing: { 
        easing: 'steps(100, end)',
        
        duration: 2000,
        playbackRate: 1,
         
          },
  }
)


  const [showComp3,setshowComp3]=useState(false)
    return (
        <div>
            
            
            
                
                <div className="grids">
                <div data-aos="fade-right" className="boxes2">
                    <img src={"https://esellercafe.com/wp-content/uploads/2020/05/square-payment-retail-tablet-1140x570.jpg"} ref={movingObj1.ref} />
                </div>
                <div data-aos="fade-up" className="boxes">
                <img src={"https://thatcreativefeeling.com/wp-content/uploads/Yiqi-Li.jpeg"} ref={movingObj2.ref} />
                </div>
                <img src={"https://www.brookings.edu/wp-content/uploads/2018/07/20180711_metro_10metroareas.jpg"} data-aos="fade-up" className="boxes1"></img>                
                <div  data-aos="fade-right" className="boxes">
                <p>Lorem ipsum dolor sit, amet consectetur adipiscing elit. Possimus obis adipisci eum minima deserunt at porro, veritatis officia commodi itaque voluptates vel susceipit assumenda soluta ispa voluptatibus laudantium labore harum?</p>
                </div>
                
            </div>
            <Component1></Component1>
            <Component2 toggle={()=>{setshowComp3(!showComp3)}}></Component2>
            <Transition
            native
            items={showComp3}
            from={{opacity: 0}}
            enter={{opacity: 1}}
            leave= {{opacity:0}} 
            >
            {show=> show && (props =>(
                <animated.div style={props}>
                    <Component3></Component3>
                </animated.div>
            ))}
            </Transition>
        </div>
    )
}
