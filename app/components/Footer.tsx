'use client'
import { Box, Container, Heading, SimpleGrid, Text, Grid, Icon } from '@chakra-ui/react'
import React from 'react'
// import Image from 'next/image'
import logo from '../../public/logo.png'
import Link from 'next/link'
import { PhoneIcon, EmailIcon, SearchIcon } from '@chakra-ui/icons'
import { Image } from '@chakra-ui/react'

export default function Footer() {
  return (
<Box bg={'black'} >
    <Container maxW={1400}>

<SimpleGrid textAlign={{lg:'start',base:'center'}} gap='30px' templateColumns={{base:'repeat(1,1fr)',lg:'repeat(4,1fr)',md:'repeat(2,1fr)'}} py='60px' >
    <Box >
        <Heading  color={'white'}>About Us</Heading>
        <Image pl={{lg:'0', md:'5%',base:'6%'}} pt={{lg:'0',base:'5px'}} m={{lg:'0',base:'auto'}} src='/Logo.png' alt='Panaverse-Logo' width={100} ></Image>
        <Text pt='15px' pr='40px' color={'gray'}>The Future of the Web is Web 3.0, Metaverse, and Edge Computing. Panaverse DAO is a movement to spread these technolgies globally.</Text>
    </Box>
    <Box>
        <Heading size='lg' color={'white'}>Useful Links</Heading>
        <Grid pt='40px' color={'gray'}>
        <Link href='/'> Home </Link>
        <Link href='/'> Sylabus </Link>
        <Link href='/'> Explore </Link>
        <Link href='/'> About </Link>
        <Link href='/'> Contact</Link>
        </Grid>
 </Box>
    <Box>
    <Heading size='lg' color={'white'}>Follow Us</Heading>
        <Grid pt ='40px' color={'gray'}>
        <Link href='/'> FaceBook </Link>
        <Link href='/'> LinkedIn </Link>
        <Link href='/'> Twitter </Link>
        <Link href='/'> Youtube </Link>
        <Link href='/'> Github </Link>
        </Grid>

    </Box>
    <Box>
    <Heading size='lg' color={'white'}>Contact Us</Heading>
        <Grid pt ='40px' color={'gray'}>
        <Link href='/' > <PhoneIcon /> +92 310 12345678 </Link>
        <Link href='/'><EmailIcon/> abc@gmail.com </Link>
        <Link href='/'> <SearchIcon />Karachi, Pakistan </Link>
       
        </Grid>


    </Box>

<Box>
   
    
</Box>
</SimpleGrid>

    </Container>
</Box>
  )
}
