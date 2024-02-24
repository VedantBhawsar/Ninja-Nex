import { Box, Button, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';
import { motion } from 'framer-motion';

export const HomeCarousel = () => {
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay={{ delay: 3000 }}
        style={{
          inlineSize: '100%',
          blockSize: '100%',
        }}
      >
        {Array(5)
          .fill('')
          .map(() => {
            return (
              <SwiperSlide
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  inlineSize: '100%',
                  blockSize: '100%',
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                  className="text-box"
                  style={{
                    position: 'relative',
                    flex: 1,
                    blockSize: '100%',
                    display: 'flex',
                    alignItems: 'end',
                    padding: '150px 50px',
                  }}
                >
                  <Box
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'flex-start',
                      gap: '15px',
                    }}
                  >
                    <Heading fontSize={26}>
                      Heading Heading Heading Heading Heading Heading Heading
                      Heading Heading
                    </Heading>
                    <Text>passage</Text>
                    <Box
                      style={{
                        display: 'flex',
                        gap: '15px',
                      }}
                    >
                      <Button
                        colorScheme="gray"
                        variant={'outline'}
                        style={{
                          borderRadius: '10px',
                        }}
                      >
                        Add To Watchlist
                      </Button>
                      <Button
                        colorScheme="gray"
                        variant="solid"
                        style={{
                          borderRadius: '10px',
                        }}
                      >
                        Watch Now
                      </Button>
                    </Box>
                  </Box>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: -30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                  className="image-box"
                  style={{
                    flex: 1,
                    blockSize: '100%',
                    display: 'flex',
                    alignItems: 'end',
                    justifyContent: 'end',
                    padding: '0px 100px',
                  }}
                >
                  <img
                    src="https://gogocdn.net/cover/yubisaki-to-renren-1704252298.png"
                    alt=""
                    style={{
                      inlineSize: '70%',
                      objectFit: 'cover',
                      borderRadius: '10px',
                    }}
                  />
                </motion.div>
                {/* <Box
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              inlineSize: '100%',
              blockSize: '100%',
              zIndex: -1,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <img
              src="https://img.flawlessfiles.com/_r/1366x768/100/50/af/50affe2ea9a02c36d5a7c0532c1b7ef9/50affe2ea9a02c36d5a7c0532c1b7ef9.jpeg"
              alt=""
              style={{
                inlineSize: '100%',
                blockSize: '100%',
                objectFit: 'cover',
                // filter: 'blur(10px)',
                zIndex: -1,
              }}
            />
          </Box> */}
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
};
