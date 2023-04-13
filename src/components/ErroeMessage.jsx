import React from 'react';
import { Text } from '@chakra-ui/react';
const ErroeMessage = ({message}) => {
  return (
   <>
     <Text>
        {message}
     </Text>
   </>
  )
}

export default ErroeMessage;