
import { AddCircle, RemoveCircle } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import { mobile } from '../responsive'

const Container = styled.div`

`
const Wrapper = styled.div`
padding: 50px;
display: flex;
${mobile({padding : "10px",flexDirection:"column"})}
`

const ImgContainer = styled.div`
flex: 1;
`

const Image = styled.img`
width: 100%;
height: 90vh;
object-fit: cover;
${mobile({height : "50vh"})}
`

const InfoContainer = styled.div`
flex: 1;
padding: 0px 50px;
${mobile({padding : "10px"})}
`

const Title = styled.h1`
font-weight: 200;
`

const Desc = styled.p`
margin: 20px 0px;
`

const Price = styled.span`
font-weight: 100;
font-size: 40px;
`

const FilterContainer = styled.div`
width: 50%;
margin: 30px 0px;
display: flex;
justify-content: space-between;
${mobile({width : "100%"})}
`

const Filter = styled.div`
display: flex;
align-items: center;
`

const FilterTitle = styled.span`
font-size: 20px;
font-weight: 200;
`

const FilterColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props =>props.color};
margin: 0px 5px;
cursor: pointer;
`

const FilterSize = styled.select`
margin-left:5px;
padding: 5px;
`

const FilterSizeOption = styled.option``

const AddContainer = styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;
${mobile({width : "100%"})}
`

const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;
`

const Amount = styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid teal;
display: flex;
align-items: center;
justify-content: center;
margin: 0px 5px;
`

const Button = styled.button`
padding: 15px;
border: 2px solid teal;
background-color: white;
cursor: pointer;
font-weight: 500;

&:hover{
    background-color: #f8f4f4 ;
}
`


const Product = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />

            <Wrapper>
                <ImgContainer>
                    <Image src="https://images.unsplash.com/photo-1511414090701-b0ec7b2f21aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGVuaW0lMjBqdW1wZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"></Image>
                </ImgContainer>

                <InfoContainer>
                    <Title>Denim Jumpsuit</Title>
                    <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae reiciendis sint itaque veniam blanditiis a dolores vel inventore in, harum aperiam officiis incidunt rerum nam animi totam reprehenderit tenetur expedita.</Desc>
                    <Price><i class="fa fa-inr" aria-hidden="true"></i>2999</Price>
                    <FilterContainer>
                        <Filter>
                            {/* using props for bgcolor  */}
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black" ></FilterColor>
                            <FilterColor color="darkblue"></FilterColor>
                            <FilterColor color="gray" ></FilterColor>
                        </Filter>

                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>

                    <AddContainer>
                        <AmountContainer>
                            
                            <RemoveCircle />
                            <Amount>1</Amount>
                            <AddCircle />
                           
                        </AmountContainer>

                        <Button>ADD TO CART</Button>
                    </AddContainer>

                </InfoContainer>
            </Wrapper>

            <Newsletter />
            <Footer />
        </Container>
    )
}

export default Product