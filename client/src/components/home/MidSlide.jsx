import React from 'react'
import { Box,styled } from '@mui/material'

import Slide from './Slide'

const Componenet=styled(Box)`
  display: flex;
`
const LeftComponenet=styled(Box)(({theme}) =>({
  width: '83%',
  [theme.breakpoints.down('md')]: {
    width: '100%'
  }
}));

const RightComponenet=styled(Box)(({theme}) => ({
  background: '#FFFFFF',
  padding: 5,
  marginTop: 10,
  marginLeft: 10,
  width: '17%',
  textAlign: 'center',
  [theme.breakpoints.down('md')]: {
    dispaly: 'none'
  }
}));

const MidSlide = ({products, title, timer}) => {

  const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';

  return (
    <Componenet>
        <LeftComponenet>
        <Slide 
            products={products} 
            title={title}
            timer={timer}
        />
        </LeftComponenet>
          
        <RightComponenet>
          <img src={adURL} alt='as' style={{width:217}}/>
        </RightComponenet>
    </Componenet>
  )
}

export default MidSlide