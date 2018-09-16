import React from 'react'
import styled from 'styled-components'


const Bar = styled.nav`
    height:40vh;
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
	<div className="row">
		<div className="col-12">
			<div className="sticky-top">
				<Bar>
					{/* <ul>
						<li>
							<a href="#">Pricing</a>
						</li>
						<li >
							<a href="#">Disabled</a>
						</li> */}
					<Img src='/img/logo.png' />
						{/* <li>
							<a href="#">Pricing</a>
						</li>
						<li >
							<a href="#">Disabled</a>
						</li>
					</ul> */}
				</Bar>
			</div>
		</div>
	</div>
)
export default Navbar