import React from 'react';
import styled from 'styled-components';

export default function EmptyCart() {
  return <ModalEmpty className='container mt-5'>
      <div className="row">
          <div className="col-10 mx-auto text-center text-title">
              <h1>Tu carrito está vacío :c</h1>
          </div>
          <div className="col-10 mx-auto text-center "></div>
      </div>
  </ModalEmpty>;
}

const ModalEmpty = styled.div` 
height: 200px;
`