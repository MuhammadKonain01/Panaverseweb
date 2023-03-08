import { Box, Container, Flex, Heading, Text,Button, } from '@chakra-ui/react'
import Image from 'next/image';
import React from 'react'
import b_image from '../../public/b_image.png';
import { RevealWrapper } from  'next-reveal'
import bg from '../../public/bg.png';


export default function Banner() {
  return (<>
    

    <div>
        <Box bgAttachment='fixed' bgImage='https://cemhri.org/wp-content/uploads/2018/04/Home-Four-Banner-Background-Image.png'  >
           
          
            <Container maxWidth='1400' >
            <Flex pt={{lg:'150px', base:'30px'}}  pb='100px' px={{lg:'40px',base:'5px'}} display={{lg:'flex',base:'grid'}} >
           
            <RevealWrapper  origin='left' delay={200} duration={1000} distance='500px' reset={true}>
            <Box  flexBasis={{lg:'50%', base:'%'}} px='40px' >
                <Heading color='white'  >Prepare yourself for the Next Generation of Internet with</Heading>
                <Text shadow='2xl' color='white' pt='10px'>One Year Panaverse DAO Earn as you Learn Program. Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, and Ambient Computing/IoT Technologies</Text>
                <Button mt='10px' size='lg' colorScheme='teal'>No More</Button>
            </Box>
    </RevealWrapper>

            <RevealWrapper  origin='right' delay={200} duration={1000} distance='500px' reset={true}>
            <Box mt={{lg:'-50px', base:'0'}} ml={{lg:'100px', base:'10px'}} flexBasis='50%'>
            <Image src={b_image} alt="Panaverse" width='500' height='200'></Image>
            </Box>
            </RevealWrapper>
                </Flex>

            </Container>


        </Box>

                <Box>
                    <Container maxWidth='1400'>

                        <Flex display={{lg:'flex',base:'grid'}} gap={{lg:'100px', base:'10px'}} mt='30px' mb='30px'>
                            <Box flexBasis='50%'>
                            <Image src={b_image} alt="Panaverse" width='400' height='200'></Image>
                            </Box>
                            <Box flexBasis='50%' pt={{lg:'50px', base:'10px'}} px={{lg:'0', base:'10px'}}>
                                <Heading pt='20px' size='lg'>Program Of Studies</Heading>
                                <Text pt='10px'pr={{lg:'50px',base:'10px'}} mt='-10px'>This curriculum is intended for
                                beginners who want to learn software development from the ground up. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each. The emphasis will
                                    be on hands-on learning by educating students to produce projects.</Text>
                                <Button mt='10px' size='lg' colorScheme='teal'>Read More</Button>
                            </Box>
                        </Flex>

                        
                    </Container>
                </Box>

    </div>

    </>
  )
}
