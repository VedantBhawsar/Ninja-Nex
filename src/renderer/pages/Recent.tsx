import { Box, Flex, Grid, GridItem, Heading, Spinner } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { AnimeCard } from '../components/AnimeCard';
import axios from 'axios';
import { API_URL } from '../constants';
import { InView, useInView } from 'react-intersection-observer';

const RecentPage = () => {
  const [recentAnime, setRecentAnime] = useState<any>([]);
  const [page, setPage] = useState(1);
  const { ref, inView } = useInView({
    delay: 200,
  });

  async function getRecentAnime() {
    try {
      const { data } = await axios.get(`${API_URL}/anime/recent?page=${page}`, {
        timeout: 5000,
      });
      setRecentAnime([...recentAnime, ...data.recentAnime]);
      setPage((prev) => prev + 1);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getRecentAnime();
  }, [inView]);

  return (
    <Box
      style={{
        backgroundColor: '#1A202C',
        display: 'flex',
        flexDirection: 'column',
        padding: 20,
      }}
    >
      <Heading fontSize={25} color="white">
        Recent Episode
      </Heading>
      <Grid paddingY={5} templateColumns="repeat(5, 1fr)" gap={6}>
        {recentAnime?.map((data: any, index: number) => {
          return (
            <GridItem>
              <AnimeCard key={index} data={data} />;
            </GridItem>
          );
        })}
      </Grid>

      <Flex py={'15px'} justifyContent={'center'}>
        <Spinner color="red.800" size={'md'} ref={ref} />
      </Flex>
    </Box>
  );
};

export default RecentPage;
