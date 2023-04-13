import { VStack,Image, Heading,Text } from '@chakra-ui/react';
import React from 'react';

const ExchnageCard = ({img,url,name,rank}) => {
  return (
    <>
     <a href={url} target='blank'>
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
            {name}
          </Heading>

          <Text>
            {rank}
          </Text>

       </VStack>
       </a>
    </>
  )
}

export default ExchnageCard;