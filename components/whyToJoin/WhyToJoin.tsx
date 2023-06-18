import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Card from "./Card";

export default function WhyToJoin() {
  return (
    <Box>
      <Flex w={"auto"} justifyContent={"center"} alignItems={"center"}>
        <VStack>
          <Heading ml={"20"} pt={"10"} fontSize={"48px"} color={"#11AD8E"}>
            Why to Join
          </Heading>
          <Text color={"white"} py={"10"}  w={'690px'} textAlign={'center'}>
            In this brand-new type of curriculum, students will learn how to
            make money and boost exports in the classroom and will begin doing
            so within six months of the program's beginning. It resembles a
            cross between a corporate venture and an educational project.
          </Text>
          <Flex w={'100%'} justifyContent={'center'}>
            <Card title="Product Owner" imageUrl="/images/04 1.png" textWidth="200px"/>
            <Card title="Freelance" imageUrl="/images/credit-debit-card-bonus.png" textWidth="auto" />
            <Card title="Access to Global Market by dao" imageUrl="/images/img_dao.png" textWidth="200px" />
            <Card title="Boost Economy" imageUrl="/images/PT.png" textWidth="200px" />
          </Flex>
        </VStack>
      </Flex>
    </Box>
  );
}
