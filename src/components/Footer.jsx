import { HStack, Stack ,Text} from '@chakra-ui/react';
import React from 'react'
import {AiOutlineGithub,AiFillLinkedin} from 'react-icons/ai';
import {BsFacebook,BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
       <>

          <Stack direction={['column','row']} maxW={['full','container.lg']} margin={'auto'} >
           
           <HStack p='1.5' marginLeft={['0','10']} w={['100%','50%']} justifyContent={'center'} alignItems={'center'}>
              <Text textColor={'blue'} fontFamily={'revert-layer'} fontWeight={'medium'} fontSize={'xl'}>
              All right reserved  @2023</Text> 
              <Text fontFamily={'cursive'}>BITBASH</Text>
              
           </HStack>
           <HStack p='1.5' marginLeft={['0','10']} w={['100%','50%']} spacing={'5'} justifyContent={'center'} alignItems={'center'}>
            <Text textColor={'blue'} fontSize={'xl'}>Follow us on</Text>
              <BsFacebook size={25} color='blue' cursor='pointer'/>
              <AiFillLinkedin size={25} color='blue' cursor='pointer' />
              <BsTwitter size={25} color='blue' cursor='pointer'/>
              <AiOutlineGithub size={25} color='blue' cursor='pointer'/>
           </HStack>

          </Stack>
       </>
  )
}

export default Footer;