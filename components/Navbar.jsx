import { ReactNode } from "react";
import {
    Box,
    Flex,
    Avatar,
    Link,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    Icon,
    useColorModeValue,
    Stack,
    useColorMode,
    Center,
    Text,
} from "@chakra-ui/react";
// import { HiBars3CenterLeft } from "react-icons/hi";
import { FaBars } from "react-icons/fa";
import ScreenSize from "../Layout/ScreenSize";

const NavLink = ({ children, href }) => (
    <Link
        px={5}
        py={1}
        rounded={"md"}
        _hover={{
            textDecoration: "none",
        }}
        href={href}
    >
        {children}
    </Link>
);

export default function Nav() {
    return (
        <Box bg="brand.deepBlue">
            <ScreenSize>
                <Flex
                    h={"20"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                >
                    <Text fontSize={["20px", null, "32px"]} fontWeight={"600"}>
                        AzeroPaladin
                    </Text>

                    <Flex alignItems={"center"}>
                        <Stack direction={"row"} spacing={7}>
                            <Box display={["none", null, "block"]}>
                                {NavContent.map(({ text, href }, i) => {
                                    return (
                                        <NavLink key={i} href={href}>
                                            {text}
                                        </NavLink>
                                    );
                                })}
                            </Box>

                            <Box display={["block", null, "none"]}>
                                <Menu>
                                    <MenuButton
                                        as={Button}
                                        rounded={"full"}
                                        variant={"link"}
                                        cursor={"pointer"}
                                        color="#fff"
                                        minW={"100%"}
                                    >
                                        <FaBars />
                                    </MenuButton>
                                    <MenuList
                                        alignItems={"center"}
                                        bgColor="brand.deepBlue"
                                    >
                                        {NavContent.map(({ text, href }, i) => {
                                            return (
                                                <Box
                                                    key={i}
                                                    bgColor="brand.deepBlue"
                                                    _hover={{
                                                        bgColor:
                                                            "brand.deepBlue",
                                                    }}
                                                    _focus={{
                                                        bgColor:
                                                            "brand.deepBlue",
                                                    }}
                                                >
                                                    <Link
                                                        display="block"
                                                        py="8px"
                                                        px="16px"
                                                        href={href}
                                                        w="100%"
                                                        h="100%"
                                                    >
                                                        {text}
                                                    </Link>
                                                </Box>
                                            );
                                        })}
                                    </MenuList>
                                </Menu>
                            </Box>
                        </Stack>
                    </Flex>
                </Flex>
            </ScreenSize>
        </Box>
    );
}

const NavContent = [
    {
        href: "/",
        text: "Home",
    },
    {
        href: "#whitelist",
        text: "Whitelist",
    },
    {
        href: "#about",
        text: "About",
    },
    {
        href: "#roadmap",
        text: "Roadmap",
    },
    {
        href: "#faq",
        text: "Faq",
    },
];
