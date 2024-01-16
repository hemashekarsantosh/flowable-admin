import { HStack, Button, MenuButton ,Menu} from "@chakra-ui/react";
import {
    AiFillHome,
    AiOutlineInbox,
    AiFillAccountBook,
    AiFillCloud,
    AiFillPlusSquare
} from "react-icons/ai";
import React from "react";

export default function Menu() {
    return (
        <HStack display="flex" spacing={6} alignItems="center">
            <Button w="full" variant="solid" colorScheme="gray" leftIcon={<AiFillHome />} >
                Instancess
            </Button>
            <Button variant="solid" colorScheme="teal" w="full" leftIcon={<AiOutlineInbox />} >
                Tasks
            </Button>
            <Button w="full" variant="solid" colorScheme="pink" leftIcon={<AiFillAccountBook />}  >
                Admin
            </Button>
           
        </HStack>
    )
}