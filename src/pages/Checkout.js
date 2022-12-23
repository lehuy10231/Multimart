import React from 'react'
import { Container , Row, Col,Form,FormGroup } from 'reactstrap'
import CommonSection from '../components/UI/CommonSection'
import { useSelector } from 'react-redux'
import '../styles/checkout.css'
const Checkout = () => {
  const totalQty = useSelector(state=> state.cart.totalQuantity)
  const totalAmount= useSelector(state=> state.cart.totalAmount)
  return (
    <>
      <CommonSection title={Checkout}/>
      <section>
        <Container>
          <Row>
            <Col lg= '8'>
              <h6 className='mb-4 fw-bold'>Bill Information</h6>
              <Form className='bil__form'>
                <FormGroup className='form__group'>
                  <input type='text' placeholder='Enter your name'></input>
                </FormGroup>

                <FormGroup className='form__group'>
                  <input type='email' placeholder='Enter your email'></input>
                </FormGroup>

                <FormGroup className='form__group'>
                  <input type='number' placeholder='Phone number'></input>
                </FormGroup>

                <FormGroup className='form__group'>
                  <input type='text' placeholder='Street address'></input>
                </FormGroup>

                <FormGroup className='form__group'>
                  <input type='text' placeholder='City'></input>
                </FormGroup>

                <FormGroup className='form__group'>
                  <input type='text' placeholder='postal code'></input>
                </FormGroup>

                <FormGroup className='form__group'>
                  <input type='text' placeholder='Country'></input>
                </FormGroup>
              </Form>
              
            </Col>
            <Col lg='4'>
              <div className='checkout__cart'>
                <h6>             
                  Total Qty: <span>{totalQty} items</span>
                </h6>
                <h6>
                  Subtotal: <span>${totalAmount}</span>
                </h6>
                <h6>
                  <span>
                    Shipping: <br/>
                    Free shipping
                  </span> 
                  <span>$0</span>
                </h6>
                <h4>Total Cost: <span>${totalAmount}</span></h4>
                <button className='buy__btn-order auth__btn w-100 bg-white '>
                  Place an order
                </button>
              </div>
              
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Checkout