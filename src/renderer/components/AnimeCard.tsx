import React, { useEffect } from 'react';
import { Box, Card, Heading, Image, Skeleton, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';
import { API_URL } from '../constants';
import toast from 'react-hot-toast';

export function AnimeCard({ data, search = false }: any) {
  const [animeData, setAnimeData] = React.useState<any>({});
  useEffect(() => {
    async function fetchDetails() {
      try {
        const animeDetails = await axios.get(
          `${API_URL}/tmdb?query=${data.title}`,
        );
        toast.error('Error while fetching data');
        setAnimeData(animeDetails.data.data);
      } catch (error: any) {
        console.log(error.message);
      }
    }
  }, []);

  return (
    <Link
      to={
        data?.episodeId
          ? `/anime/${data?.episodeId}/watch`
          : `/anime/${data?.id}`
      }
    >
      <motion.div
        style={{
          position: 'relative',
        }}
      >
        <Card
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
            color: 'white',
            // width: '280px',
            minHeight: '400px',
            // minWidth: '250px',
          }}
          padding={2}
        >
          <Image
            borderRadius="10px"
            width="3000px"
            objectFit="cover"
            height="400px"
            src={data?.image}
          />
          <Box display={'flex'} justifyContent={'flex-start'} width={'100%'}>
            <Heading
              fontSize="sm"
              textAlign="start"
              fontWeight={600}
              color="black"
              className="text-red-500"
              style={{
                overflow: 'hidden',
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 1,
              }}
            >
              {animeData.title ?? data?.title}
            </Heading>
          </Box>
          <Box
            display="flex"
            gap="10px"
            w="full"
            justifyContent="space-between"
          >
            {data?.releaseDate && (
              <Text fontSize="x-small" fontWeight={500} color="black">
                {data?.releaseDate}
              </Text>
            )}
            {data?.episodeNumber && (
              <Text fontSize={'x-small'} fontWeight={500} color={'black'}>
                Episodes: {data?.episodeNumber}
              </Text>
            )}
            {data?.subOrDub && (
              <Text
                fontSize="x-small"
                color="gray.600"
                backgroundColor="red.200"
                p="0px 10px"
                borderRadius="10px"
                fontWeight={500}
              >
                {data?.subOrDub}
              </Text>
            )}
          </Box>
        </Card>
      </motion.div>
    </Link>
  );
}
