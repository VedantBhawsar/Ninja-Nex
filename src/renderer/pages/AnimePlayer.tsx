import { Box, Button, Heading, IconButton, Spinner } from '@chakra-ui/react';
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
import { VideoPlayer } from '../components/VideoPlayer';
import Hls from 'hls.js';
import { title } from 'process';
import { API_URL } from '../constants';

// In this page the video will be played
const AnimePlayerPage = () => {
  const { id } = useParams();
  const animeId = id?.split('-episode')[0];
  const [data, setData] = React.useState<any>({});
  const [loading, setLoading] = React.useState<boolean>(true);
  const [sources, setSources] = React.useState<any>({});
  const [url, setUrl] = React.useState<string>('');
  const [epSource, setEpSource] = React.useState<any | null>(null);
  const downloadUrl: string = epSource?.download ?? '';

  useEffect(() => {
    window.scrollTo(0, 0);
    async function fetchSources() {
      try {
        const { data } = await axios.get(`${API_URL}/anime/sources/${id}`);
        setEpSource(data.episode);
      } catch (error: any) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    }

    async function fetchAnime() {
      try {
        const { data } = await axios.get(`${API_URL}/anime/fetch/${animeId}`);
        setData(data);
      } catch (error: any) {
        console.log(error.message);
      }
    }
    fetchAnime();
    fetchSources();
  }, [id]);

  console.log(data);

  return (
    <>
      {loading ? (
        <Box
          style={{
            height: '100vh',
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
          h={'fit-content'}
          style={{
            backgroundColor: '#1A202C',
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
              {/* <Box w={'90vw'} h={'100vh'} display={'none'}>
                <iframe
                  src={url ?? sources[0].url}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  allowFullScreen
                  allow="autoplay"
                ></iframe>
              </Box> */}
              <Box width={'90vw'} height={'100vh'}>
                <VideoPlayer
                  id={id}
                  option={{
                    url: epSource?.sources.filter(
                      (source: any) => source.quality === 'default',
                    )[0].url,
                    volume: 1,
                    customType: {
                      m3u8: function (video: any, url: string, art: any) {
                        if (Hls.isSupported()) {
                          if (art.hls) art.hls.destroy();
                          const hls = new Hls();
                          hls.loadSource(url);
                          hls.attachMedia(video);
                          art.hls = hls;
                          art.on('destroy', () => hls.destroy());
                        } else if (
                          video.canPlayType('application/vnd.apple.mpegurl')
                        ) {
                          video.src = url;
                        } else {
                          art.notice.show = 'Unsupported playback format';
                        }
                      },
                    },
                    title: 'vednat',
                    subtitle: {
                      url:
                        typeof epSource?.subtitles !== 'undefined'
                          ? epSource?.subtitles.find(
                              (sub: any) => sub.lang === 'English',
                            )?.url
                          : '',
                      type: 'vtt',
                      style: {
                        color: '#fff',
                      },
                      encoding: 'utf-8',
                    },
                    quality: epSource
                      ? epSource?.sources?.map((source: any) => ({
                          default: source?.quality === 'default',
                          html: source?.quality,
                          url: source?.url,
                        }))
                      : [],
                    isLive: false,
                    muted: false,
                    autoOrientation: true,
                    pip: true,
                    fullscreenWeb: true,
                    screenshot: true,
                    setting: true,
                    loop: false,

                    flip: true,
                    playbackRate: true,
                    aspectRatio: true,
                    autoplay: true,
                    autoSize: false,
                    autoMini: true,
                    miniProgressBar: false,
                    mutex: true,
                    backdrop: true,
                    playsInline: true,
                    autoPlayback: true,
                    airplay: true,
                    fullscreen: true,
                    subtitleOffset: false,
                    theme: '#F5316F',
                    whitelist: ['*'],
                    moreVideoAttr: {
                      crossOrigin: 'anonymous',
                    },
                  }}
                  style={{
                    width: '100%',
                    height: '90%',
                    margin: '60px auto 0',
                  }}
                  getInstance={(art: any) => console.info(art)}
                />
              </Box>
            </Box>
            <Box display={'flex'} flexDirection={'column'} p={10} gap={'15px'}>
              <Heading fontSize={'lg'} color={'white'}>
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
                <a href={downloadUrl} target="_blank">
                  <Button padding={2} borderRadius={'8px'}>
                    Download
                  </Button>
                </a>
              </Box>
            </Box>
            <Box display={'flex'} flexDirection={'column'} p={10} gap={'15px'}>
              <Heading fontSize={'lg'} color={'white'}>
                Episodes
              </Heading>
              <Box display={'flex'} gap={'10px'} flexWrap={'wrap'}>
                {data?.episodes?.map((ep: any, index: number) => {
                  return (
                    <Link key={index} to={`/anime/${ep.id}/watch`}>
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
              {/* <Buttonnpm i lottie-react onClick={() => exec('vlc')} w={'fit-content'}>Open in VlC</Buttonnpm> */}
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default AnimePlayerPage;
