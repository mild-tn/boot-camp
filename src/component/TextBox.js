import React from 'react'
import styled from 'styled-components'

let color = `#fff`

const P1 = styled.span`
    font-size:50pt;
    color: ${color};
		`

const P2 = styled.span`
		font-size:70pt;
		color:${color};
`
const ImgStart = styled.img`
	margin:1%;
`

const TextBox = (props) => (
	<div>
		<P1>
			<ImgStart src='/img/header-slogan-star.png'/>
			I LOVE TO MAKE
			<ImgStart src='/img/header-slogan-star.png'/>
		</P1 ><br/>
		<P2>{props.text}</P2><br/>
		< P2>LOOK AWESOME</P2 ><br/>
	</div >
)

export default TextBox