import React from 'react'
import styled from 'styled-components'

const Planet = styled.img`
    z-index:20;
`
const Parallax = () => (
    <div>
        <Planet src="/img/space-small-planet.png"/>
    </div>
)
export default Parallax