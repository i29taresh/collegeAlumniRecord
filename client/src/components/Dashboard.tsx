import {Box, Heading, HStack,Center,Stack, Button} from '@chakra-ui/react'
const Dashboard = () => {
  return (
    <>
        <Center marginY={"9%"}>
            <Box >
                <Stack>
                    <HStack>
                        <Box height={'200px'} width={'200px'} border={'1px'} backgroundColor={"green.300"}>
                            <Center marginY={"35%"}>
                                <Heading>C</Heading>
                            </Center>
                        </Box>
                        <Box height={'200px'} width={'200px'} border={'1px'} backgroundColor={"blue.300"}>
                            <Center marginY={"35%"}>
                                <Heading>R</Heading>
                            </Center>
                        </Box>
                    </HStack>
                    <HStack>
                        <Box height={'200px'} width={'200px'} border={'1px'} backgroundColor={"red"}>
                            <Center marginY={"35%"}>
                                <Heading>D</Heading>
                            </Center>
                        </Box>
                        <Button>
                            <Box height={'200px'} width={'200px'} border={'1px'} backgroundColor={"yellow"}>
                                <Center marginY={"35%"}>
                                    <Heading>U</Heading>
                                </Center>
                            </Box>
                        </Button>
                    </HStack>
                </Stack>
            </Box>
        </Center>
    </>
  )
}

export default Dashboard