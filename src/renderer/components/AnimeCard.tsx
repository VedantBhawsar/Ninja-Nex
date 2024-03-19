import React, { useEffect } from 'react';
import { Box, Card, Heading, Image, Skeleton, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';

export function AnimeCard({ data, search = false }: any) {
  const [animeData, setAnimeData] = React.useState<any>({});
  useEffect(() => {
    async function fetchDetails() {
      try {
        const animeDetails = await axios.get(
          `http://localhost:3001/tmdb?query=${data.title}`,
        );
        setAnimeData(animeDetails.data.data);
      } catch (error: any) {
        console.log(error.message);
      }
    }
    if (search) {
      fetchDetails();
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
        initial={{
          opacity: 0.4,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 0.4,
          delay: 0.1,
        }}
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
          }}
          _hover={{
            backgroundColor: 'gray.300',
            transition: '0.1s linear',
          }}
          _active={{
            transform: 'scale(0.98)',
          }}
          padding={3}
        >
          <Image
            borderRadius="10px"
            width="100%"
            objectFit="cover"
            height="70%"
            src={data?.image}
          />
          <Heading
            fontSize="sm"
            textAlign="center"
            fontWeight={600}
            color="black"
          >
            {animeData.title ?? data?.title}
          </Heading>
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
