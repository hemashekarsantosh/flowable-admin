import {
  AbsoluteCenter,
  Box,
  chakra,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { AiFillHeart } from "react-icons/ai";

export default function Footer() {
  return (
    <chakra.footer
      bg="blue.200"
      w="full"
      px={{ base: 1, sm: 2 }}
      py={2}
      shadow="md"
      position={"fixed"}
      bottom={"0px"}
    >
      <Box position="relative" padding={2}>
        <AbsoluteCenter p="4" color="white" axis="both">
          <HStack>
            <Text fontWeight={"bold"}>Built with</Text>
            <AiFillHeart
              position="fixed"
              bottom="0px"
              color="red"
              size="20px"
            />
            <Text fontWeight={"bold"}>from FBSS IT</Text>
          </HStack>
        </AbsoluteCenter>
      </Box>
    </chakra.footer>
  );
}
