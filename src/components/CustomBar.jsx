import { Badge, HStack, Progress, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const CustomBar = ({high ,low,icon}) => {
  return (
    <>
       <VStack w={'full'}>

        <Progress value={50} colorScheme='facebook'  w={'full'}/>
        <HStack justifyContent={'space-between'} w={'full'}>

        <Badge children={low} colorScheme='red'>
        {`${icon} ${low}`}
        </Badge>
        <Text fontSize={'1xl'}>24H range</Text>
        <Badge children={high} colorScheme='green'>
            {`${icon} ${high}`}
        </Badge>


        </HStack>
       </VStack>
    </>
  )
}

export default CustomBar;