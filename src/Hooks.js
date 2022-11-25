// import React from 'react'
// import { useState } from 'react';

// const Hooks = () => {
  
    
//         const [name, setName]= useState('Manish');
//         const changeName = ()=>{
//             setName('Manish Manish')
//         }

// console.log(name);
// return(
//     <div>
//         <h1>{name}</h1>
//         <button className='btn btn-primary' onClick={changeName}>Click to change the Name</button>
//     </div>
// )
// }
// export default Hooks




import React from "react";
import { useState } from "react";

const Hooks =()=>{

const [myName, setMyName]= useState('Text to be changed');
const changeName=()=>{
    setMyName('Text changed')
}
return(
    <>
    <h1>{myName}</h1>
    
<button className="btn btn-success" onClick={changeName}>Cick to change</button>

</>
)
}

 export default Hooks