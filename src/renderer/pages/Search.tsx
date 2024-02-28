import { Box, Grid, Input, Select } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { AnimeCard } from '../components/AnimeCard';
import axios from 'axios';
import Lottie from 'lottie-react';
import searchAnimation from '../assets/searchAnimation.json';
import { motion } from 'framer-motion';

// This is search page whre your find anime and mangas
const SearchPage = () => {
  const [slug, setSlug] = React.useState('');
  const [data, setData] = React.useState<any>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [filter, setFilter] = React.useState<string>('');

  useEffect(() => {
    setLoading(true);
    window.scrollTo(0, 0);

    async function fetch() {
      try {
        const { data } = await axios.get(
          `http://localhost:3001/anime/search?s=${slug}`,
        );
        setData(data);
      } catch (error: any) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    }
    const delayDebounceFn = setTimeout(() => {
      if (slug.trim() !== '') {
        fetch();
      } else {
        setData([]);
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [slug]);

  return (
    <Box
      minH={'100vh'}
      padding={5}
      style={{
        backgroundColor: '#1A202C',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      <Box display={'flex'} gap={'15px'}>
        <Input
          placeholder="Search"
          variant={'outline'}
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          color={'white'}
          flex={5}
        />
        <Select
          flex={1}
          placeholder="Any"
          color="white"
          onChange={(e) => {
            setFilter(e.target.value);
          }}
        >
          <option
            value="sub"
            style={{
              color: 'black',
            }}
          >
            Sub
          </option>
          <option
            value="dub"
            style={{
              color: 'black',
            }}
          >
            Dub
          </option>
        </Select>
      </Box>
      {loading ? (
        <Lottie
          animationData={searchAnimation}
          style={{
            width: '100%',
            height: '300px',
          }}
        />
      ) : (
        <Grid
          templateColumns={[
            'repeat(1, 1fr)',
            'repeat(3, 1fr)',
            'repeat(5, 1fr)',
            'repeat(5, 1fr)',
            'repeat(5, 1fr)',
          ]}
          gap={4}
        >
          {data
            .filter((data: any) =>
              filter === '' ? data : data?.subOrDub === filter,
            )
            .map((data: any, index: number) => {
              return <AnimeCard key={index} data={data} search={true} />;
            })}
        </Grid>
      )}
    </Box>
  );
};

export default SearchPage;
