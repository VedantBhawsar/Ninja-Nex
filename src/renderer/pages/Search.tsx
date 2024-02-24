import { Box, Grid, Input } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { AnimeCard } from '../components/AnimeCard';
import axios from 'axios';

// This is search page whre your find anime and mangas
const SearchPage = () => {
  const [slug, setSlug] = React.useState('');
  const [data, setData] = React.useState([]);

  useEffect(() => {
    async function fetch() {
      try {
        const { data } = await axios.get(
          `http://localhost:3001/anime/search?s=${slug}`,
        );
        setData(data);
      } catch (error: any) {
        console.log(error.message);
      }
    }
    fetch();
  }, [slug]);

  return (
    <Box
      minH={'100vh'}
      padding={5}
      style={{
        backgroundColor: '#1A202C',
        display: 'flex',
        flexDirection: 'column',
        gap:'20px'
      }}
    >
      <Input
        placeholder="Search"
        variant={'outline'}
        value={slug}
        onChange={(e) => setSlug(e.target.value)}
        color={'white'}
      />
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
        {data.map((data, index) => {
          return <AnimeCard data={data} />;
        })}
      </Grid>
    </Box>
  );
};

export default SearchPage;
