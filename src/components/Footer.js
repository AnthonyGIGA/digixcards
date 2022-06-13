import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import {ButtonContainer} from './Button.js';
import styled from 'styled-components';

export default class Footer extends Component {
    render() {
        return (
            <FooterElement className='footer'>
                <div className='footer-content'>
                    <img src="../img/main-logo.png" className="logo" alt=""></img>
                    <div className="footer-ul-container">
                        <ul className="category">
                            <li className="category-title"> </li>
                            <li><a href="#" className="footer-link">Digimon</a></li>
                            <li><a href="#" className="footer-link">Yu-Gi-Oh!</a></li>
                            <li><a href="#" className="footer-link">Coliseo</a></li>
                            <li><a href="#" className="footer-link">Blog</a></li>
                            <li><a href="#" className="footer-link">Somos</a></li>
                        </ul>
                        <ul className="category">
                            <li className="category-title"> </li> 
                            <li><a href="#" className="footer-link">DIGIXCARDS</a></li>
                            <li><a href="#" className="footer-link">DIGIXCARDS</a></li>  
                            <li><a href="#" className="footer-link">+56 9 56789423</a></li> 
                        </ul>
                    </div> 
                </div>
            </FooterElement>
        )
    }
}

const FooterElement = styled.nav` 
    position: relative;
    width: 100%;
    padding: 40px 10vw; 
    background:  #2D2A51;

.category li{
    margin-bottom: 10px;
}

.footer-content {
    display: flex;
    width: 100%;
    justify-content: space-between;
} 

.footer-content .logo {
    height: 70px;
    right: 0;
    margin: 5% 0;
}

.footer-ul-container {
    width: 45%;
    display: flex;
    justify-content: space-between;
}

.category {
    width: 200px;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    list-style: none;
}

.category-title {
    grid-column: span 2;
    text-transform: capitalize;
    color: #fff;
    font-size: 20px;
    margin-bottom: 20px;
}

.category .footer-link {
    text-decoration: none;
    text-transform: capitalize;
    color: rgba(255, 255, 255, 0.75);
}

.footer-link:hover {
    color: #fff;
}
 
 
`