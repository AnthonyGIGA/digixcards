import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import {ButtonContainer} from './Button.js';
import styled from 'styled-components';

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className='navbar navbar-expand-sm navbar-dark px-sm-5'>  
                <ul className='navbar-nav align-items-center'>
                    <li className='nav-item ml-5'></li>  
                    <Link to='/' className='nav-link'>
                        <img src='..\img\main-logo.png' alt='tienda' className='navbar-brand'></img>
                    </Link>
                </ul>
                <div className="search">
                    <input type="text" className="search-box" ></input>
                    <button className="search-btn"><img className='lupaimg' src='..\img\lupa.png'></img></button>
                </div>
                <Link to='/cart' className='ml-auto'>
                    <ButtonContainer>
                        <span className='mr-2'>
                            <img src='..\img\carrito.svg' alt='cesta' className=' cesta'></img>
                        </span>   
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
background: var(--digiBG1);
.nav-link{
    text-transform:capitalize;  
    color: var(--digiWhite1) !important;
    font-size: 1.3rem;
}
.cesta {
    width: 45px;
}
.cesta:hover {
    width: 55px;
    margin-top: 5px;
    margin-right: -5px;
}

.search {
    width: 250px;
    display: flex;
    right: 15%;
    position: absolute;
}

.search-box {
    width: 80%;
    height: 40px;
    padding: 10px;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    border: none;
    text-transform: capitalize;
    background: #404c65;
    color: #fff !important;
    outline: none;
}

.search-btn {
    width: 20%;
    height: 40px;
    padding: 10px 20px;
    border: none;
    outline: none;
    cursor: pointer;
    background: #4941a4;
    color: #fff;
    text-transform: capitalize;
    font-size: 15px;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
}
.lupaimg { 
    position: absolute;
    right: 10px;
    top: 2px;
    width: 35px;
}


.search-box::placeholder {
    color: #a9a9a9;
}
`