import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Spinner,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import ErrorImage from '../assets/error-image.png';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const ErrorPage = ({ errorMessage }: { errorMessage?: string }) => {
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
      <Heading color="white" fontSize={25}>
        {errorMessage ?? ' Something went wrong !!'}
      </Heading>
      <Link to={'/'}>
        <Button colorScheme="yellow" width={40} fontWeight={500}>
          Reload
        </Button>
      </Link>
    </Box>
  );
};

export default ErrorPage;
