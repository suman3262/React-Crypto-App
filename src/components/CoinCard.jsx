import { VStack,Image, Heading,Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import React from 'react';

const CoinCard = ({img,name,id,symbol,price,currencyIcon="₹"}) => {
  return (
    <>
     <Link to={`/coins/${id}`}>
       <VStack w={'52'} shadow={'lg'} p={'8'} borderRadius={'lg'} m='4'
       transition={'all 0.3s'}
     
        css={{
            "&:hover":{
               transform:"scale(1.1)"
            }
        }}
       >
          <Image src={img} w='10' h='10' objectFit={'contain'} />
          <Heading size='md' noOfLines={'1'}>
            {Symbol}
          </Heading>

          <Text>
            {name}
          </Text>
          <Text>
            {
                price ? (`${currencyIcon} ${price}`) :("NA")
            }
          </Text>

       </VStack>
       </Link>
    </>
  )
}

export default CoinCard;