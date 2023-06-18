"use client";
import Header from "@/components/header/Header";
import Nutshell from "@/components/nutshell/Nutshell";
import StudentFeedback from "@/components/studentFeedback/studentFeedback";
import ImageContainer from "@/components/imageContainer/ImageContainer";
import WhyToJoin from "@/components/whyToJoin/WhyToJoin";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box bg={"black"} pb={'20'}>
      <Header />
      <Box as="main">
        <ImageContainer />
        <Box as="section" pb={'28'}>
          <Nutshell />
          <WhyToJoin />
        </Box>
        <StudentFeedback />
      </Box>
    </Box>
  );
}
