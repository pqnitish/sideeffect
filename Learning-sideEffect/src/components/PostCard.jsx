import { Card, CardHeader, CardBody, CardFooter,Heading,Box,Text,StackDivider,Stack,Container } from "@chakra-ui/react";
export default function PostCard({userId,id,title,body}) {
  return (
    <Container maxW={"80%"}>
    <Card>
      <CardHeader>
        <Heading size="md">{title}</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Description:
            </Heading>
            <Text pt="2" fontSize="sm">
             {body}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
             UerId:
            </Heading>
            <Text pt="2" fontSize="sm">
              {userId}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
             ID:
            </Heading>
            <Text pt="2" fontSize="sm">
              {id}
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
    </Container>
  );
}
