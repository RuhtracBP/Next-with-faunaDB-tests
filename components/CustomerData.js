import { Divider, Stack, Text, Box } from '@chakra-ui/react';

export default function CustomerData({
  creditCard,
  firstName,
  lastName,
  telephone,
}) {
  return (
    <Stack isInline>
      <Box>
        <Text fontSize="lg" my={4} mx={4}>
          {firstName} {lastName}
        </Text>
      </Box>
    </Stack>
  );
}
