import {
  Box,
  Button,
  Heading,
  Image,
  Spinner,
  Tag,
  Text,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

// In this page all anime episode will be listed
const AnimePage = () => {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState<any>({});

  const [animeData, setAnimeData] = React.useState<any>({});

  useEffect(() => {
    window.scrollTo(0, 0);
    async function fetchAnime() {
      try {
        const { data } = await axios.get(
          `http://localhost:3001/anime/fetch/${id}`,
        );
        setData(data);
        console.log(data);
      } catch (error: any) {
        console.log(error.message);
      }
    }

    async function fetchDetails() {
      try {
        const animeDetails = await axios.get(
          `http://localhost:3001/tmdb?query=${data.title}`,
        );
        setAnimeData(animeDetails.data.data);
      } catch (error: any) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    }
    if (data.title) {
      fetchDetails();
    } else {
      fetchAnime();
    }
  }, [id, data]);

  return (
    <>
      {loading ? (
        <Box
          style={{
            minHeight: '100vh',
            display: 'flex',
            backgroundColor: '#1A202C',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Spinner color="red.800" size={'xl'} />
        </Box>
      ) : (
        <Box
          style={{
            minHeight: '100vh',
            backgroundColor: '#1A202C',
          }}
        >
          <Box
            display={'flex'}
            p={14}
            justifyContent={'space-between'}
            alignItems={'start'}
            gap={14}
          >
            <Box
              flex={1}
              display={'flex'}
              alignItems={'center'}
              justifyContent={'center'}
            >
              <Image
                borderRadius={'10px'}
                width={'90%'}
                objectFit={'cover'}
                // height={'70%'}
                src={data?.image}
              />
            </Box>

            <Box
              flex={3}
              display={'flex'}
              flexDirection={'column'}
              gap={'20px'}
            >
              <Heading fontSize={'3xl'} color={'white'}>
                {animeData.title}
              </Heading>
              <Text fontSize={'md'} color={'gray.500'}>
                {animeData.plot}
              </Text>
              <Box display={'flex'} flexDirection={'column'} gap={'10px'}>
                <Heading fontSize={'xl'} color={'white'}>
                  Genre
                </Heading>
                <Box display={'flex'} gap={'10px'}>
                  {animeData.genre.map((genre: any) => (
                    <Tag>{genre}</Tag>
                  ))}
                </Box>
              </Box>
              <Box
                fontSize={'sm'}
                fontWeight={500}
                display={'flex'}
                flexDirection={'column'}
                gap={'5px'}
              >
                <Text color={'white'}>
                  Content type: {animeData.contentType}
                </Text>
                <Text color={'white'}>SubOrDub: {data.subOrDub}</Text>
              </Box>
              <Box>
                <Link to={`/anime/${data?.episodes[0]?.id}/watch`}>
                  <Button
                    variant={'outline'}
                    size={'sm'}
                    borderRadius={'8px'}
                    color="white"
                    _hover={{
                      background: 'white',
                      color: 'black',
                    }}
                  >
                    Watch
                  </Button>
                </Link>
              </Box>
              <Box display={'flex'} gap={'10px'} flexDirection={'column'}>
                <Heading fontSize={'16px'} color={'white'}>
                  Episodes
                </Heading>
                <Box display={'flex'} gap={'10px'} flexWrap={'wrap'}>
                  {data.episodes.map((ep: any, index: number) => {
                    return (
                      <Link to={`/anime/${ep.id}/watch`} key={index}>
                        <Button padding={2} borderRadius={'8px'}>
                          {ep.number}
                        </Button>
                      </Link>
                    );
                  })}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default AnimePage;
