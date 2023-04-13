import React, { useEffect, useState } from 'react';
import { Api_Key } from './BaseUrl';
import axios from 'axios';
import Loader from './Loader'
import { Container, HStack } from '@chakra-ui/react';
import ExchnageCard from './ExchnageCard';
import ErroeMessage from './ErroeMessage';

const Exchange = () => {

  const[exchangeData,setExchangedata]=useState([]);
  const[loading,setLoader]=useState(true);
  const[Error,setError]=useState(false);

   async function getData()
   {
    setLoader(true);
    const url=`${Api_Key}/exchanges`;
    try {

      const {data}=await axios.get(url);
      setExchangedata(data);
      setLoader(false);
      
    } catch (error) {
      setError(true)
      setLoader(false);
    }
    
   }

   useEffect(()=>{
      getData();
   },[])

   if(Error)
   {
     return <ErroeMessage message={"Error in network call"}/>
   }

     

  return (
       <Container maxW={'container.xl'} minH={'100vh'}>
        {
          loading ? <Loader/> :(
            <>
               <HStack wrap={'wrap'} justifyContent={'space-evenly'}>
                  {
                    exchangeData.map((item)=>(
                      <ExchnageCard 
                      key={item.id} 
                      name={item.name} 
                      url={item.url}
                      rank={item.trust_score_rank} 
                      img={item.image}  
                      />
                    ))
                  }
               </HStack>
            </>
          )
        }

       </Container>
  )
}

export default Exchange;