import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
    Box,
} from "@chakra-ui/react";
import {
    IoAnalyticsSharp,
    IoLogoBitcoin,
    IoSearchSharp,
} from "react-icons/io5";
import { ReactElement } from "react";
import ScreenSize from "../Layout/ScreenSize";

export default function About() {
    return (
        <ScreenSize maxW={"5xl"} py={12}>
            <Flex gap={10} flexDir={["column", null, "row"]} id="about">
                <Flex w={["100%", null, "50%"]} justify="center">
                    <Image
                        rounded={"md"}
                        alt={"feature image"}
                        src="/About.jpeg"
                        objectFit={"cover"}
                        // maxH="450px"
                    />
                </Flex>
                <Stack spacing={4} w={["100%", null, "50%"]} pt="30px">
                    <Flex align="center">
                        <Text
                            w="10px"
                            bgColor="brand.cyan"
                            h="10px"
                            borderRadius="50%"
                        ></Text>
                        <Text fontSize="14px" fontWeight="700" px="5px">
                            WHO WE ARE
                        </Text>
                        <Text
                            w="10px"
                            bgColor="brand.cyan"
                            h="10px"
                            borderRadius="50%"
                        ></Text>
                    </Flex>
                    <Heading>
                        AzeroPaladin{" "}
                        <Text as="span" color="brand.cyan">
                            {" "}
                            NFT’s
                        </Text>{" "}
                        collection
                    </Heading>
                    <Text color={"brand.dimWhite"} fontSize={"sm"}>
                        AzeroPaladin NFT’s a collection of all brains behind
                        AlephZero blockchain, immortalised within our #NFTs.
                    </Text>
                    <Text color={"brand.dimWhite"} fontSize={"sm"}>
                        Created out of appreciation, these Paladins will now
                        live forever on chain!!
                    </Text>
                    <Text color={"brand.dimWhite"} fontSize={"sm"}>
                        All AzeroPaladin NFT holders will get 70% value of
                        $AZERO coin used to mint AzeroPaladin NFT’s as airdrop
                        of $AzeroPaladin token into their wallets.
                    </Text>
                    <Text fontSize={"sm"} color={"brand.dimWhite"}>
                        🔥 The first 100% Revenue Sharing Lottery and Coin-Flip
                        Web 3 platform on @alephzero_io! All is fair and
                        transparent on smart contracts!
                    </Text>
                    <Text fontSize={"sm"} color={"brand.dimWhite"}>
                        🧟‍♂️ NFT {`holder's`} benefits
                    </Text>
                    <Text fontSize={"sm"} color={"brand.dimWhite"}>
                        Azeropaladin NFT serves as your membership card to enter
                        all 🎰 Lottery Games 🎰 and shared profits:
                    </Text>
                    <Text fontSize={"sm"} color={"brand.dimWhite"}>
                        🤑 Revenue Share - HODL to get unlimited passive income!
                    </Text>
                    <Text fontSize={"sm"} color={"brand.dimWhite"}>
                        🧧 Coin-Flip - Throw a coin, your luck your money!
                    </Text>
                    <Text fontSize={"sm"} color={"brand.dimWhite"}>
                        🎱 Lotto - Buy tickets for 0.1 azero each and win up to
                        xxx azero with weekly draws!{" "}
                    </Text>
                    <Text fontSize={"sm"} color={"brand.dimWhite"}>
                        🎱 Lotto - Buy tickets for 0.1 azero each and win up to
                        xxx azero with weekly draws!{" "}
                    </Text>{" "}
                    <Text fontSize={"sm"} color={"brand.dimWhite"}>
                        💰 Staking - Earn passive income with high interest!
                    </Text>{" "}
                    <Text fontSize={"sm"} color={"brand.dimWhite"}>
                        🎮 Engage-2-Earn - Win contests with Azeropaladin
                        family!
                    </Text>
                </Stack>
            </Flex>
        </ScreenSize>
    );
}
