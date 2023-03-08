
import { Box, Button, Container, Flex ,SimpleGrid,Card, CardBody ,CardFooter, CardHeader,Text, Heading, color} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import b_image from '../../public/b_image.png';
import bg from '../../public/bg.png';



export default function CardSec() {
  return (


<Box boxShadow='lg'>
<hr></hr>
  <Container maxW={1400} height='auto'>
  
<Heading size='lg' textAlign={'center'} mb='-30px' mt='30px' > Our Top Courses</Heading>
    <SimpleGrid spacing={4} templateColumns={{ lg: 'repeat(3, 3fr)', base: 'repeat(1, 1fr)' }} mt='50px' pb={{lg:'50'}}>
  
  {/* <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'> */}


<Box>
<Card>
    <CardHeader alignSelf='center'>
      <Heading size='lg' > Metaverse</Heading>
    </CardHeader>
    <CardBody>
      <Text >Panaverse DAO is a community of Web 3 and Metaverse developers, designers, trainers,
        startup founders and service providers. Panaverse DAO is struggling to produce professionals.</Text>
    </CardBody>
    <CardFooter justifyContent='center'>
      <Button >View here</Button>
    </CardFooter>
  </Card>
</Box>

<Box>
<Card>
    <CardHeader alignSelf='center'>
      <Heading size='lg' > Block Chain</Heading>
    </CardHeader>
    <CardBody>
      <Text >Panaverse DAO is a community of Web 3 and Metaverse developers, designers, trainers,
        startup founders and service providers. Panaverse DAO is struggling to produce professionals.</Text>
    </CardBody>
    <CardFooter justifyContent='center'>
      <Button >View here</Button>
    </CardFooter>
  </Card>
</Box>
    
    <Box>
    <Card mb='20px'>
    <CardHeader alignSelf='center'>
      <Heading size='lg' > Typescript</Heading>
    </CardHeader>
    <CardBody>
      <Text >Panaverse DAO is a community of Web 3 and Metaverse developers, designers, trainers,
        startup founders and service providers. Panaverse DAO is struggling to produce professionals.</Text>
    </CardBody>
    <CardFooter justifyContent='center'>
      <Button >View here</Button>
    </CardFooter>
  </Card>
                      </Box>
                   
                </SimpleGrid>
            </Container>



            <Container maxWidth='1400'>

<Flex display={{lg:'flex',base:'grid'}} gap={{lg:'100px', base:'10px'}} mb='50px'>
   
    <Box flexBasis='50%' pt={{lg:'50px', base:'10px'}} px={{lg:'0', base:'10px'}}>
        <Heading pt='20px' size='lg'>What Is Panaverse DAO?</Heading>
        <Text pt='10px'pr={{lg:'50px',base:'10px'}} mt='-10px'>Panaverse DAO is a community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers. Panaverse DAO is struggling to produce professional metaverse developers from Pakistan for the upcoming Era of Internet.</Text>
        <Button mt='10px' size='lg' colorScheme='teal'>Read More</Button>
    </Box>

    <Box flexBasis='50%' pb='50px'>
    <Image src={b_image} alt="Panaverse" width='400' height='200'></Image>
    </Box>
</Flex>
</Container>

        </Box>
    )
}
