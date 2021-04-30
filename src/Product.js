import { unstable_createMuiStrictModeTheme } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import {db} from './firebase';

function Product({title, price, rating, image, id}) {

    const addToCart = () => {
        const cartItem =db.collection("cartItems").doc(id);
        cartItem.get()
        .then((doc) => {
            console.log(doc);
            if(doc.exists){
                cartItem.update({
                    quantity: doc.data().quantity + 1
                })
            } else {
                db.collection("cartItems").doc(id).set({
                    name: title,
                    image:image,
                    quantity: 1,
                    price: price
                })
            }
        })
    }
    return (
        <Container>
            <Title>{title}</Title>
            <Price>${price}</Price>
            <Rating>{
            Array(rating)
            .fill()
            .map(rating=><p>💝</p>)
            }</Rating>
            <ProductImage src ={image} />
            <ActionSection>
            <AddToCartButton onClick={addToCart}>
                Add To Cart
            </AddToCartButton>
            </ActionSection>
        </Container>
    )
}

export default Product

const Container = styled.div`
background-color:#f1f1f1;
z-index:100;
max-height:400px;
flex: 1;
padding:20px;
margin:10px;
display:flex;
flex-direction:column;
`

const Title = styled.span`

`

const Price = styled.span`
font-weight:500;
margin-top:3px;

`

const Rating = styled.div`
display:flex;
`

const ProductImage = styled.img`
max-height:200px;
object-fit:contain;
`

const AddToCartButton = styled.button`
width:100px;
background-color: #f0c14b;
border: 2px solid #a88734;
border-radius: 2px;
height: 30px;
cursor: pointer;
`

const ActionSection = styled.div`
display:grid;
place-items:center;
margin-top:12px;

`