import { useEffect, useState } from 'react';
import {
  Heading,
  Flex,
  Stack,
  Box,
  Button,
  Input,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
} from '@chakra-ui/react';

export default function Home() {
  const [data, setData] = useState([]);

  async function getData() {
    const res = await fetch('/api/getCustomers');
    const newData = await res.json();
    setData(newData);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <Box>
      <Heading as="h1" my={2} textAlign="center">
        NextJS, FaunaDB and Serveless
      </Heading>
      <Heading as="h3" my={2} textAlign="center">
        Costumer Data
      </Heading>
      <Flex mt={12} align="center" justify="center">
        <Stack>
          <Heading mb={6} as="h4">
            Name:
          </Heading>
          <Heading mb={6} as="h4">
            Phone:
          </Heading>
          <Heading mb={6} as="h4">
            Credit Card:
          </Heading>
        </Stack>
      </Flex>
    </Box>
  );
}
