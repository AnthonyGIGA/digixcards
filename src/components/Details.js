import React, { Component } from 'react'
import { ProductConsumer } from '../context'
import { Link } from 'react-router-dom'
import { ButtonContainer } from './Button'
import styled from 'styled-components'


export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value=>{
                    const {id,color,img,info,price,title,inCart} = value.detailProduct;
                    return (
                        <ContainerDetails className='container py-5'>
                            {/* title */}
                            <div className='row'>
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            {/* end title */}
                            {/* product info */}
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <img src={img} className='img-fluid' alt='product'></img>
                                </div>
                            {/* product text */}
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h2> {title}</h2>
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                        Color : <span className='text-uppercase'> {color} </span>
                                    </h4>
                                    <h4 className='text-blue'>
                                        <strong>
                                            Valor : <span>$</span> {price}
                                        </strong>
                                    </h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                        Detalles : 
                                    </p>
                                    <p className="text-muted lead">
                                        {info}
                                    </p>
                                    <div>
                                        <Link to='/'>
                                            <ButtonContainer>
                                                Volver a productos
                                            </ButtonContainer>
                                        </Link>
                                            <ButtonContainer cart disabled={inCart ? true : false} onClick={()=>{
                                                value.addToCart(id);
                                            }}> 
                                                {inCart ? "En la cesta" : "Añadir a la Cesta"}
                                            </ButtonContainer>
                                    </div>
                                </div>
                            </div>
                        </ContainerDetails>
                    )
                }}
            </ProductConsumer>
        )
    }
}

const ContainerDetails = styled.div`
.img-fluid { 
    height: 80%;
    margin-left: 40px;
}
`
