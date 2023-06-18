import React from 'react'
import { Box, Button, Center, Flex, Heading, HStack, Image, List, ListItem, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BellIcon, ChevronDownIcon, MoonIcon, SearchIcon } from "@chakra-ui/icons"

export default function Header() {
  return (
    <Box as="nav" bgColor={'blackAlpha.500'} w='100%' p={4} color='white' position={'absolute'}>
      <Flex maxWidth={'1440px'} justifyContent={'space-around'} alignItems={'center'}>
        {/* left area */}
        <Box>
          <HStack spacing={20}>
            <Image src="/images/logo.png" />
            <List>
              <HStack align={'flex-start'} spacing={10}>
                <ListItem>
                  Home
                </ListItem>
                <ListItem>
                  About
                </ListItem>
                <ListItem>
                  <Menu>
                    <MenuButton>Courses<ChevronDownIcon /></MenuButton>
                    <MenuList bg={'blackAlpha.500'}>
                      <MenuItem bg={'blackAlpha.500'} _hover={{ bg: "#11AD8E" }}>Course 1</MenuItem>
                      <MenuItem bg={'blackAlpha.500'} _hover={{ bg: "#11AD8E" }}>Course 2</MenuItem>
                      <MenuItem bg={'blackAlpha.500'} _hover={{ bg: "#11AD8E" }}>Course 3</MenuItem>
                      <MenuItem bg={'blackAlpha.500'} _hover={{ bg: "#11AD8E" }}>Course 4</MenuItem>
                      <MenuItem bg={'blackAlpha.500'} _hover={{ bg: "#11AD8E" }}>Course 5</MenuItem>
                    </MenuList>
                  </Menu>
                </ListItem>
                <ListItem>
                  Contact
                </ListItem>
              </HStack>
            </List>
          </HStack>
        </Box>
        {/* right area */}
        <Box>
          <Box px={15} w={25} h={25} as={'span'}>
            <BellIcon />
          </Box>
          |
          <Box px={15} w={25} h={25} as={'span'}>
            <MoonIcon />
          </Box>
          <Button colorScheme={'teal'}>Apply Now</Button>
        </Box>
      </Flex>
    </Box>
  )
}
