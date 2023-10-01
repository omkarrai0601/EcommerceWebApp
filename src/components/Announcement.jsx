import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'


const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
    margin-top: -10px;
    margin-left: -10px;
    margin-right: -10px;
    ${mobile({marginTop : "10px"})}
    
`


const Announcement = () => {
  return (
    <Container>
        Super Deal! Free Shiping on Orders Over 500rs
    </Container>
  )
}

export default Announcement