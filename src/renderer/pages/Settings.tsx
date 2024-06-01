import { Box, Divider, Flex, Text } from '@chakra-ui/react';
import NinjaNex from '../assets/logo.png';

const SettingsPage = () => {
  return (
    <Box
      style={{
        minHeight: '85vh',
        display: 'flex',
        flexDirection: 'column',

        backgroundColor: '#1A202C',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Flex flexDir={'column'} gap={1} alignItems={'center'}>
        <Text color={'white'} fontWeight={500} fontSize={'20px'}>
          Settings Page - Team NinjaNex
        </Text>
        <Flex
          fontSize={17}
          marginTop={4}
          gap={1}
          fontWeight={500}
          alignItems={'center'}
        >
          <Text color={'gray.400'}>Vedant Bhavsar (Founder)</Text>
          <Divider
            orientation="vertical"
            color={'white'}
            style={{
              blockSize: '20px',
              padding: 1,
            }}
          />
          <Text color={'gray.400'}>Dipraj Girase Sir (Co-Founder - Supporter) </Text>
          <Divider
            orientation="vertical"
            style={{
              blockSize: '20px',
              padding: 1,
            }}
            color={'white'}
          />
          <Text color={'gray.400'}>Nehali Jaiswal (CTO) </Text>
          <Divider
            orientation="vertical"
            style={{
              blockSize: '20px',
              padding: 1,
            }}
            color={'white'}
          />
          <Text color={'gray.400'}>Dipali Bari (CEO) </Text>
        </Flex>
        <Flex
          marginTop={20}
          flexDir={'column'}
          gap={8}
          alignItems={'center'}
          backgroundColor={'gray.900'}
          padding={10}
          borderRadius={5}
          border={'1px solid #2D3748'}
        >
          <Text color={'gray.400'} fontSize={18}>
            For any inquiries or feedback, feel free to reach out to us at
            <Text color={'blue.400'}> vedantbhavsar.a10@gmail.com</Text>
          </Text>
          <Text color={'gray.400'} fontSize={18}>
            Stay tuned for exciting updates and new features! ❤️
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default SettingsPage;
