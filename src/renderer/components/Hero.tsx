import { Flex, Box, Text, Heading, Button } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import Anime from '../assets/anime.png';
import Logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { BiArrowFromLeft, BiArrowFromRight } from 'react-icons/bi';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

export function HeroSection() {
  const navigate = useNavigate();
  return (
    <Flex
      bgPosition="center"
      bgSize="cover"
      bgRepeat="no-repeat"
      p={['4', '16']}
      py={['16']}
      px={['8', '8', '16']}
      justifyContent="center"
      alignItems={['center', 'center', 'flex-start']}
      maxW={['full', 'full', 'max-lg']}
      flexDirection={['column', 'column', 'row']}
      gap={['10']}
    >
      <Box flex="1" display="flex" flexDirection="column" gap="1">
        {/* <Box
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <img
            src={Logo}
            alt="icon"
            style={{ inlineSize: '70px', blockSize: '70px' }}
          />
          <Heading fontSize={'20px'} color={'white'} mb={3}>
            NinjaNex
          </Heading>
        </Box> */}
        <Text
          fontSize={['5xl', '5xl', '6xl']}
          fontWeight="bold"
          color="white"
          maxW={['full', 'full', 'lg']}
          ml={3}
          lineHeight="120%"
          className="red-gradient"
        >
          <span
            style={{
              color: 'red',
            }}
          >
            Explore
          </span>{' '}
          The Diverse Realms of Anime{' '}
          <span
            style={{
              color: 'yellow',
            }}
          >
            Magic
          </span>
        </Text>
        <Text
          fontSize={'md'}
          ml={3}
          marginTop={5}
          fontWeight="medium"
          color="gray.300"
          maxW={'xl'}
        >
          Embark on an anime adventure like no other! Dive into a world of
          heroes, villains, and endless imagination. Discover timeless classics
          and thrilling new releases curated just for you. Let the magic of
          anime transport you to new realms of excitement and wonder!
        </Text>
        <Flex>
          <Button
            onClick={() => window.scrollTo(0, 900)}
            paddingY={6}
            borderRadius={'10px'}
            colorScheme="yellow"
            width={['200px']}
            marginLeft={3}
            marginTop={10}
          >
            Explore More
          </Button>
          <Button
            onClick={() => navigate('/anime/one-piece-dub')}
            paddingY={6}
            borderRadius={'20px 10px 100px 20px'}
            width={['250px']}
            marginLeft={3}
            marginTop={10}
            colorScheme="red"
            display={'flex'}
            gap={2}
            alignItems={'center'}
          >
            <span
              style={{
                marginBottom: '2px',
              }}
            >
              Watch Now
            </span>
            <FaArrowAltCircleRight />
          </Button>
        </Flex>
      </Box>
      <Box
        flex="1"
        w="full"
        h={['50vh', '50vh', 'auto']}
        display="flex"
        justifyContent="center"
        position="relative"
      >
        <Image src={Anime} alt="anime" objectFit="contain" />
      </Box>
    </Flex>
  );
}
