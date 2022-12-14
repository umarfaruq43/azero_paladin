import { ReactElement } from "react";
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from "@chakra-ui/react";
import { SiProgress } from "react-icons/si";
import ScreenSize from "../Layout/ScreenSize";
const Feature = ({ title, text, icon }) => {
    return (
        <Stack
            border="1px"
            borderColor="brand.lightWhite"
            bgColor="brand.deepBlue"
            px={["35px", null, "40px"]}
            py={["50px", null, "60px"]}
            borderRadius="15px"
            className="feature_box"
        >
            <Flex
                w={"80px"}
                h={"80px"}
                align={"center"}
                justify={"center"}
                color={"brand.cyan"}
                rounded={"full"}
                bg={"rgba(255, 255, 255, 0.07)"}
                mb={"30px"}
                border="4px"
                borderColor={"rgba(255, 255, 255, 0.06)"}
                className="feature"
            >
                {icon}
            </Flex>
            <Text fontWeight={600} fontSize={["22px"]} mb="24px">
                {title}
            </Text>
            <Text color={"brand.dimWhite"} fontSize="15px" lineHeight={"22px"}>
                {text}
            </Text>
        </Stack>
    );
};

export default function Roadmap() {
    return (
        <ScreenSize p={4} py="84px">
            <Box mb="30px" id="roadmap">
                <Flex align="center" justify={"center"} mb="20px">
                    <Text
                        w="10px"
                        bgColor="brand.cyan"
                        h="10px"
                        borderRadius="50%"
                    ></Text>
                    <Text fontSize="14px" fontWeight="700" px="5px">
                        OUR ROADMAP
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
                    fontSize={["28px", "36px", "48px"]}
                    textAlign="center"
                    mx="auto"
                    maxWidth="700px"
                    mb="20"
                >
                    AzeroPaladin Strategy And Project{" "}
                    <Text as="span" color="brand.cyan">
                        Plan
                    </Text>{" "}
                </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={10}>
                <Feature
                    icon={<Icon as={SiProgress} w={10} h={10} />}
                    title={"Build a strong community"}
                    text={
                        "Our first mission is to build a strong AZEROPALADIN Community."
                    }
                />
                <Feature
                    icon={<Icon as={SiProgress} w={10} h={10} />}
                    title={"Launch Socials"}
                    text={"Launching of our website and discord"}
                />
                <Feature
                    icon={<Icon as={SiProgress} w={10} h={10} />}
                    title={" NFT mint"}
                    text={
                        "Successful AZEROPALADIN NFT mint On ARTZERO Marketplace and Launchpad "
                    }
                />{" "}
                <Feature
                    icon={<Icon as={SiProgress} w={10} h={10} />}
                    title={" Secondary Markets"}
                    text={"Listing and features on ARTZERO NFT marketplaces. "}
                />{" "}
                <Feature
                    icon={<Icon as={SiProgress} w={10} h={10} />}
                    title={"  AZEROPALADIN TOKEN IDO & Airdrop"}
                    text={
                        "Conduct a TOKEN IDO sale on a Launchpad & Airdrop of AZEROPALADIN token to all AZEROPALADIN NFT holders."
                    }
                />{" "}
                <Feature
                    icon={<Icon as={SiProgress} w={10} h={10} />}
                    title={" AZEROPALADIN TOKEN DEX LISTING "}
                    text={"Listing of AzeroPaladin Token ($AZP) on a DEX."}
                />{" "}
                <Feature
                    icon={<Icon as={SiProgress} w={10} h={10} />}
                    title={" SuperCharged Staking"}
                    text={
                        "Stake your NFT and Tokens to earn SuperCharged rewards."
                    }
                />{" "}
                <Feature
                    icon={<Icon as={SiProgress} w={10} h={10} />}
                    title={"  CoinFlip "}
                    text={
                        "Throw a coin, your luck, your money!! (Platform fees of 3.5% will be taken from a winning CoinFlip)."
                    }
                />{" "}
                <Feature
                    icon={<Icon as={SiProgress} w={10} h={10} />}
                    title={" AZEROPALADIN DAO"}
                    text={"Creation of the community AZEROPALADIN DAO."}
                />{" "}
                <Feature
                    icon={<Icon as={SiProgress} w={10} h={10} />}
                    title={"AZEROPALADIN Web 3.0 Lottery "}
                    text={"Opening of our first AZEROPALADIN Web 3.0 Lottery."}
                />
            </SimpleGrid>
        </ScreenSize>
    );
}
