import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import { Box } from '@chakra-ui/react';
import { Footer } from './components/Footer';

const Layout = () => {
  return (
    <Box padding={'0px'}>
      <Header />
      <Box padding={'0px 0px'}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
