import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { HomeCarousel } from '../components/HomeCarousel';
import { AnimeCard } from '../components/AnimeCard';
import axios from 'axios';

// This is home page in this all anime will listed in form of carousal
const HomePage = () => {
  const [recentAnime, setRecentAnime] = React.useState([]);
  const [airingAnime, setAiringAnime] = React.useState([]);
  const [popularAnime, setPopularAnime] = React.useState([]);
  const [news, setNews] = React.useState([]);

  useEffect(() => {
    async function fetchRecent() {
      try {
        const { data } = await axios.get(`http://localhost:3001/anime/recent`);
        setRecentAnime(data);
      } catch (error: any) {
        console.log(error.message);
      }
    }
    async function fetchTopAiring() {
      try {
        const { data } = await axios.get(
          `http://localhost:3001/anime/top-airing`,
        );
        setAiringAnime(data);
      } catch (error: any) {
        console.log(error.message);
      }
    }
    async function fetchPopular() {
      try {
        const { data } = await axios.get(`http://localhost:3001/anime/popular`);
        setPopularAnime(data);
      } catch (error: any) {
        console.log(error.message);
      }
    }
    async function fetchNews() {
      try {
        const { data } = await axios.get(`http://localhost:3001/news/fetch`);
        setNews(data);
      } catch (error: any) {
        console.log(error.message);
      }
    }
    fetchNews();
    fetchPopular();
    fetchTopAiring();
    fetchRecent();
  }, []);

  return (
    <Box
      style={{
        backgroundColor: '#1A202C',
      }}
    >
      <Box
        style={{
          display: 'none',
          inlineSize: '100vw',
          blockSize: '80vh',
        }}
      >
        {/* <HomeCarousel /> */}
      </Box>
      <Box
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: '25px',
          gap: '50px',
        }}
      >
        <Box
          style={{
            flex: 3,
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
          }}
        >
          <Heading fontSize={25} color="white">
            Recent Episode
          </Heading>
          <Grid
            templateColumns={[
              'repeat(1, 1fr)',
              'repeat(3, 1fr)',
              'repeat(4, 1fr)',
              'repeat(4, 1fr)',
              'repeat(4, 1fr)',
            ]}
            gap={4}
          >
            {recentAnime.slice(1, 10).map((data, index) => {
              return (
                <GridItem key={index} w="fit-content">
                  <motion.div
                    initial={{
                      opacity: 0,
                    }}
                    whileInView={{
                      opacity: 1,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: 0.1,
                    }}
                  >
                    <AnimeCard data={data} />
                  </motion.div>
                </GridItem>
              );
            })}
          </Grid>
        </Box>
        <Box
          display={['none', 'none', 'none', 'flex']}
          style={{
            flex: 1,
            flexDirection: 'column',
            gap: '10px',
          }}
        >
          <Heading fontSize={25} color="white">
            News
          </Heading>
          <Box display={['flex']} flexDir={'column'} gap={'10px'}>
            {news.slice(0, 11).map((news: any, index) => {
              return (
                <a href={news?.url} target="_black">
                  <motion.div
                    initial={{
                      transform: 'scale(0.9)',
                    }}
                    whileInView={{
                      transform: 'scale(1)',
                    }}
                    transition={{
                      duration: 0.4,
                      delay: 0.1,
                    }}
                    key={index}
                  >
                    <Card
                      direction={{ base: 'row' }}
                      gap={'10px'}
                      alignItems={'start'}
                      p={3}
                      borderRadius={'15px'}
                      transition={'0.15s linear'}
                      _hover={{
                        cursor: 'pointer',
                        backgroundColor: 'gray.100',
                      }}
                    >
                      <Image
                        flex={1}
                        borderRadius={'50%'}
                        width={'0%'}
                        aspectRatio={'1/1'}
                        objectFit={'cover'}
                        src={news.thumbnail}
                      />
                      <Box flex={5}>
                        <Heading fontSize={'sm'} fontWeight={700}>
                          {news?.title}
                        </Heading>
                        <Text
                          fontSize={'sm'}
                          color={'gray.600'}
                          fontWeight={600}
                        >
                          {news?.uploadedAt}
                        </Text>
                      </Box>
                    </Card>
                  </motion.div>
                </a>
              );
            })}
          </Box>
        </Box>
      </Box>

      <Box
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: '25px',
          gap: '50px',
        }}
      >
        <Box
          style={{
            flex: 3,
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
          }}
        >
          <Heading fontSize={25} color="white">
            Popular
          </Heading>
          <Grid
            templateColumns={[
              'repeat(1, 1fr)',
              'repeat(3, 1fr)',
              'repeat(4, 1fr)',
              'repeat(4, 1fr)',
              'repeat(4, 1fr)',
            ]}
            gap={4}
          >
            {popularAnime.map((popular, index) => {
              return (
                <GridItem key={index} w="fit-content">
                  <AnimeCard data={popular} />
                </GridItem>
              );
            })}
          </Grid>
        </Box>
        <Box
          display={['none', 'none', 'none', 'flex']}
          style={{
            flex: 1,
            flexDirection: 'column',
            gap: '10px',
          }}
        ></Box>
      </Box>

      <Box
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: '25px',
          gap: '50px',
        }}
      >
        <Box
          style={{
            flex: 3,
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
          }}
        >
          <Heading fontSize={25} color="white">
            Top Airing
          </Heading>
          <Grid
            templateColumns={[
              'repeat(1, 1fr)',
              'repeat(3, 1fr)',
              'repeat(4, 1fr)',
              'repeat(4, 1fr)',
              'repeat(4, 1fr)',
            ]}
            gap={4}
          >
            {airingAnime.map((airing, index) => {
              return (
                <GridItem key={index} w="fit-content">
                  <AnimeCard data={airing} />
                </GridItem>
              );
            })}
          </Grid>
        </Box>
        <Box
          display={['none', 'none', 'none', 'flex']}
          style={{
            flex: 1,
            flexDirection: 'column',
            gap: '10px',
          }}
        ></Box>
      </Box>
    </Box>
  );
};

export default HomePage;
