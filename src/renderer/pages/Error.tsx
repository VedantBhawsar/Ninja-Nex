import { Box, Button, Flex, Image, Spinner, Text } from '@chakra-ui/react';
import React from 'react';
import ErrorImage from '../assets/error-image.png';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();
  const [isStart, setIsStart] = React.useState<boolean>(false);

  return (
    <Box
      style={{
        minHeight: '85vh',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        backgroundColor: '#1A202C',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img
        src={ErrorImage}
        width={'250px'}
        alt="error image"
        draggable={false}
      />

      <Flex flexDir={'column'} gap={1} alignItems={'center'}>
        <Text color={'white'} fontWeight={500} fontSize={'20px'}>
          Something went wrong!
        </Text>
        {!isStart && (
          <Text
            style={{
              color: 'red',
              fontSize: '14px',
              fontWeight: 500,
              textAlign: 'center',
            }}
          >
            Might be due to the backend server not running.
            <br /> Click below to start the backend server.
          </Text>
        )}
      </Flex>
      {!isStart ? (
        <Link to={'https://backend1-dv9d.onrender.com'} target="_blank">
          <Button
            variant={'outline'}
            color={'white'}
            _hover={{}}
            onClick={() => {
              setTimeout(() => {
                setIsStart(true);
              }, 1000);
            }}
          >
            Start Backend
          </Button>
        </Link>
      ) : (
        <Link to={'/'}>
          <Button variant={'outline'} color={'white'} _hover={{}}>
            Reload
          </Button>
        </Link>
      )}
    </Box>
  );
};

export default ErrorPage;
