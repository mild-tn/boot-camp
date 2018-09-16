import React from 'react'
import styled from 'styled-components'


const Bar = styled.button`
    height:20vh;
    width:100%;
    margin-top:10vh;
    background-image:url('/img/top-bar-bg.png');
    background-repeat: repeat-x;
    background-color : transparent;
    border:0px;
`
const Img = styled.img`
    margin-top:-10vh;
    z-index:10;
`
const Navbar = () => (
    <div>
        <Bar className="sticky-top">
        <Img src='/img/logo.png' />
        </Bar>
        {/* <Bar /> */}
    </div>
)
export default Navbar