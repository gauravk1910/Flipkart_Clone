import React from 'react'
import {useEffect} from 'react'
import { styled, Box} from '@mui/material';
import {useDispatch, useSelector} from 'react-redux';

//components
import NavBar from './NavBar'
import Banner from './Banner'
import Slide from './Slide'
import MidSlide from './MidSlide';

import {getProducts} from '../../redux/actions/productActions'
import MidSection from './MidSection';

const Componenet= styled(Box)`
    padding: 10px 10px;
    background: #F2F2F2;
`

  
const Home = () => {

  const {products}=useSelector(state => state.getProducts)
  
  
  const dispatch = useDispatch();

  useEffect(() => {
    
    dispatch(getProducts());
  },[dispatch]);


  return (
    <>
        <NavBar />
        <Componenet>
            <Banner />
            <MidSlide products={products} title='Deal of the Day' timer={true}/>
            <MidSection />
            <Slide products={products} title='Discounts for You' timer={false}/>
            <Slide products={products} title='Suggesting Items' timer={false}/>
            <Slide products={products} title='Top Selection' timer={false}/>
            <Slide products={products} title='Recommended Items' timer={false}/>
            <Slide products={products} title='Trending Offers' timer={false}/>
            <Slide products={products} title="Season's Top Picks" timer={false}/>
            <Slide products={products} title='Top Deals on Accessories' timer={false}/>
        </Componenet>
        
    </>
    
  )
}

export default Home