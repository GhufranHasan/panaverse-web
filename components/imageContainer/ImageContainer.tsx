import { Box, Button, Heading, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";

export default function ImageContainer() {
  return (
    <Box as="section" backgroundImage={'/images/Rectangle2.png'} backgroundSize={'contain'} backgroundRepeat={'x-repeat'} h={'auto'} px={183} pt={60}>
      <HStack maxWidth={'1440px'}>
        {/* left */}
        <Box w={"50%"} color="#F5F5F5" ml={100}>
          <Heading>
            <Text as="span">Become</Text>
            <br />
            <Text color={"#11AD8E"} as="span">
              Certified Web 3.0{" "}
            </Text>
            and
            <br />
            <Text color={"#11AD8E"} as="span">
              Metaverse Developer
            </Text>
          </Heading>
          <Text w={"60%"} mt={8}>
            Launch Your Dev Career With Web 3 and Metaverse Getting Ready for
            the Next Generation of the Internet
          </Text>
          <Button colorScheme={'teal'} mt={5}>Join Now</Button>
        </Box>
        {/* right */}
        <Box w={"50%"} alignItems={'end'} mt={4}>
          <Image src="/images/banner-img-1 1.png" ml={8} w={'auto'} h={'auto'}/>
        </Box>
      </HStack>
    </Box>
  );
}
