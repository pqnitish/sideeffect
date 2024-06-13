import { Spinner, VStack } from "@chakra-ui/react";
export default function LoadingIndicator() {
  return (
    <VStack>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </VStack>
  );
}
