import {
  Box,
  Card,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { Spinner } from '@chakra-ui/react';
import 'swiper/css';
import { AnimeCard } from '../components/AnimeCard';
import axios from 'axios';
import { API_URL } from '../constants';
import LoadingPage from './Loading';
import toast from 'react-hot-toast';
import ErrorPage from './Error';
import { useNavigate } from 'react-router-dom';
import { HeroSection } from '../components/Hero';

const HomePage = () => {
  const [loading, setLoading] = React.useState<boolean>(true);
  const [recentAnime, setRecentAnime] = React.useState([]);
  const [airingAnime, setAiringAnime] = React.useState([]);
  const [popularAnime, setPopularAnime] = React.useState([]);
  const [isError, setIsError] = React.useState<boolean>(false);
  const [news, setNews] = React.useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);

    async function fetchNews() {
      try {
        await axios
          .get(`${API_URL}/news/fetch`)
          .then((res) => setNews(res.data))
          .catch((err) => new Error('Error while featching Data'));
      } catch (error: any) {
        console.log(error.message);
      }
    }

    async function fetchAnimes() {
      try {
        await axios
          .get(`${API_URL}/anime/recent`, {
            timeout: 5000,
          })
          .then((res) => setRecentAnime(res.data))
          .catch((err) => {
            new Error('Error while featching Data');
            setIsError(true);
          });
        await axios
          .get(`${API_URL}/anime/popular`, {
            timeout: 5000,
          })
          .then((res) => setPopularAnime(res.data))
          .catch((err) => {
            new Error('Error while featching Data');
            setIsError(true);
          });
        await axios
          .get(`${API_URL}/anime/top-airing`, {
            timeout: 8000,
          })
          .then((res) => setAiringAnime(res.data))
          .catch((err) => {
            setIsError(true);
            new Error('Error while featching Data');
          });
      } catch (error: any) {
        setIsError(true);
        toast.error('Error while fetching data', {
          position: 'top-center',
        });
      } finally {
        setLoading(false);
      }
    }
    fetchAnimes();
    fetchNews();
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  if (isError) {
    navigate('/error');
    return;
  }
  return (
    <Box
      style={{
        backgroundColor: '#1A202C',
      }}
    >
      <HeroSection />
      <Box
        style={{
          display: 'none',
          inlineSize: '100vw',
          blockSize: '80vh',
        }}
      ></Box>
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
            gap: '20px',
          }}
        >
          <Heading fontSize={25} color="white">
            Recent Episode
          </Heading>
          <Flex wrap={'wrap'} gap={4} borderRight={'1px solid gray'}>
            {recentAnime.slice(0, 10).map((data, index) => {
              return <AnimeCard data={data} />;
            })}
          </Flex>
        </Box>
        <Box
          display={['none', 'none', 'none', 'flex']}
          style={{
            flex: 1.05,
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          {news.length > 1 && (
            <Heading fontSize={25} color="white">
              News
            </Heading>
          )}
          <Box
            display={['flex']}
            flexDir={'column'}
            gap={'10px'}
            flexWrap={'wrap'}
          >
            {news.slice(0, 11).map((news: any, index) => {
              return (
                <a href={news?.url} key={index} target="_black">
                  <div>
                    <Card
                      direction={{ base: 'row' }}
                      gap={'10px'}
                      alignItems={'start'}
                      p={3}
                      minWidth={'100px'}
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
                  </div>
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
            gap: '20px',
          }}
        >
          <Heading fontSize={25} color="white">
            Popular
          </Heading>
          <Flex wrap={'wrap'} gap={4} borderRight={'1px solid gray'}>
            {popularAnime.map((popular, index) => {
              return <AnimeCard data={popular} />;
            })}
          </Flex>
        </Box>
        <Box
          display={['none', 'none', 'none', 'flex']}
          style={{
            flex: 1.05,
            flexDirection: 'column',
            gap: '20px',
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
            gap: '20px',
          }}
        >
          <Heading fontSize={25} color="white">
            Top Airing
          </Heading>
          <Flex wrap={'wrap'} gap={4} borderRight={'1px solid gray'}>
            {airingAnime.map((airing, index) => {
              return <AnimeCard data={airing} />;
            })}
          </Flex>
        </Box>
        <Box
          display={['none', 'none', 'none', 'flex']}
          style={{
            flex: 1.05,
            flexDirection: 'column',
            gap: '10px',
          }}
        ></Box>
      </Box>
    </Box>
  );
};

export default HomePage;
