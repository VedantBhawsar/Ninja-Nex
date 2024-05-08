import { Box, Flex, Text, Tooltip } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { IoSettingsOutline } from 'react-icons/io5';
import { FiGithub } from 'react-icons/fi';

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
        paddingTop: '20px',
        gap: '10px',
        borderTop: '1px solid #e2e8f0',
        backgroundColor: '#1A202C',
      }}
    >
      <Flex gap={'20px'}>
        <Tooltip label="Github" aria-label="github tooltip">
          <Link to="https://github.com/vedantbhawsar" target="_blank">
            <FiGithub size={28} color="white" />
          </Link>
        </Tooltip>
        <Tooltip label="Settings" aria-label="settings tooltip">
          <Link to="/settings">
            <IoSettingsOutline size={28} color="white" />
          </Link>
        </Tooltip>
      </Flex>
      <Box
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
        }}
      >
        <Text fontSize={14} color={'gray.500'} textAlign={'center'} >
          NinjaNex does not store any files on our server, we only linked to the
          media which is hosted on 3rd party services.
        </Text>
        <Flex
          width={'100%'}
          justifyContent={'space-between'}
          borderTop={'0.5px solid #2D3748 '}
          padding={3}
        >
          <Text fontSize={14} color={'gray.500'}>
            © NinjaNex-2024. All rights reserved.
          </Text>
          <Link to={'/terms-and-conditions'}>
            <Text
              fontSize={14}
              color={'gray.500'}
              _hover={{
                textDecor: 'underline',
              }}
            >
              Terms and Conditions
            </Text>
          </Link>
        </Flex>
      </Box>
    </Box>
  );
};
