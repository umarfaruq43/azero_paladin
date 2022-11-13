import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import ScreenSize from "../Layout/ScreenSize";
import Que from "./Que";

const Faq = () => {
    return (
        <ScreenSize>
            <Box id="faq" pb="32px">
                <Flex align="center" justify={"center"} mb="20px">
                    <Text
                        w="10px"
                        bgColor="brand.cyan"
                        h="10px"
                        borderRadius="50%"
                    ></Text>
                    <Text fontSize="14px" fontWeight="700" px="5px">
                        FAQ
                    </Text>
                    <Text
                        w="10px"
                        bgColor="brand.cyan"
                        h="10px"
                        borderRadius="50%"
                    ></Text>
                </Flex>

                <Text
                    fontWeight="600"
                    fontSize={["24px", "36px", "48px"]}
                    textAlign="center"
                    mx="auto"
                    maxWidth="700px"
                >
                    FREQUENTLY ASKED{" "}
                    <Text as="span" color="brand.cyan">
                        QUESTIONS
                    </Text>{" "}
                </Text>
            </Box>

            <Box maxWidth="1000px" mx='auto'>
                <Que />

		<Text pb="30px"></Text>
            </Box>

        </ScreenSize>
    );
};

export default Faq;
