import Head from "next/head";
import {
    Box,
    Heading,
    Container,
    Text,
    Button,
    Stack,
    Icon,
    useColorModeValue,
    createIcon,
    Image,
    Link,
} from "@chakra-ui/react";
import ScreenSize from "../Layout/ScreenSize";
import Scroll from "./Scroll";

export default function Hero() {
    return (
        <Box>
            <Box
                bgImage="/banner_bg.jpg"
                bgPos="center"
                bgSize="cover"
                pt={"20px"}
            >
                <ScreenSize position={"relative"}>
                    <Box className="banner-shape-wrap lowZ">
                        <Image
                            src="/banner_shape01.png"
                            position={"absolute"}
                            className="img-one lowZ"
                            alt="image-animation"
                            w={["100px", null, "auto"]}
                            display={["none", null, "block"]}
                        />
                        <Image
                            src="/banner_shape02.png"
                            position={"absolute"}
                            className="img-two"
                            display={["none", null, "block"]}
                            alt="image-animation"
                        />
                        <Image
                            src="/banner_shape03.png"
                            position={"absolute"}
                            className="img-three"
                            alt="image-animation"
                            display={["none", null, "block"]}
                        />
                    </Box>
                    <Stack
                        zIndex={"overlay"}
                        as={Box}
                        textAlign={"center"}
                        spacing={{ base: 8, md: 14 }}
                        py={{ base: 20, md: 48 }}
                    >
                        <Box maxW="900px" mx="auto">
                            <Heading
                                className="highZ"
                                fontWeight={600}
                                fontSize={{ base: "2xl", sm: "4xl", md: "5xl" }}
                                lineHeight={"110%"}
                            >
                                Join {" "}
                                <Text as="span" color="brand.cyan">
                                    AzeroPaladin NFT
                                </Text>{" "}
                      and come celebrate the legends
                                of AlephZero with us!!{" "}
                            </Heading>

                            <Button
                                mt={["20px", null, "50px"]}
                                bgColor="brand.deepBlue"
                                borderRadius="70px"
                                className="btn"
                                _hover={{
                                    bgColor: "brand.deepBlue",
                                    outline: "none",
                                }}
                                _active={{
                                    bgColor: "brand.deepBlue",
                                    outline: "none",
                                }}
                                py="20px"
                                px="32px"
                                border="2px"
                                borderColor="brand.cyan"
                                fontWeight="400"
                                fontSize="16px"
                                as="a"
                                href="#whitelist"
                            >
                                Check WL
                            </Button>
                        </Box>
                    </Stack>
                </ScreenSize>
            </Box>
            <Scroll />
        </Box>
    );
}
