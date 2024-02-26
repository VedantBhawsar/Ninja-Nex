import React from 'react';
import { Box, Card, Heading, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const AnimeCard = ({ data }: any) => {
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
            borderRadius={'10px'}
            width={'100%'}
            objectFit={'cover'}
            height={'70%'}
            src={data?.image}
          />
          <Heading
            fontSize={'md'}
            textAlign={'start'}
            fontWeight={600}
            color={'black'}
          >
            {data?.title}
          </Heading>
          <Box
            display={'flex'}
            gap={'10px'}
            w={'full'}
            justifyContent={'space-between'}
          >
            <Text fontSize={'sm'} fontWeight={500}>
              {data?.releaseDate}
            </Text>
            <Text
              fontSize={'sm'}
              color={'gray.600'}
              backgroundColor={'red.200'}
              p={'0px 10px'}
              borderRadius={'10px'}
              fontWeight={500}
            >
              {data?.subOrDub}
            </Text>
          </Box>
        </Card>
      </motion.div>
    </Link>
  );
};
