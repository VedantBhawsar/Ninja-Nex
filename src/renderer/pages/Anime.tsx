import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Spinner,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
  Text,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { API_URL } from '../constants';
import LoadingPage from './Loading';

// In this page all anime episode will be listed
const AnimePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState<any>({});
  const [animeData, setAnimeData] = React.useState<any>({});
  const [isError, setIsError] = React.useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
    async function fetchAnime() {
      try {
        const { data } = await axios.get(`${API_URL}/anime/fetch/${id}`);
        setData(data);
      } catch (error: any) {
        console.log(error.message);
        setIsError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchAnime();
  }, [id]);

  const capitalizeText = (text: string) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  if (loading) {
    return <LoadingPage />;
  }

  if (isError) {
    navigate('/');
    return;
  }

  return (
    <>
      <Stack
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

          <Box flex={3} display={'flex'} flexDirection={'column'} gap={'20px'}>
            <Heading fontSize={'3xl'} color={'white'}>
              {data.title}
            </Heading>
            <Text
              fontSize={'md'}
              color={'gray.600'}
              style={{
                display: 'flex',
                textAlign: 'justify',
                paddingBottom: '30px',
              }}
            >
              {data?.description}
            </Text>
            <Box display={'flex'} flexDirection={'column'} gap={'10px'}>
              <Text color={'white'} fontSize={'large'}>
                <b>Genre</b>: {data?.genres?.join(', ')}.
              </Text>
              <Text color={'white'} fontSize={'large'}>
                <b>Type</b>: {data?.type}.
              </Text>
              <Text color={'white'} fontSize={'large'}>
                <b>Status</b>: {data?.status}
              </Text>
              <Text color={'white'} fontSize={'large'}>
                <b>Release Date</b>: {data?.releaseDate}
              </Text>
              <Box display={'flex'} gap={'10px'}>
                {data?.genre?.map((genre: any) => <Tag>{genre}</Tag>)}
              </Box>
            </Box>
            <Box
              fontSize={'sm'}
              fontWeight={500}
              display={'flex'}
              flexDirection={'column'}
              gap={'5px'}
            >
              <Text color={'white'} fontSize={'large'}>
                <b>Content type</b>:{data?.contentType}
              </Text>
              <Text
                color={'white'}
                fontSize={'large'}
                textTransform={'capitalize'}
              >
                <b>Sub/Dub</b>: {data.subOrDub}
              </Text>
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
                {data.episodes
                  .sort((a: any, b: any) => a.number - b.number)
                  .map((ep: any, index: number) => {
                    return (
                      <Link to={`/anime/${ep.id}/watch`} key={index}>
                        <Button
                          padding={2}
                          borderRadius={'8px'}
                          backgroundColor={'gray.600'}
                          color={'gray.100'}
                          boxShadow={'1px 1px 5px #010'}
                          _hover={{
                            backgroundColor: 'gray.700',
                            color: 'gray.100',
                          }}
                        >
                          {ep.number}
                        </Button>
                      </Link>
                    );
                  })}
              </Box>
            </Box>
          </Box>
        </Box>

        <Flex
          display={'flex'}
          p={'70px'}
          justifyContent={'space-between'}
          alignItems={'start'}
          gap={14}
          color={'white'}
        >
          <Tabs colorScheme="red" width={'100%'}>
            <TabList width={'fit-content'}>
              <Tab>
                <Text fontWeight={500}>Suggested</Text>
              </Tab>
              <Tab>Trailer</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Flex
                  border={'1px solid #2D3748'}
                  minHeight={500}
                  justifyContent={'center'}
                  alignItems={'center'}
                >
                  <Text fontWeight={500} fontSize={21} color={'gray.300'}>
                    Coming Soon
                  </Text>
                </Flex>
              </TabPanel>
              <TabPanel>
                <Flex
                  border={'1px solid #2D3748'}
                  minHeight={500}
                  justifyContent={'center'}
                  alignItems={'center'}
                >
                  <Text fontWeight={500} fontSize={21} color={'gray.300'}>
                    Coming Soon
                  </Text>
                </Flex>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Stack>
    </>
  );
};

export default AnimePage;
