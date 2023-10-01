import React from 'react'
import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'
import { mobile } from '../responsive'

const Container = styled.div`
    flex: 1;
    margin: 3px;
    position: relative;
    

`
const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
${mobile({height : "30vh"})}

`
const Info = styled.div`
position: absolute;
top: 0;
left: 0;
width : 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-left: 5px;
`
const Title = styled.h1`
color: #dbeaea;
margin-bottom: 20px;
`
const Button = styled.button`
cursor: pointer;
border: none;
padding: 10px;
background-color: #dbeaea;
color: gray;
font-weight: 600;
`


const CategoryItem = ({ item }) => {
    return (
        <Container>
            <Image src={item.img}></Image>
            <Info>
                <Title> {item.title} </Title>
                <Button><Link style={{textDecoration:"none", color:"inherit"}} to = 'productlist' className='' >SHOP NOW</Link></Button>
            </Info>
        </Container>
    )
}

export default CategoryItem