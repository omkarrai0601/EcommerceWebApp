import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
display: flex;
justify-content: space-between;
${mobile({flexDirection : "column"})}

`
const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`
const Logo = styled.h1`

`

const Desc = styled.h2`
margin: 20px 0px;
font-weight: lighter;
`
const SocialContainer = styled.p`
display: flex;
`
const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${props => props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;

`



// const Center = styled.div`
// flex: 1;
// padding: 20px;
// /* ${mobile({display : "none"})} */
// `
const Title = styled.h3`
  margin-bottom: 60px;

`
// const List = styled.ul`
//   margin: 0;
//   padding: 0;
//   list-style: none;
//   display: flex;
//   flex-wrap: wrap;
// `
// const ListItem = styled.li`
//   width: 50%;
//   margin-bottom: 10px;
// `


const Right = styled.div`
flex: 1;
padding: 20px;
margin-left: 200px;
${mobile({backgroundColor : "#fff8f8"})}
`

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`


const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Clothing Store</Logo>
        <Desc>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias earum esse excepturi aut, eaque reprehenderit numquam perspiciatis, sed ab mollitia quod similique eius vero natus exercitationem eligendi, voluptates expedita distinctio.

        </Desc>
        <SocialContainer>
          <SocialIcon color='3B5999' >
            <i class="fa-brands fa-facebook"></i>
          </SocialIcon>

          <SocialIcon color='E4405F' >
            <i class="fa-brands fa-instagram"></i>
          </SocialIcon>

          <SocialIcon color='55ACEE' >
            <i class="fa-brands fa-twitter"></i>
          </SocialIcon>

          <SocialIcon color='E60023' >
            <i class="fa-brands fa-pinterest-p"></i>
          </SocialIcon>
        </SocialContainer>

      </Left>
      

      <Right>
        <Title>Contact</Title>
        <ContactItem>
        <i style={{marginRight:"10px"}} class="fa fa-map-marker" aria-hidden="true"></i>
          navi mumbai,maharashtra,india
        </ContactItem>
        <ContactItem>
        <i style={{marginRight:"10px"}} class="fa fa-phone" aria-hidden="true"></i>
          +918545625325
          +918545625326

        </ContactItem>
        <ContactItem>
        <i style={{marginRight:"10px"}} class="fa fa-envelope" aria-hidden="true"></i>
          contact@clothingstore.hotmail.com
        </ContactItem>

        
      </Right>



    </Container>
  )
}

export default Footer