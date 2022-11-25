import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
 
//  const home =()=>{
//   <a href="/">Homee</a>
//  }

  return (
    <>
    <div id='about'><h1> About page</h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, assumenda dolorum aliquid repellendus accusantium qui ipsa minus illum rem voluptas, quae ipsam. Praesentium nemo laudantium repellendus quos, saepe dolorum iusto!</p>
    
    </div>
    {/* <button onClick={home}>HOME</button> */}
<NavLink to="/" className="btn btn-success" id='btn'>Home</NavLink>
    </>
  )
}

export default About