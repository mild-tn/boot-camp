import React from 'react'
import styled from 'styled-components'


const TopicText = styled.div`
	margin-top:10%;
	margin-bottom:10%;
`
const Font = styled.p`
	background-image:url('/img/section-header-bg.png');
	height:15vh;
	font-size:30px;
	font-family:sans-serif;
	font-weight:bold;
	background-repeat: no-repeat;
	background-position:center;
`

const Topic = (props) => (
	<TopicText className='row'>
	<div className="col-12">
		<Font>{props.topic}</Font>
		</div>
	</TopicText>
)
export default Topic