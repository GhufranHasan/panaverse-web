import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

interface CardProps {
    title: string
    imageUrl: string
    textWidth: string
} 

export default function Card({title, imageUrl, textWidth}: CardProps) {
  return (
    <Box bg={'whiteAlpha.400'} borderRadius={"16px"} mx={'5'} w={"280px"} h={"416"} borderColor={'#11AD8E'} borderWidth={'2px'} justifyItems={'center'} alignItems={'center'}>
        <Text textColor={'white'} textAlign={'center'} mx={'auto'} pt={'10'} fontSize={'32px'} w={textWidth}>
            {title}
        </Text>
        <Image src={imageUrl} mx={'auto'} w={'auto'} h={'auto'} pt={'16'} />
    </Box>
  )
}
