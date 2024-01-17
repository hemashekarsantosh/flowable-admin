import { Badge, Flex, Text } from "@chakra-ui/react";

export default function DeploymentInfo() {
    return (
        <Flex direction='column' align='center' justify='center' p='6'   borderRadius='lg'>
            <Text align='center' fontSize='xl' fontWeight='bold'>
                XPA - Exceptional Payment Approval
                <Text fontSize='sm'>1.0.0
                <Badge ml='3' fontSize='0.6em' colorScheme='green'>
                    Active
                </Badge>
                </Text>
            </Text>
        </Flex>
    )
}