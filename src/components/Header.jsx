import React from 'react'
import {
  Button,
  Container,
  HStack,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <HStack
        p='4'
        bgColor={'whiteAlpha.100'}
        shadow={'base'}
        borderBottom={'1px solid grey'}
      >
        <Link to='/' className='mx-14'>
          <Text fontSize={'3xl'} fontFamily={'cursive'} textColor={'blue.900'}>
            BITBASH
          </Text>
        </Link>

        <Container maxW={'container.lg'} margin={'auto'}>
          <HStack display={['none', 'flex', 'flex', 'flex']}>
            <Button variant={'unstyled'} color={'blackAlpha.700'} marginLeft={'10'}>
              <Link to='/'>Home</Link>
            </Button>

            <Button variant={'unstyled'} color={'blackAlpha.700'} marginX={'36'}>
              <Link to='/exchange'>Exchange</Link>
            </Button>

            <Button variant={'unstyled'} color={'blackAlpha.700'}>
              <Link to='/coins'>Coins</Link>
            </Button>
          </HStack>

          <Menu>
            <MenuButton
              as={IconButton}
              aria-label='Options'
              icon={<FaBars />}
              display={['flex', 'none', 'none', 'none']}
              onClick={onOpen}
            />

            <MenuList>
              <MenuItem onClick={onClose}>
                <Link to='/'>Home</Link>
              </MenuItem>

              <MenuItem onClick={onClose}>
                <Link to='/exchange'>Exchange</Link>
              </MenuItem>

              <MenuItem onClick={onClose}>
                <Link to='/coins'>Coins</Link>
              </MenuItem>
            </MenuList>
          </Menu>
        </Container>
      </HStack>
    </>
  );
};

export default Header;
