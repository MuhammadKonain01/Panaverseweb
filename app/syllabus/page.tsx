'use client'
import {Box, Button, Container, Flex ,SimpleGrid,Card, CardBody ,CardFooter, CardHeader,Text, Heading, color} from "@chakra-ui/react";
import Link from "next/link";
import React from 'react'
import Home from '../components/Home'

export default function page() {
  return (
    <>
    <Home title='Syllabus'
     src='https://wallpapers.com/images/hd/office-background-pendant-lights-w2xir993yuu91f9h.jpg'/>
  
  
  <Box bgGradient='unset'>
<hr></hr>
  <Container maxW={1400} height='auto'>
  
<Heading color={'blue.600'} size='4xl' textAlign={'center'} fontFamily='sans-serif' mb='-30px' mt='30px' > Course Syllabus</Heading>
<Text pt={20} textAlign='center'>The first three quarters are shared by all specialties and are dedicated to studying Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development.</Text>
<Text  textAlign='center'>It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each.</Text>
   

<Heading color={'orange.400'} size='2xl' textAlign={'center'} fontFamily='sans-serif' mt='30px'> Common in All </Heading>
<Text textAlign='center'>Every participant of the program will start by completing the following three core courses.</Text>

   
    <SimpleGrid spacing={4} templateColumns={{ lg: 'repeat(3, 3fr)', base: 'repeat(1, 1fr)' }} mt='50px' pb={{lg:'50'}}>
  
  {/* <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'> */}


<Box >
<Card boxShadow='lg'>
    <CardHeader alignSelf='center'>
      <Heading size='lg' >Quarter I</Heading>
    </CardHeader>
    <CardBody textAlign='center'>
      <Text >CS-101: Object-Oriented Programming </Text>
       <Text> using TypeScript and Typescript for React</Text>
    </CardBody>
    <CardFooter justifyContent='center'>
      {/* <Button >View here</Button> */}
    </CardFooter>
  </Card>
</Box>

<Box>
<Card boxShadow='lg'>
    <CardHeader alignSelf='center'>
      <Heading size='lg' >Quarter II</Heading>
    </CardHeader>
    <CardBody textAlign='center'>
      <Text >W2-201: Developing Planet-Scale Web 2.0</Text>
       <Text> Apps and APIs using Next.js 13 and Cloud</Text>
       <Text>Development Kit (CDK) for Terraform</Text>
    </CardBody>
    <CardFooter justifyContent='center'>
      {/* <Button >View here</Button> */}
    </CardFooter>
  </Card>
</Box>
    
<Box >
<Card boxShadow='lg'>
    <CardHeader alignSelf='center'>
      <Heading size='lg' >Quarter III</Heading>
    </CardHeader>
    <CardBody textAlign='center'>
      <Text >$-101: Dollar Making Bootcamp FullStack Template </Text>
       <Text>and API Product Development</Text>
    </CardBody>
    <CardFooter justifyContent='center'>
      {/* <Button >View here</Button> */}
    </CardFooter>
  </Card>
</Box>
                   
                </SimpleGrid>
            </Container>
    </Box>
     

    <Box>

<Container maxW={1400} height='auto'>



<Heading color={'orange.400'} size='2xl' textAlign={'center'} fontFamily='sans-serif' mt='30px'>Specialized Tracks</Heading>
<Text textAlign='center'>After completing the first two quarters the participants will select one or more specializations consisting of two courses each:</Text>

 
<Heading color={'blue.400'} size='2xl' textAlign={'center'} fontFamily='sans-serif' mt='50px'>
1- Web 3.0 (Blockchain) and Metaverse Specialization
</Heading>
<Text textAlign='center'>
This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing
</Text>
<Text textAlign='center'>
in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.
</Text>

  <SimpleGrid spacing={4} templateColumns={{ lg: 'repeat(2, 3fr)', base: 'repeat(1, 1fr)' }} mt='50px' pt='30px' pb={{lg:'50'}}>

{/* <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'> */}


<Box >
<Card boxShadow='lg'>
  <CardHeader alignSelf='center'>
    <Heading size='lg' >Quarter I</Heading>
  </CardHeader>
  <CardBody textAlign='center'>
    <Text >CS-101: Object-Oriented Programming </Text>
     <Text> using TypeScript and Typescript for React</Text>
  </CardBody>
  <CardFooter justifyContent='center'>
    {/* <Button >View here</Button> */}
  </CardFooter>
</Card>
</Box>

  
<Box >
<Card boxShadow='lg'>
  <CardHeader alignSelf='center'>
    <Heading size='lg' >Quarter III</Heading>
  </CardHeader>
  <CardBody textAlign='center'>
    <Text >$-101: Dollar Making Bootcamp FullStack Template </Text>
     <Text>and API Product Development</Text>
  </CardBody>
  <CardFooter justifyContent='center'>
    {/* <Button >View here</Button> */}
  </CardFooter>
</Card>
</Box>
                 
              </SimpleGrid>
          </Container>
  </Box>




  <Box>

<Container maxW={1400} height='auto'>




 
<Heading color={'blue.400'} size='2xl' textAlign={'center'} fontFamily='sans-serif' mt='50px'>
2- Artificial Intelligence (AI) and Deep Learning Specialization
</Heading>
<Text textAlign='center'>
The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom 

</Text>
<Text textAlign='center'>
Deep Learning Tensorflow models.
</Text>

  <SimpleGrid spacing={4} templateColumns={{ lg: 'repeat(2, 3fr)', base: 'repeat(1, 1fr)' }} mt='50px' pt='30px' pb={{lg:'50'}}>


<Box >
<Card boxShadow='lg'>
  <CardHeader alignSelf='center'>
    <Heading size='lg' >Quarter IV</Heading>
  </CardHeader>
  <CardBody textAlign='center'>
    <Text >W3-351: Developing Smart Contracts and</Text>
     <Text>Planet-Scale Web 3.0 Dapps</Text>
  </CardBody>
  <CardFooter justifyContent='center'>
    {/* <Button >View here</Button> */}
  </CardFooter>
</Card>
</Box>

  
<Box >
<Card boxShadow='lg'>
  <CardHeader alignSelf='center'>
    <Heading size='lg' >Quarter v</Heading>
  </CardHeader>
  <CardBody textAlign='center'>
    <Text >MV-361: Developing Planet-Scale and</Text>
     <Text>Augmented Metaverse Experiences</Text>
  </CardBody>
  <CardFooter justifyContent='center'>
    {/* <Button >View here</Button> */}
  </CardFooter>
</Card>
</Box>
                 
              </SimpleGrid>
          </Container>
  </Box>



  <Box>

<Container maxW={1400} height='auto'>


 
<Heading color={'blue.400'} size='2xl' textAlign={'center'} fontFamily='sans-serif' mt='50px'>
3- Cloud-Native Computing Specialization
</Heading>
<Text textAlign='center'>
The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.</Text>

  <SimpleGrid spacing={4} templateColumns={{ lg: 'repeat(2, 3fr)', base: 'repeat(1, 1fr)' }} mt='50px' pt='30px' pb={{lg:'50'}}>

{/* <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'> */}


<Box >
<Card boxShadow='lg'>
  <CardHeader alignSelf='center'>
    <Heading size='lg' >Quarter IV</Heading>
  </CardHeader>
  <CardBody textAlign='center'>
    <Text >CN-351: Certified Kubernetes Application</Text>
     <Text>Developer (CKAD)</Text>
  </CardBody>
  <CardFooter justifyContent='center'>
    {/* <Button >View here</Button> */}
  </CardFooter>
</Card>
</Box>

  
<Box >
<Card boxShadow='lg'>
  <CardHeader alignSelf='center'>
    <Heading size='lg' >Quarter V</Heading>
  </CardHeader>
  <CardBody textAlign='center'>
    <Text >CN-361: Developing Multi-Cloud APIs using</Text>
     <Text>CDK for Terraform</Text>
  </CardBody>
  <CardFooter justifyContent='center'>
    {/* <Button >View here</Button> */}
  </CardFooter>
</Card>
</Box>
                 
              </SimpleGrid>
          </Container>
  </Box>




  <Box>

<Container maxW={1400} height='auto'>

 
<Heading color={'blue.400'} size='2xl' textAlign={'center'} fontFamily='sans-serif' mt='50px'>
4- Ambient Computing and IoT Specialization
</Heading>
<Text textAlign='center'>
The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing,
</Text>
<Text textAlign='center'>
Matter, and Embedded Devices.
</Text>

  <SimpleGrid spacing={4} templateColumns={{ lg: 'repeat(2, 3fr)', base: 'repeat(1, 1fr)' }} mt='50px' pt='30px' pb={{lg:'50'}}>

{/* <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'> */}


<Box >
<Card boxShadow='lg'>
  <CardHeader alignSelf='center'>
    <Heading size='lg' >Quarter IV</Heading>
  </CardHeader>
  <CardBody textAlign='center'>
    <Text >AC-351: Ambient Computing with Voice</Text>
     <Text> Assistants and Matter Devices</Text>
  </CardBody>
  <CardFooter justifyContent='center'>
    {/* <Button >View here</Button> */}
  </CardFooter>
</Card>
</Box>

  
<Box >
<Card boxShadow='lg'>
  <CardHeader alignSelf='center'>
    <Heading size='lg' >QuarterV</Heading>
  </CardHeader>
  <CardBody textAlign='center'>
    <Text >AC-361: Embedded Programming </Text>
     <Text>using C and Rust</Text>
  </CardBody>
  <CardFooter justifyContent='center'>

  </CardFooter>
</Card>
</Box>
                 
              </SimpleGrid>
          </Container>
  </Box>



  <Box>

<Container maxW={1400} height='auto'>

 
<Heading color={'blue.400'} size='2xl' textAlign={'center'} fontFamily='sans-serif' mt='50px'>
5- Genomics and Bioinformatics Specialization
</Heading>
<Text textAlign='center'>
Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics
</Text>
<Text textAlign='center'>
encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focus on performing complex bioinformatics analysis using
</Text>
<Text>the most essential Python libraries and applications</Text>

  <SimpleGrid spacing={4} templateColumns={{ lg: 'repeat(2, 3fr)', base: 'repeat(1, 1fr)' }} mt='50px' pt='30px' pb={{lg:'50'}}>


<Box >
<Card boxShadow='lg'>
  <CardHeader alignSelf='center'>
    <Heading size='lg' >Quarter IV</Heading>
  </CardHeader>
  <CardBody textAlign='center'>
    <Text >Bio-351: Python for Biologists</Text>
  </CardBody>
  <CardFooter justifyContent='center'>
  </CardFooter>
</Card>
</Box>

  
<Box >
<Card boxShadow='lg'>
  <CardHeader alignSelf='center'>
    <Heading size='lg' >Quarter III</Heading>
  </CardHeader>
  <CardBody textAlign='center'>
    <Text >Bio-361: Bioinformatics with Python</Text>
  </CardBody>
  <CardFooter justifyContent='center'>

  </CardFooter>
</Card>
</Box>
                 
              </SimpleGrid>
          </Container>
  </Box>



  <Box>

<Container maxW={1400} height='auto'>

<Heading color={'blue.400'} size='2xl' textAlign={'center'} fontFamily='sans-serif' mt='50px'>
6- Network Programmability and Automation Specialization
</Heading>
<Text textAlign='center'>
More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols,
</Text>
<Text textAlign='center'>
technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate
</Text>
<Text>systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.</Text>

  <SimpleGrid spacing={4} templateColumns={{ lg: 'repeat(2, 3fr)', base: 'repeat(1, 1fr)' }} mt='50px' pt='30px' pb={{lg:'50'}}>

{/* <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'> */}


<Box >
<Card boxShadow='lg'>
  <CardHeader alignSelf='center'>
    <Heading size='lg' >Quarter IV</Heading>
  </CardHeader>
  <CardBody textAlign='center'>
    <Text >NPA-351: CCNA(Cisco Certified Network Ass.)</Text>
     <Text> 200-301 Certification</Text>
  </CardBody>
  <CardFooter justifyContent='center'>
    {/* <Button >View here</Button> */}
  </CardFooter>
</Card>
</Box>

  
<Box >
<Card boxShadow='lg'>
  <CardHeader alignSelf='center'>
    <Heading size='lg' >Quarter V</Heading>
  </CardHeader>
  <CardBody textAlign='center'>
    <Text >Network Programmability</Text>
     <Text> and Automation</Text>
  </CardBody>
  <CardFooter justifyContent='center'>
    {/* <Button >View here</Button> */}
  </CardFooter>
</Card>
</Box>
                 
              </SimpleGrid>
          </Container>
  </Box>


  </>
     )
}
