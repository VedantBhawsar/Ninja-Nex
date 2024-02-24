import React from 'react';
import { Box, Card, Heading, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const AnimeCard = ({ data }: any) => {
  console.log(data);
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
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 0.4,
          delay: 0.1,
        }}
      >
        <Card
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
          }}
          _hover={{
            backgroundColor: 'gray.100',
            transition: '0.3s linear',
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
          <Heading fontSize={'md'} textAlign={'start'} fontWeight={600}>
            {data?.title}
          </Heading>
          <Box
            display={'flex'}
            gap={'10px'}
            w={'full'}
            justifyContent={'space-between'}
          >
            <Text fontSize={'sm'} fontWeight={500} color={'gray.600'}>
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
