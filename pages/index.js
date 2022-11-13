import { Box } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import Nav from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Roadmap from "../components/Roadmap";
import Faq from "../components/Faq";
import WhiteList from "../components/WhiteList";
import Footer from "../components/Footer";
import Join from "../components/Join";

export default function Home() {
    return (
        <Box>
            <Head>
                <title>AzeroPaladin</title>
                <meta
                    name="description"
                    content="AzeroPaladin NFT’s a collection of all brains behind  AlephZero blockchain, immortalised within our #NFTs. Created out of appreciation, these Paladins will now live forever on chain!!"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Box color="brand.white" bgColor="brand.deepBlue">
                <Nav />
                <Hero />
                <WhiteList />

                <About />
                <Roadmap />
                <Faq />
		<Join />
		<Footer />
            </Box>
        </Box>
    );
}
