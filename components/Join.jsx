import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { BsBoxArrowDown } from "react-icons/bs";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import ScreenSize from "../Layout/ScreenSize";

const Join = () => {
    return (
        <Box  py="64px">
            <ScreenSize>
                <Box textAlign="center">
                    <Text fontSize={["22px", null, "52px"]} fontWeight="900">
                        {"🤙"}
                        <br />
                        Join Our community
                    </Text>

                    <Flex
                        gap={["16px", null, "32px"]}
                        justify="center"
                        flexDir={["column", null, "row"]}
                        mt="64px"
                    >
                        <Button
                            as="a"
                            href="https://twitter.com/azero_paladin?t=Ps2Cjq18CdlVILxjUGHVcg&s=09"
                            px={["18px"]}
                            py="25px"
                            display="flex"
                            borderRadius="30px"
                            bgColor={"brand.cyan"}
                            border="1px"
                            color="#171923"
                            _hover={{
                                color: "#fff",
                                bgColor: "brand.deepBlue",
                                border: "1px",
                                borderColor: "brand.cyan",
                            }}
                        >
                            <Text as="span" pr="15px" fontSize="25px">
                                {" "}
                                <FaTwitter />{" "}
                            </Text>
                            Follow our Twiter
                        </Button>
                        <Button
                            _hover={{
                                color: "brand.deepBlue",
                                bgColor: "brand.cyan",
                                border: "1px",
                                borderColor: "brand.cyan",
                            }}
                            as="a"
                            href="https://discord.gg/fZXkG2ecUp"
                            px={["18px"]}
                            py="25px"
                            display="flex"
                            borderRadius="30px"
                            bgColor="brand.deepBlue"
                            className="fade"
                            border="1px"
                            borderColor="brand.cyan"
                            color=""
                        >
                            <Text as="span" pr="15px" fontSize="25px">
                                {" "}
                                <FaDiscord />{" "}
                            </Text>
                            Join our Discord
                        </Button>
                    </Flex>
                </Box>

                {/* <Box>
                    <Box>
                        <Box>
                            <span>
                                <Image src="/star_6.svg" alt="" />
                            </span>
                            <span>
                                <Image src="/star_3.svg" alt="" />
                            </span>
                            <span>
                                <Image src="/star_1.svg" alt="" />
                            </span>
                            <span>
                                <Image src="/star_7.svg" alt="" />
                            </span>
                            <span>
                                <Image src="/star_4.svg" alt="" />
                            </span>
                            <span>
                                <Image src="/star_2.svg" alt="" />
                            </span>
                            <span>
                                <Image src="/star_5.svg" alt="" />
                            </span>
                        </Box>
                    </Box>
                </Box> */}
            </ScreenSize>
        </Box>
    );
};

export default Join;
