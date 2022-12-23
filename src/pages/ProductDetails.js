import React,{useState,useRef} from 'react'
import { Container,Row,Col } from 'reactstrap'
import { useParams } from 'react-router-dom'
import products from '../assets/data/products'
import CommonSection from '../components/UI/CommonSection'
import '../styles/product-details.css'
import ProductsList from '../components/UI/ProductsList'
import  {toast} from 'react-toastify'
import { useDispatch } from 'react-redux'
import { cartActions } from '../redux/slices/cartSlice'
const ProductDetails = () => {
  const {id} = useParams()
  const [tab,setTab] = useState('desc')
  const [rating,setRating] = useState(null)
  const reviewUser = useRef()
  const reviewMsg = useRef()
  const dispatch = useDispatch()
  const product = products.find(item=> item.id === id)
  const {imgUrl,productName,price,avgRating,reviews, description,shortDesc,category} = product;
  const relatedProducts = products.filter(item=> item.category === category)
  const submitHandler = (e) => {
    e.preventDefault()
    const reviewUserName = reviewUser.current.value
    const reviewUserMsg = reviewMsg.current.value
  }
  const addToCart = ()=> {
    dispatch(
      cartActions.addItem({
        id,
        image: imgUrl,
        productName,
        price,
      })
    )
    toast.success('Product added successfully')
  }
  return (
    <>
      <CommonSection title={productName}/>
      <section className='pt-0'>
        <Container>
          <Row>
            <Col lg='6'>
              <img src={imgUrl}></img>
            
            </Col>
            <Col lg='6'>
              <div className='product__details'>
                <h2>{productName}</h2>
                <div className='product__rating d-flex align-items-center gap-5 mb-3 '>
                  <div>
                    <span onClick={()=> setRating(1)}><i className='ri-star-s-fill'></i></span>
                    <span onClick={()=> setRating(2)}><i className='ri-star-s-fill'></i></span>
                    <span onClick={()=> setRating(3)}><i className='ri-star-s-fill'></i></span>
                    <span onClick={()=> setRating(4)}><i className='ri-star-s-fill'></i></span>
                    <span onClick={()=> setRating(5)}><i className='ri-star-half-s-line'></i></span>

                  </div>
                <p>(<span>{avgRating}</span>ratings)</p>
                </div>
                <span className='product__price'>${price}</span>
                <p className='mt-3'>{shortDesc}</p>
                <button className='buy__btn' onClick={addToCart}>Add to cart</button>
                 
              </div>
            
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <div className='tab__wrapper d-flex align-items-center gap-5'>
                <h6 className={`${tab ==='desc' ? 'active__tab' : ''}`} onClick={()=> setTab('desc')}>
                  Description
                </h6>
                
                <h6 className={`${tab ==='rev' ? 'active__tab' : ''}`} onClick={()=> setTab('rev')}> 
                  Reviews({reviews.length})
                </h6>
                
              </div>
              { tab === 'desc' ? (
              
              <div className='tab__content mt-5'>
              <p>{description}</p>
              </div>) : (<div className='product__review mt-5'>
                <div className='review__wrapper'>
                  <ul>
                    {
                      reviews?.map((item,index)=>(
                        <li key={index} className='mb-4'>
                          <h6>Jhon Doe</h6>
                          <span>{item.rating} (rating)</span>
                        <p>{item.text}</p></li>
                      ))
                    }
                  </ul>
                </div>
                <div className='review__form'>
                  <h4>Leave your experience</h4>
                  <form action='' onSubmit={submitHandler}>
                    <div className='form__group'>
                      <input type='text' placeholder='Enter name' ref={reviewUser}></input>
                    </div>
                    <div className='form__group  d-flex align-items-center gap-5'>
                      <span>1 <i className='ri-star-s-fill'></i> </span>
                      <span>2 <i className='ri-star-s-fill'></i> </span>
                      <span>3 <i className='ri-star-s-fill'></i> </span>
                      <span>4 <i className='ri-star-s-fill'></i> </span>
                      <span>5 <i className='ri-star-s-fill'></i> </span>
                      
                    </div>
                    <div className='form__group'>
                      <textarea 
                        ref={reviewMsg}
                        rows={4} 
                        type='text' 
                        placeholder='Review Message....'></textarea>
                    </div>
                    <button type='submit' className='buy__btn'>Submit</button>
                  </form>
                </div>
              </div>
              )}
            </Col>
            <Col lg='12' className='mt-5'>
              <h2 className='related__title'>You might also like</h2>
            </Col>
            <ProductsList data={relatedProducts}/>
          </Row>
        </Container>
      </section>
    
    </>
    
  )
}

export default ProductDetails