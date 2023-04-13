import React, { useEffect, useState } from 'react';
import { Api_Key } from './BaseUrl';
import axios from 'axios';
import Loader from './Loader'
import { Button, Container, HStack, Radio, RadioGroup } from '@chakra-ui/react';
import CoinCard from './CoinCard';
import ErroeMessage from './ErroeMessage';

const Coins = () => {



  const[coins,setCoins]=useState([]);
  const[loading,setLoader]=useState(true);
  const[Error,setError]=useState(false);
  const[page,setPage]=useState(1);
  const[currency,setCurrency]=useState("inr");

  let btnArray=new Array(131).fill(1);

  const currencyIcon= currency==='inr'? "₹" : currency==='usd' ?"$" :"€"

   async function getCoins()
   {
    setLoader(true);
    const url=`${Api_Key}/coins/markets?vs_currency=${currency}&page=${page}`;
    try {

      const {data}=await axios.get(url);
      setCoins(data);
      setLoader(false);
      
    } catch (error) {
      setError(true)
      setLoader(false);
    }
    
   }

   useEffect(()=>{
     getCoins()
   },[page,currency]);

   if(Error)
   {
     return <ErroeMessage message={"Error in network call"}/>
   }

     

  return (
       <Container maxW={'container.xl'} minH={'100vh'}>

       <RadioGroup value={currency} onChange={setCurrency}>
         <HStack spacing={4}>
         <Radio value='inr'>INR</Radio>
         <Radio value="usd">USD</Radio>
         <Radio value='eur'>EURO</Radio>
         </HStack>
        
       </RadioGroup>
        {
          loading ? <Loader/> :(
            <>
               <HStack wrap={'wrap'} justifyContent={'space-evenly'}>
                  {
                    coins.map((item)=>(
                      <CoinCard 
                      key={item.id} 
                      name={item.name} 
                      price={item.current_price}
                      symbol={item.symbol}
                      img={item.image}
                      id={item.id}  
                      currencyIcon={currencyIcon}
                      />
                    ))
                  }
               </HStack>

               <HStack p={'8'} w={'full'} overflowX={'auto'}>
            {
              btnArray.map((item,index)=>(
                <Button
                key={index}
                onClick={()=>setPage(index+1)} 
                bgColor={'blackAlpha.900'} 
                color={'white'} p={'2'}>
                  {index+1}
                </Button>
              ))
            }
               </HStack>
            </>
          )
        }

       </Container>
  )
}

export default Coins;