import React, { Component } from 'react'
import Product from './Product';
import Title from './Title';
import { ProductConsumer } from '../context';
import styled from 'styled-components';

export default class MainPage extends Component { 
    render() {

        return (
            <React.Fragment>
                <div className='py-5'>
                    <div className='container'> 
                        <HeroRow className='row pre-hero'>  
                            <div className="hero-section"> 
                                <div className="content content-hero"> 
                                    <div className="sub-heading"> 
                                        <p >Información</p>
                                        <p >lorem ipsum s</p>
                                        <button className='hero-button'> Ver más</button>
                                    </div>
                                </div>
                            </div>
                        </HeroRow>
                        <ProductRow1 className='mt-5'> 
                            <section className="row product">
                                <h2 className="product-category">
                                    Destacados
                                </h2> 
                                <div className="product-container">
                                    
                                    <div className="product-card">
                                        <div className="product-image"> 
                                            <img src="../imgtemp/card1.png" alt="" className="product-thumb"/> 
                                        </div>
                                        <div className="product-info">
                                            <h2 className="product-brand">Yu-Gi-Oh!</h2> 
                                        </div>
                                    </div>
                                    
                                    <div className="product-card">
                                        <div className="product-image"> 
                                            <img src="../imgtemp/card2.png" alt="" className="product-thumb"/> 
                                        </div>
                                        <div className="product-info">
                                            <h2 className="product-brand">Digimon</h2> 
                                        </div>
                                    </div>
                                    
                                    <div className="product-card">
                                        <div className="product-image"> 
                                            <img src="../imgtemp/card3.png" alt="" className="product-thumb"/> 
                                        </div>
                                        <div className="product-info">
                                            <h2 className="product-brand">Blog</h2> 
                                        </div>
                                    </div>
                                    
                                    <div className="product-card">
                                        <div className="product-image"> 
                                            <img src="../imgtemp/card4.png" alt="" className="product-thumb"/> 
                                        </div>
                                        <div className="product-info">
                                            <h2 className="product-brand">Coliseo</h2> 
                                        </div>
                                    </div>
                                    
                                </div>
                            </section>
                        </ProductRow1>
                    </div>
                </div>  
            </React.Fragment>
        )
    }
}

const HeroRow = styled.div` 
height: 590px;
width: 95%;
margin: auto;

.hero-section {
    width: 100%; 
    height: 100%; 
    background-image: url('../imgtemp/img-promo-1.jpg');
    background-size: cover;
    display: flex; 
    align-items: self-end;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
}

.hero-section .logo {
    height: 150px;
    display: block;
    margin: auto;
}

.hero-button {
    background-color: #7476bd;
    color: white;
    border: none;
    font-size: 20px;
    width: 159.93px;
    height: 48px;
    border-radius: 100px;
}

.hero-button:hover {
    background-color: white;
    color: #7476bd;
    cursor: pointer; 
}

.content-hero {
    width: 100%;
}

.hero-section .sub-heading {
    margin-top: 10px;
    text-align: center;
    color: #fff;
    background-color: #4941A4;
    text-transform: capitalize;
    height: 130px;
    font-size: 35px;
    font-weight: 300;
    margin-bottom: inherit;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;

    
    position: relative; 
    display: flex; 
    align-items: center; 
    justify-content: space-between;
    padding: 55px !important;
} 
 
`
const ProductRow1 = styled.div`  
width: 100%;
margin: auto;
 

.product {
    position: relative;
    overflow: hidden;
    padding: 20px 0;
    color: #fff !important;
}

.product-category {
    padding: 0 10vw;
    font-size: 30px;
    font-weight: 500;
    margin-bottom: 40px;
    text-transform: capitalize;
}

.product-container {
    padding: 0 1vw;
    display: flex; 
    scroll-behavior: smooth;
}

.product-container::-webkit-scrollbar {
    display: none;
}

.product-card {
    flex: 0 0 auto;
    width: 250px; 
    margin-right: 40px;
}

.product-image {
    position: relative;
    width: 100%; 
    overflow: hidden;
}

.product-thumb {
    width: 100%; 
    object-fit: cover;
} 

.product-info {
    width: 100%;
    height: 100px;
    padding-top: 10px;
}
 
 
 
`