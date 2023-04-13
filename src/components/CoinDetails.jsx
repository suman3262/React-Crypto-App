import React from 'react';
import { useState,useEffect } from 'react';
import Loader from './Loader';
import { useParams } from 'react-router-dom';
import { Api_Key } from './BaseUrl';
import axios from 'axios';
import { Container,Box, HStack,Image, Radio, RadioGroup, VStack ,Text, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, Badge, Button} from '@chakra-ui/react';
import CustomBar from './CustomBar';
import Chart from './Chart';

const CoinDetails = () => {
  const[coin,setCoin]=useState([]);
  const[loading,setLoading]=useState(true);
  const[Error,setError]=useState(false);
  const[currency,setCurrency]=useState("inr");
  const currencyIcon= currency==='inr'? "₹" : currency==='usd' ?"$" :"€"
  const {id}=useParams();
  const[chartArray,setChartArray]=useState([])
  const[days,setDays]=useState("24h");

  //chosee the user track the price 
  const daysBtn=["24h","7d","14d","30d","60d","200d","365d","max"];



  async function getCoin()
   {
    setLoading(true);
    const url=`${Api_Key}/coins/${id}`;
   
    try {
      //coins setails low high and all
      const {data}=await axios.get(url);
      //get cahrat from api market cap year etc..
      const {data:chartData} =await axios.get(`${Api_Key}/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`);

      setChartArray(chartData.prices);
      setCoin(data);
      setLoading(false);
      
    } catch (error) {
      setError(true)
      setLoading(false);
    }
    
   }

   useEffect(()=>{
     getCoin()
   },[id,currency,days]);

  return (
    <>
        <Container maxW={'container.lg'}>

        {
          loading ? (<Loader/>) :(

            <>
            <Box w={'full'} borderWidth={'1'}>
               <Chart 
               arr={chartArray}
               curency={currencyIcon} 
               days={days}
               />
            </Box>

             {/* BUtton chart */}

             <HStack wrap={'wrap'} p='4'>
               {
                daysBtn.map((btn)=>(
                  <Button key={btn} onClick={()=> [setDays(btn),setLoading(true)]}>
                       {btn}
                  </Button>
                ))
               }
             </HStack>

            <RadioGroup value={currency} onChange={setCurrency}>
              <HStack spacing={4}>
              <Radio value='inr'>INR</Radio>
              <Radio value="usd">USD</Radio>
              <Radio value='eur'>EURO</Radio>
              </HStack>
           </RadioGroup>
                


              <VStack spacing={'4'} 
              padding={'16'}
              alignItems={'flex-start'}
              >
                <Text fontSize={'small'}
                alignSelf={'center'}
                opacity={'0.7'} 
                  >
                 
                 Last updated on {""}
                 {Date(coin.market_data.last_updated).split('G')[0]}
                </Text>

                <Image src={coin.image.large} 
                  w={'16'}
                  h={'16'}
                  objectFit={'contain'}
                 />

                 <Stat>

                  <StatLabel>{coin.name}</StatLabel>
                  <StatNumber>
                   {currencyIcon}{coin.market_data.current_price[currency]}
                  </StatNumber>

                  <StatHelpText>
                    <StatArrow type={ coin.market_data.price_change_percentage_24h >0 ?"increase" :'decrease'  }/>

                      {coin.market_data.price_change_percentage_24h}%
                    
                  </StatHelpText>
                 </Stat>

                 <Badge
                 fontSize={'2xl'}
                 bgColor={'blackAlpha.800'} 
                 color={'white'}
                 >
                  {`#${coin.market_cap_rank}`}
                 </Badge>

                 <CustomBar high={coin.market_data.high_24h[currency]}
                            low={coin.market_data.low_24h[currency]}
                            icon={currencyIcon}
                 />

           <Box w={"full"} p={"4"}>
              <Item 
              title={"Max Supply"} 
              value={coin.market_data.max_supply}
               />

              <Item
                title={"Circulating Supply"}
                value={coin.market_data.circulating_supply}
              />

              <Item
                title={"Market Cap"}
                value={`${currencyIcon}${coin.market_data.market_cap[currency]}`}
              />

                <Item
                title={"All time low"}
                value={`${currencyIcon}${coin.market_data.atl[currency]}`}
              />

                <Item
                title={"All time high"}
                value={`${currencyIcon}${coin.market_data.ath[currency]}`}
              />

                   </Box>
              </VStack>
            </>
          )
        }

       

        

        </Container>
    </>
  )
}

const Item=({title,value})=>{
   return (
   <HStack 
   justifyContent={'space-between'}
   w={'full'}
   marginY={'4'}
  >

  <Text letterSpacing={'widest'}>
  {title}
  </Text>
  <Text letterSpacing={'widest'}>
    {value}
  </Text>

  </HStack>
   );
}

export default CoinDetails;