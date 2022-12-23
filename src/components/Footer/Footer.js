import React from 'react'
import './footer.css'
import { Container , Row , Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg = '4'>
            <div className='logo'>
              
              <div>
                <h1 className='text-white'>Multimart</h1>
                
              </div>
              
            </div>
            <p className='footer__text mt-4'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis consectetur earum aperiam modi facere beatae at totam voluptate assumenda sapiente.
            </p>

          </Col>

          <Col lg = '3'>
            <div className='footer__quick-links'>
              <h4 className='quick__links-title'>Top Categories </h4>
              <ListGroup>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Mobile Phones</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Modern Sofa</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Arm Chair</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Smart Watch</Link>
                </ListGroupItem>
              </ListGroup>
            </div>

          </Col>

          <Col lg = '2'>
          <div className='footer__quick-links'>
              <h4 className='quick__links-title'>Useful Links</h4>
              <ListGroup>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/shop'>Shop</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/cart'>Cart</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/login'>Login</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg = '3'>
          <div className='footer__quick-links'>
              <h4 className='quick__links-title'>Contact </h4>
              <ListGroup className='footer__contact'>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span><i className='ri-map-pin-line '></i></span>
                  <p>123 abc , tphcm, Vietnam</p>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span><i className='ri-phone-line'></i></span>
                  <p>0123456789</p>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span><i className='ri-mail-line'></i></span>
                  <p>abcd@gamil.com</p>
                </ListGroupItem>
                
              </ListGroup>
            </div>
          </Col>

        </Row>
      </Container>
    </footer>
  )
}

export default Footer