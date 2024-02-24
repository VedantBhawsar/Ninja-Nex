import { Box, Button, Heading, IconButton } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import {
  Link,
  Navigate,
  useNavigate,
  useNavigation,
  useParams,
} from 'react-router-dom';

// In this page the video will be played
const AnimePlayerPage = () => {
  const { id } = useParams();
  const animeId = id?.split('-episode')[0];
  const [data, setData] = React.useState<any>({});
  const [sources, setSources] = React.useState<
    {
      name: string;
      url: string;
    }[]
  >([
    {
      name: '',
      url: '',
    },
  ]);
  const [url, setUrl] = React.useState<string>('');

  useEffect(() => {
    async function fetchSources() {
      try {
        const { data } = await axios.get(
          `http://localhost:3001/anime/servers/${id}`,
        );
        setUrl(data[2].url);
        setSources(data);
      } catch (error: any) {
        console.log(error.message);
      }
    }
    async function fetchAnime() {
      try {
        const { data } = await axios.get(
          `http://localhost:3001/anime/fetch/${animeId}`,
        );
        setData(data);
      } catch (error: any) {
        console.log(error.message);
      }
    }
    fetchAnime();
    fetchSources();
  }, []);

  return (
    <Box h={'fit-content'}
    style={{
      backgroundColor:"#1A202C"
    }}
    
    >
      <Box position={'relative'} zIndex={999}>
        <Link to={`/anime/${data.id}`}>
          <IconButton
            aria-label="sdfskdlj"
            position={'absolute'}
            top={4}
            left={4}
            fontWeight={500}
            borderRadius={'50%'}
            variant={'ghost'}
            color={'white'}
            _hover={{
              bg: 'whiteAlpha.300',
              color: 'white',
            }}
          >
            <BiArrowBack />
          </IconButton>
        </Link>
        <Box
          w={'100vw'}
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'center'}
          p={5}
        >
          <Box w={'90vw'} h={'100vh'}>
            <iframe
              src={url ?? sources[0].url}
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              allowFullScreen
              allow="autoplay"
            ></iframe>
          </Box>
        </Box>
        <Box display={'flex'} flexDirection={'column'} p={10} gap={'15px'}>
          <Heading fontSize={'lg'}>
            Sources{' '}
            <span
              style={{
                color: 'red',
                fontWeight: 400,
                fontSize: '12px',
              }}
            >
              (Perhaps certain sources might be dysfunctional.)
            </span>
          </Heading>
          <Box display={'flex'} gap={'10px'} flexWrap={'wrap'}>
            {sources.map((source) => (
              <Button
                borderRadius={'8px'}
                size={'sm'}
                onClick={() => setUrl(source.url)}
              >
                {source.name}
              </Button>
            ))}
          </Box>
        </Box>
        <Box display={'flex'} flexDirection={'column'} p={10} gap={'15px'}>
          <Heading fontSize={'lg'}>Episodes</Heading>
          <Box display={'flex'} gap={'10px'} flexWrap={'wrap'}>
            {data?.episodes?.map((ep: any, index: number) => {
              return (
                <Link key={index} to={`/anime/${ep.id}/watch`}>
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
  );
};

export default AnimePlayerPage;
