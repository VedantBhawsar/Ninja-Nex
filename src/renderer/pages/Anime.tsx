import { Box, Button, Heading, Image, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

// In this page all anime episode will be listed
const AnimePage = () => {
  const { id } = useParams();
  const [data, setData] = React.useState<{
    id: string;
    title: string;
    image: string;
    releaseDate: string;
    description: string;
    episodes: { id: string; number: number }[];
    subOrDub: string;
    type: string;
  }>({
    id: '',
    title: '',
    image: '',
    releaseDate: '',
    description: '',
    episodes: [],
    type: '',
    subOrDub: '',
  });

  useEffect(() => {
    // Fetch anime data
    async function fetch() {
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
    fetch();
  }, [id]);
  return (
    <Box
      height={'100vh'}
      style={{
        backgroundColor: '#1A202C',
      }}
    >
      <Box
        display={'flex'}
        p={14}
        justifyContent={'space-between'}
        alignItems={'start'}
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

        <Box flex={3} display={'flex'} flexDirection={'column'} gap={'10px'}>
          <Heading fontSize={'3xl'} color={'white'}>
            {data.title}
          </Heading>
          <Text fontSize={'sm'} color={'gray.600'}>
            {data.description}
          </Text>
          <Box
            fontSize={'sm'}
            fontWeight={500}
            display={'flex'}
            flexDirection={'column'}
            gap={'5px'}
          >
            <Text color={'white'}>{data.type}</Text>
            <Text color={'white'}>SubOrDub: {data.subOrDub}</Text>
          </Box>
          <Box>
            <Link to={`/anime/${data?.episodes[0]?.id}/watch`}>
              <Button variant={'outline'} size={'sm'} borderRadius={'8px'}
              color='white'
              _hover={{
                background: 'white',
                color: 'black'
              }}
              >
                Watch
              </Button>
            </Link>
          </Box>
          <Box display={'flex'} gap={'10px'} flexDirection={'column'}>
            <Heading fontSize={'16px'} color={'white'}>Episodes</Heading>
            <Box display={'flex'} gap={'10px'} flexWrap={'wrap'}>
              {data.episodes.map((ep, index) => {
                return (
                  <Link to={`/anime/${ep.id}/watch`}>
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
  );
};

export default AnimePage;
