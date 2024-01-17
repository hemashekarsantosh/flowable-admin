import React from "react";
import {
  chakra,
  Flex,
  useColorModeValue,
  Button,
  Stack,
  SimpleGrid,
  HStack,
  Spinner,
  Center,
} from "@chakra-ui/react";
import { useQuery } from "react-query";
import { getProcessInstances } from "../services/API";

export default function Instance() {
  const bg = useColorModeValue("white", "gray.800");
  const bg1 = useColorModeValue("gray.100", "gray.700");
  const bg2 = useColorModeValue("gray.500");

  const { data, isLoading } = useQuery("processInstances", getProcessInstances);

  if (isLoading) {
    return (
      <div>
        <Center>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Center>
      </div>
    );
  }

  // Display an empty table with headers if there's no response from the API
  if (!data || data.length === 0) {
    return (
      <Flex w="full" p={50} alignItems="center" justifyContent="center">
        <Stack direction={{ base: "column" }} w="full" bg={{ sm: bg }} shadow="lg">
          <SimpleGrid
            spacingY={3}
            columns={{ base: 1, sm: 6 }}
            w={{ base: 100, sm: "full" }}
            textTransform="uppercase"
            bg={bg1}
            color={bg2}
            py={{ base: 1, sm: 4 }}
            px={{ base: 2, sm: 10 }}
            fontSize="sm"
            fontWeight="bold"
          >
            <span>Process Instance</span>
            <span>Created Date</span>
            <span>Status</span>
            <span>Current Activity</span>
            <span>Process Definition</span>
            <span>Action</span>
          </SimpleGrid>
          {/* You can add a message here like "No data available" if needed */}
        </Stack>
      </Flex>
    );
  }

  // Display the table with paginated data
  const itemsPerPage = 2; // Adjust the number of items per page as needed
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const paginatedData = Array.from({ length: totalPages }, (_, index) =>
    data.slice(index * itemsPerPage, (index + 1) * itemsPerPage)
  );

  // Display the table with paginated data
  return (
    <Flex w="full" p={50} alignItems="center" justifyContent="center">
      <Stack direction={{ base: "column" }} w="full" bg={{ sm: bg }} shadow="lg">
        <SimpleGrid
          spacingY={3}
          columns={{ base: 1, sm: 6 }}
          w={{ base: 100, sm: "full" }}
          textTransform="uppercase"
          bg={bg1}
          color={bg2}
          py={{ base: 1, sm: 4 }}
          px={{ base: 2, sm: 10 }}
          fontSize="sm"
          fontWeight="bold"
        >
          <span>Process Instance</span>
          <span>Created Date</span>
          <span>Status</span>
          <span>Current Activity</span>
          <span>Process Definition</span>
          <span>Action</span>
        </SimpleGrid>
        {paginatedData.map((page, pageIndex) => (
          <React.Fragment key={pageIndex}>
            {page.map((task, pid) => (
              <Flex direction={{ base: "row", sm: "column" }} bg={bg} key={pid}>
                <SimpleGrid
                  spacingY={3}
                  columns={{ base: 1, sm: 6 }}
                  w="full"
                  py={2}
                  px={10}
                  fontWeight="medium"
                >
                  <span>{task.processInstanceId}</span>
                  <chakra.span
                    textOverflow="ellipsis"
                    overflow="hidden"
                    whiteSpace="nowrap"
                  >
                    {task.createdDate}
                  </chakra.span>
                  <span>{task.status}</span>
                  <span>{task.currentActivity}</span>
                  <span>{task.processDefinition}</span>
                  <span>
                    <HStack>
                      <Button variant="solid" w="75" colorScheme="teal" size="sm">
                        View
                      </Button>
                      <Button variant="solid" w="75" colorScheme="green" size="sm">
                        Modify
                      </Button>
                      <Button variant="solid" w="75" colorScheme="red" size="sm">
                        Reject
                      </Button>
                    </HStack>
                  </span>
                </SimpleGrid>
              </Flex>
            ))}
          </React.Fragment>
        ))}
      </Stack>
    </Flex>
  );
}
