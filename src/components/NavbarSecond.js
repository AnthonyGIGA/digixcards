import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import {ButtonContainer} from './Button.js';
import styled from 'styled-components';

export default class NavbarSecond extends Component {
    render() {
        return (
            <NavWrapperSecond className='navbar navbar-expand-sm navbar-dark px-sm-5'>
                
                <ul className='navbar-nav align-items-center'> 
                    <li className="Link-item nav-item ml-5">
                        <Link to='/productos' className='nav-link link'><img className='img-icon-menu' src='../img/icon-menu-digimon.svg'></img> Digimon</Link>
                    </li>
                    <li className="Link-item nav-item ml-5">
                        <Link to='/' className='nav-link link'><img className='img-icon-menu' src='../img/icon-menu-yugui.svg'></img> Yu-Gi-Oh!</Link>
                    </li>
                    <li className="Link-item nav-item ml-5">
                        <Link to='/' className='nav-link link'><img className='img-icon-menu' src='../img/icon-menu-coliseo.svg'></img> Coliseo</Link>
                    </li>
                    <li className="Link-item nav-item ml-5">
                        <Link to='/' className='nav-link link'><img className='img-icon-menu' src='../img/icon-menu-blog.svg'></img> Blog</Link>
                    </li> 
                </ul>
            </NavWrapperSecond>
        )
    }
}

const NavWrapperSecond = styled.nav`
background: var(--digiNav1);
.nav-link{
    text-transform:capitalize;  
    color: var(--digiWhite1) !important; 

    font-size: 1.3rem;
    width: 100%;
    display: flex;
    justify-content: center;
    list-style: none; 
}
.navbar-nav{
    margin: auto;
}

.link {
    text-transform: capitalize;
    padding: 0 10px;
    margin: 0 5px;
    text-decoration: none;
    color: var(--digiWhite1) !important; 
    transition: 0.5s;
    opacity: 0.5;
}

.link:hover {
    opacity: 1;
}

.img-icon-menu { 
    margin-right: 10px; 
}
`