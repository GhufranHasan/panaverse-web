import { Box, Heading, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";

export default function Nutshell() {
  return (
    <Box w={"auto"}>
      <HStack maxWidth={"1440px"} justifyContent={"space-between"}>
        {/* left */}
        <Box pl={"20"} pt={"96"}>
          <Image src="/images/nutshell-left.png" />
        </Box>
        {/* right */}
        <Box w={"75%"}>
          <Box
            bgColor={"whiteAlpha.400"}
            borderRadius={"16px"}
            color={"white"}
            w={"748px"}
            h={"416px"}
            mr={"50"}
            pt={0}
          >
            <Heading ml={"20"} pt={"10"} fontSize={"48px"} color={"#11AD8E"}>
              The Program in a Nutshell
            </Heading>
            <Heading
              ml={"52"}
              pt={"10"}
              fontSize={"32px"}
              textDecoration={"underline"}
              color={"#11AD8E"}
            >
              Earn While You Learn
            </Heading>
            <Text mx={'20'} mt={'10'} textAlign={'center'}>
              In this brand-new type of curriculum, students will learn how to
              make money and boost exports in the classroom and will begin doing
              so within six months of the program's beginning. It resembles a
              cross between a corporate venture and an educational project.
            </Text>
          </Box>
        </Box>
      </HStack>
    </Box>
  );
}
