import { HStack, Button, MenuButton, Menu, MenuItem, MenuList } from "@chakra-ui/react";
import {
    AiFillHome,
    AiOutlineInbox,
    AiFillAccountBook,
    AiFillCloud,
    AiFillPlusSquare,
    AiFillCaretDown
} from "react-icons/ai";
import React from "react";

export default function CustomMenu() {
    return (
        <HStack display="flex" spacing={6} alignItems="center">
            <Button w="full" variant="solid" colorScheme="gray" leftIcon={<AiFillHome />} >
                Instances
            </Button>
            <Button variant="solid" colorScheme="teal" w="full" leftIcon={<AiOutlineInbox />} >
                Tasks
            </Button>
            <Button w="full" variant="solid" colorScheme="pink" leftIcon={<AiFillAccountBook />}  >
                Config
            </Button>
            <Menu>
                <MenuButton w="full" as={Button} rightIcon={<AiFillCaretDown />}>
                    Other
                </MenuButton>
                <MenuList>
                    <MenuItem>Deployment</MenuItem>
                </MenuList>
            </Menu>

        </HStack>
    )
}