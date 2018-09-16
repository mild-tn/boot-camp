import React from 'react'
import styled from 'styled-components'
import Topic from './Topic'

const Box = styled.div`
    border:0;
    height:90vh;
    background-color:#263a7b;
		margin:0px;
    width:18vw;
		border-radius:150px 150px 0px 0px;
`
const CardInfo = [{ img: '/img/features-icon-design.png' },
{ img: '/img/features-icon-coding.png' },
{ img: '/img/features-icon-print.png' },
{ img: '/img/features-icon-photo.png' }]

const Section = () => (
	<div className="container">
		<div className="row">
		<div className="col-12" >
			<Topic topic={'OUR MAIN SERVICES'}/>
		</div>
		</div>
		<div className="row">
			{CardInfo.map((data, i) =>
				<div className='col-3' key={i}>
					<Box >
						<img src={data.img} />
					</Box>
				</div>
			)}
		</div>
		{/* <Card/> */}
	</div>
)
export default Section