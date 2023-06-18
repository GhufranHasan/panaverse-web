import { Box, Flex, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

interface TestimonialSize {
    width: string
    height: string
    boxSize: string
    picWidth: string
    picHeight: string
    

}

export default function StudentTestimonial({width, height, boxSize, picWidth, picHeight}: TestimonialSize) {
  return (
    <Box bgColor={'blackAlpha.800'} borderRadius={"16px"} mx={'60'} my={'14'} w={width} h={height} borderColor={'#11AD8E'} borderWidth={'2px'} justifyItems={'center'} alignItems={'center'}>
        <HStack>
            <Image borderRadius={'full'} boxSize={boxSize} src={'/images/avatar.png'} width={picWidth} height={picHeight} ml={'32'} mt={'12'} />
            <VStack pt={'12'}>
                <Heading color={'#11AD8E'} textDecoration={'underline'} fontSize={'32px'} pl={'5'}>Ghufran.H</Heading>
                <Text color={'white'} fontSize={'16px'}>Software Engineer</Text>
            </VStack>
            <Image src='/images/Vector1.png' pl={'40'} />
        </HStack>
        <Flex mt={'5'} color={'white'} w={'517px'} ml={'32'} justifyContent={'center'} fontSize={'24px'}>
            <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley. 
            </Text>
        </Flex>
        <Image src='/images/Vector2.png' pl={'14'} />
    </Box>
  )
}