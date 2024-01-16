import { Flex, Select, chakra, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import Menu from "./Menu";


export default function Header() {
    const bg = useColorModeValue("white", "gray.800");
    return (
        <React.Fragment>
            <chakra.header
                bg="white"
                w="full"
                px={{ base: 2, sm: 4 }}
                py={4}
                shadow="md"
            >
                <Flex alignItems="center" justifyContent="space-between" mx="auto">
                    <Flex>
                        <chakra.a
                            href="/"
                            title="Flowable Admin"
                            display="flex"
                            alignItems="center"
                        >
                        </chakra.a>
                        <chakra.h1 fontSize="xl" fontWeight="medium" ml="2">
                            Flowable Admin
                        </chakra.h1>
                    </Flex>
                    <Select w={"xs"}  placeholder="Select an App">
                        <option value="option1">XPA</option>
                        <option value="option2">PFA</option>
                    </Select>
                    <Menu/>
                </Flex>
            </chakra.header>

        </React.Fragment>
    );

}