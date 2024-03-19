import { Box, Heading, Text, Tooltip } from '@chakra-ui/react';
import React from 'react';
import { FaGithub, FaDiscord } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export const Footer = () => {
  return (
    <Box
      style={{
        bottom: 0,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        gap: '10px',
        borderTop: '1px solid #e2e8f0',

        backgroundColor: '#1A202C',
      }}
    >
      <Box
        style={{
          display: 'flex',
          gap: '15px',
        }}
      >
        <Tooltip label="Github" aria-label="A tooltip">
          <Link to="https://github.com/Dovakiin0/Kitsune" target="_blank">
            <FaGithub size={25} color="white" />
          </Link>
        </Tooltip>
      </Box>
      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '5px',
        }}
      >
        <Text fontSize={14} color={'gray.500'} textAlign={'center'}>
          NinjaNex does not store any files on our server, we only linked to the
          media which is hosted on 3rd party services.
        </Text>
        <Text fontSize={14} color={'gray.500'}>
          © NinjaNex. All rights reserved.
        </Text>
      </Box>
    </Box>
  );
};
