import { Box, Heading, HStack } from '@chakra-ui/react'
import React from 'react'
import StudentTestimonial from './studentTestimonial'

export default function StudentFeedback() {
  return (
    <Box as="section" backgroundImage={'/images/Rectangle7.png'} backgroundSize={'contain'} h={'872px'}>
      <Heading textColor={'white'} fontSize={'48px'} ml={'96'} pl={'1.5'} pt={'44'}>Student Feedback</Heading>
      <HStack>
        <StudentTestimonial width='705px' height='416' boxSize='100px'  picWidth='100px' picHeight='100px' />
        <StudentTestimonial width='286px' height='169' boxSize='100px' picWidth='100px' picHeight='100px' />
      </HStack>
    </Box>
  )
}
