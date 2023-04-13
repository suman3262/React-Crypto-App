import React from 'react'
import { Spinner } from '@chakra-ui/react';
const Loader = () => {
  return (
       <>
        <div className='w-screen h-screen flex justify-center items-center absolute'>
              
        <Spinner
          thickness='4px'
          speed='0.65s'
           emptyColor='gray.200'
          color='blue.500'
         size='lg'
         />

            
        </div>

       </>
  )
}

export default Loader;