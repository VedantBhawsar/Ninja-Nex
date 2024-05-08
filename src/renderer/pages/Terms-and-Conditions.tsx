import { Box, Heading, Text, List, ListItem, Link } from '@chakra-ui/react';

export const TermsAndConditions = () => (
  <Box
    padding={'50px'}
    mx="auto"
    backgroundColor={'#1A202C'}
    minHeight={'85vh'}
  >
    <Heading as="h1" mb="4" textAlign="start" color={'white'}>
      Terms and Conditions for Ninjanex Anime Streaming Application
    </Heading>
    <Text mb="4" color={'gray.300'}>
      Welcome to Ninjanex, a Windows application designed for streaming anime
      content over the internet. Before using Ninjanex, please read and
      understand the following terms and conditions carefully:
    </Text>
    <List spacing={3}  color={'gray.300'} display={'flex'} gap={'1px'} flexDirection={'column'}>
      <ListItem>
        <Text>
          <strong style={{
            color:"white"
          }}>Acceptance of Terms:</strong> By downloading, installing, or
          using Ninjanex, you agree to comply with these terms and conditions.
          If you do not agree with any part of these terms, you may not use the
          application.
        </Text>
      </ListItem>
      <ListItem>
        <Text>
          <strong style={{
            color:"white"
          }}>Usage Limitations:</strong> Ninjanex is intended for personal,
          non-commercial use. You may use the application to stream anime
          content for your entertainment purposes only.
        </Text>
      </ListItem>
      <ListItem>
        <Text>
          <strong style={{
            color:"white"
          }}>Content Ownership:</strong> Ninjanex does not own or host any
          anime content. The application simply provides a platform to access
          and stream anime content available on the internet. We do not store,
          distribute, or claim ownership of any copyrighted material.
        </Text>
      </ListItem>
      <ListItem>
        <Text>
          <strong style={{
            color:"white"
          }}>Legal Compliance:</strong> Users are responsible for ensuring
          that their use of Ninjanex complies with all applicable laws and
          regulations regarding copyright, intellectual property, and online
          content consumption. Any unauthorized use or distribution of
          copyrighted material is strictly prohibited.
        </Text>
      </ListItem>
      <ListItem>
        <Text>
          <strong style={{
            color:"white"
          }}>User Responsibilities:</strong> Users must not engage in
          activities that violate the rights of others, including but not
          limited to sharing illegal or pirated content, distributing malware,
          or engaging in fraudulent activities.
        </Text>
      </ListItem>
      <ListItem>
        <Text>
          <strong style={{
            color:"white"
          }}>Privacy Policy:</strong> Your privacy is important to us.
          Please refer to our Privacy Policy for details on how we collect, use,
          and protect your personal information while using Ninjanex.
        </Text>
      </ListItem>
      <ListItem>
        <Text>
          <strong style={{
            color:"white"
          }}>Changes to Terms:</strong> We reserve the right to modify or
          update these terms and conditions at any time. It is your
          responsibility to review these terms periodically for any changes.
        </Text>
      </ListItem>
      <ListItem>
        <Text>
          <strong style={{
            color:"white"
          }}>Disclaimer of Warranty:</strong> Ninjanex is provided "as is"
          without any warranties, express or implied. We do not guarantee the
          availability, accuracy, or reliability of the content accessed through
          the application.
        </Text>
      </ListItem>
      <ListItem>
        <Text>
          <strong style={{
            color:"white"
          }}>Limitation of Liability:</strong> In no event shall Ninjanex
          or its affiliates be liable for any direct, indirect, incidental,
          special, or consequential damages arising out of your use or inability
          to use the application.
        </Text>
      </ListItem>
    </List>
    <Text mt="30" color={'gray.300'}>
      By using Ninjanex, you acknowledge that you have read, understood, and
      agreed to these terms and conditions. If you have any questions or
      concerns, please contact us at{' '}
      <Link color="blue.500" href="mailto:contact@example.com">
        contact@ninjanex.com
      </Link>
      .
    </Text>
  </Box>
);
