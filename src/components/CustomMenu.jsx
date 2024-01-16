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
import { useNavigate } from "react-router-dom";

export default function CustomMenu() {

    let navigate = useNavigate();
    const instanceRoute = () => {
        let path = '/instance';
        navigate(path);
    }
    const taskRoute = () => {
        let path = '/tasks';
        navigate(path);
    }

    const deploymentRoute = () => {
        let path = '/deploymentInfo';
        navigate(path);
    }
    return (
        <HStack display="flex" spacing={6} alignItems="center">
            <Button w="full" variant="solid" colorScheme="gray" leftIcon={<AiFillHome />} onClick={instanceRoute} >
                Instances
            </Button>
            <Button variant="solid" colorScheme="teal" w="full" leftIcon={<AiOutlineInbox />}  onClick={taskRoute} >
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
                    <MenuItem onClick={deploymentRoute}> Deployment </MenuItem>
                </MenuList>
            </Menu>

        </HStack>
    )
}