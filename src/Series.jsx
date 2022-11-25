import React from 'react'
import { NavLink } from 'react-router-dom'

const Series = () => {
  return (
    <>
        <h1 id='series'>Here is our Top Series</h1>
    <div>
        <a href="https://www.youtube.com/watch?v=jGd671lIUxg"  target="_blank" rel="noopener noreferrer">
        <img id='series1' src="https://image.tmdb.org/t/p/original/8gjbGKe5WNOaLrkoeOUPLvDhPhK.jpg" alt="All of Us Are Dead" />
        </a>
        <h3 id='sn1'>ALL OF US ARE DEAD</h3>
</div>

<div>
        <a href="https://www.youtube.com/watch?v=ESEUoa-mz2c"  target="_blank" rel="noopener noreferrer">
        <img id='series2' src="https://flxt.tmsimg.com/assets/p14652182_b1t_v8_aa.jpg" alt="DARK" />
        </a>
        <h3 id='sn2'>DARK</h3>
</div>
<div>
<NavLink ></NavLink>
        <a href="https://www.youtube.com/watch?v=M-tpi-Cwsak"  target="_blank" rel="noopener noreferrer">
        <img id='series3' src="https://m.media-amazon.com/images/M/MV5BODI0ZTljYTMtODQ1NC00NmI0LTk1YWUtN2FlNDM1MDExMDlhXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_.jpg" alt="DARK" />
        </a>
        <h3 id='sn3'>MONEY HEIST</h3>
</div>

    </>
  )
}

export default Series