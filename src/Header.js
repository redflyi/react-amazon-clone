import React from 'react'
import styled from 'styled-components';
import amazon from './Amazon_logo.png'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { CenterFocusStrong } from '@material-ui/icons';
import {Link} from 'react-router-dom';

function Header({cartItems, user, signOut}) {

    const getCount = () => {
        let count = 0;
        cartItems.forEach((item) => {
            count += item.product.quantity;
        })

        return count;
    }

    return (
        
        <Container>
            <HeaderLogo>
                <Link to="/">
                <img src={"https://i.imgur.com/7I9Was5.png"} alt="Amazon Logo"/>
               {/*<img src={amazon} alt="Amazon Logo"/>*/}
               </Link>
            </HeaderLogo>

            <HeaderOptionAddress>
                <LocationOnIcon />
                <HeaderOption>
                    <OptionLineOne>Hello,</OptionLineOne>
                    <OptionLineTwo>Select Your Address</OptionLineTwo>
                </HeaderOption>
            </HeaderOptionAddress>

            <HeaderSearch>

                <HeaderSearchInput type="text" />
                    <HeaderSearchIconContainer>
                        <SearchIcon />
                    </HeaderSearchIconContainer>

            </HeaderSearch>

            <HeaderNavItems>

                <HeaderOption>
                    <OptionLineOneName onClick = {signOut}>Hello, {user.name}</OptionLineOneName>
                    <OptionLineTwo>Account & Lists</OptionLineTwo>
                </HeaderOption>

                <HeaderOption>
                    <OptionLineOne>Returns</OptionLineOne>
                    <OptionLineTwo>& Orders</OptionLineTwo>
                </HeaderOption>


                <HeaderOptionCart>
                <Link to ="/cart">
                    <ShoppingBasketIcon />
                    <CartCount>
                        {getCount()}
                    </CartCount>
                    </Link>
                </HeaderOptionCart>



            </HeaderNavItems>


        </Container>
    )
}

export default Header


const Container = styled.div`
height: 60px;
background-color:#0F1111;
display:flex;
align-items: center;
color:white;
justify-content:space-between;

`
const HeaderLogo = styled.div`
img{
    width:100px;
    margin-left:11px;
}
`

const HeaderOptionAddress = styled.div`
color:#fff;
padding-left:9px;
display:flex;
align-items: center;

`

const OptionLineOne = styled.div`

`
const OptionLineOneName = styled.div`
cursor:pointer;
`

const OptionLineTwo = styled.div`
font-weight: 700;
`

const HeaderSearch = styled.div`
display:flex;
flex-grow:1;
height:40px;
border-radius:8px;
overflow:hidden;
margin-left:4px;
background-color: white;
:focus-within {
    box-shadow: 0 0 0 3px #F90;
}
`

const HeaderSearchInput = styled.input`
flex-grow:1;
border:0;
:focus {
    outline:none;
}
`

const HeaderSearchIconContainer = styled.div`
background-color: #febd69;
width: 45px;
color:black;
display:flex;
justify-content:center;
align-items: center;`

const HeaderNavItems = styled.div`
display:flex;

`

const HeaderOption = styled.div`
padding:10px 9px 10px 9px;
`
const HeaderOptionCart = styled.div`
display: flex;
align-items: center;
padding-right:9px;
a {
    display:flex;
    align-items: center;
    padding-right:9px;
    color:white;
    text-decoration: none;


}
`
const CartCount = styled.div`
padding-left:4px;
font-weight:400;
color: #f08804;
`