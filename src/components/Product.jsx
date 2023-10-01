import React from 'react'
import styled from 'styled-components'

const Info = styled.div`
opacity: 0;
/* width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0; */
cursor: pointer;
margin: 5%;
/* background-color: rgba(0,0,0,0.2); */
position: absolute;
display: flex;
align-items: center;
justify-content: center; 
transition: all 1s ease;
`


const Container = styled.div`
flex: 1;
margin: 5px;
min-width:280px;
height: 350px;
display: flex;
align-items: center;
justify-content: center;
border-color: #f5fbfd;
/* position: relative; */

&:hover ${Info}{
    opacity: 1;
}
`
const Circle = styled.div`
/* width: 200px;
height: 200px;
border-radius: 50%;
background-color: white;
position: absolute; */

`
const Image = styled.img`
height: 100%;
/* z-index: 2; */
`

const Icon = styled.div`
margin: 5px;
width: 40px;
height: 40px;
border-radius: 50%;
background-color: white;
display: flex;
align-items: center;
justify-content: center; 
transition: all 0.5s ease;
display: flex;
align-items: center;
justify-content: center;

&:hover{
    background-color: #e9f5f5;
    transform: scale(1.1);
}
`

const Product = ({item}) => {
  return (
    <Container>
        <Circle></Circle>
        <Image src={item.img} ></Image>
        <Info>
            <Icon><i class="fa fa-shopping-cart" aria-hidden="true"></i></Icon>

            {/* <Icon><i class="fa fa-search" aria-hidden="true"></i></Icon> */}

            <Icon><i class="fa fa-heart" aria-hidden="true"></i></Icon>
        </Info>
    </Container>
  )
}

export default Product