import { Box, Spinner } from '@chakra-ui/react';
import React from 'react';

const LoadingPage = () => {
  return (
    <Box
      style={{
        minHeight: '85vh',
        display: 'flex',
        backgroundColor: '#1A202C',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Spinner color="red.800" size={'xl'} />
    </Box>
  );
};

export default LoadingPage;
