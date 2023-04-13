import { Container,HStack,Image, Stack, VStack,Text } from '@chakra-ui/react';
import React from 'react'
import main  from '../assets/download.svg'
import {FaBitcoin} from 'react-icons/fa';
import {AiOutlineArrowRight} from 'react-icons/ai'
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <>
      <Container maxW={'container.lg'} >
        
       

          <Stack direction={['column','row']} h={'80vh'}>

            {/* left part */}
            <VStack width={['90%','50%']} mt={'20'}>

            <HStack w={'fit-content'} alignItems={'center'} marginTop={'10'} > 
            <FaBitcoin size={30} color='blue'/> 
            <p className='text-xl text-blue-800'>Know about your fev. Crypto</p> 
             <Link to='/coins'><AiOutlineArrowRight size={25} color='blue' cursor='pointer'/> </Link> 
            </HStack>

            <Text fontSize={['3xl','6xl']} px={'4'} fontWeight={'bold'}>
                Jump start your crypto portfolio
            </Text>

            </VStack>

            {/* right part */}
            <VStack width={['90%','50%']} mt={'10'}>
                    <Image src={main} width={'100%'} marginTop={'10'}/>
            </VStack>
          </Stack>


      </Container>
    </>
  )
}

export default Home;