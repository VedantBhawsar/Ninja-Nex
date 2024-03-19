import { Box, Button, Flex, Heading, IconButton, Text } from '@chakra-ui/react';
import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';


export const Header = () => {
  return (
    <Flex
      padding={['5px 25px']}
      zIndex={999}
      style={{
        backgroundColor: '#1A202C',
        color: 'white',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '1px 1px 10px gray',
        inlineSize: '100vw',
      }}
    >
      <Link to={'/'}>
        <Box
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            transition: '0.3s ease-in-out',
          }}
          _hover={{
            cursor: 'pointer',
          }}
          _active={{
            transform: 'scale(0.9)',
          }}
        >
          <img
            src={logo}
            alt="icon"
            style={{ inlineSize: '50px', blockSize: '50px' }}
          />
          <Heading size={'20'} color={'white'} >
            NinjaNex
          </Heading>
        </Box>
      </Link>
      <Box>
        <Link to={'/search'}>
          <IconButton
            colorScheme="white"
            aria-label="Search database"
            icon={<BiSearch />}
            variant="outline"
            style={{
              color: 'white',
              border: '0px',
              transition: '0.3s ease-in-out',
            }}
            _hover={{
              cursor: 'pointer',
            }}
            _active={{
              transform: 'scale(0.9)',
            }}
          />
        </Link>
      </Box>
    </Flex>
  );
};
