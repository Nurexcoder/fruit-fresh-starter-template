import React from 'react'
import styled from 'styled-components'
import img from '../img2.jpg'

const Container = styled.div`
    flex:3;
    background: url(${img}) rgba(0,0,0,1);
    background-repeat: no-repeat;
    background-size:100%;
    z-index: 100;
    filter: brightness(15%);
    `
export const Right = () => {
    return (
        <Container>
            </Container>
    )
}
