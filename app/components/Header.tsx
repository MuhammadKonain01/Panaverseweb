
import { Box, Button, Container, Flex, SimpleGrid,Menu,MenuButton,MenuList,MenuItem, IconButton } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import logo from '../../public/logo.png'
import { HamburgerIcon } from "@chakra-ui/icons";

export default function Header() {
  return (

<Box boxShadow='lg'>
  <Container maxW={1400} height='auto'>
  
    {/* Navbar */}
    <SimpleGrid templateColumns={{ lg: 'repeat(3, 1fr)', base: 'repeat(2, 1fr)' }}>
<Box> <Image src={logo} alt='Panaverse-Logo' width='100'  height={10}></Image></Box>

 {/* Nav Pages */}
 <Flex display={{ lg: 'flex', base: 'none' }} placeItems='center' color='black' fontSize={18} fontWeight='semibold' gap={10}>
                        <Link href='/'>Home</Link>
                        <Link href='/syllabus'>Syllabus</Link>
                        <Link href='/explore'>Explore</Link>
                        <Link href='/about'>About</Link>
                        <Link href='/contact'>Contact</Link>

                    </Flex>
                    <Box display={{ lg: 'initial', base: 'none' }}>
                        <Button mt='10px' size='lg' colorScheme='teal' float='right'>Apply</Button>
                    </Box>
                    <Box pt='20px' display={{ lg: 'none', base: 'initial' }}>
                        <Menu  >
                            <MenuButton float='right'
                                as={IconButton}
                                aria-label='Options'
                                icon={<HamburgerIcon />}
                                variant='outline'
                            />
                            <MenuList>
                                <MenuItem>
                                    Home
                                </MenuItem>
                                <MenuItem>
                                    Syllabus
                                </MenuItem>
                                <MenuItem>
                                    Explore
                                </MenuItem>
                                <MenuItem>
                                    About
                                </MenuItem>
                                <MenuItem>
                                    Contact
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                </SimpleGrid>
            </Container>
        </Box>
    )
}
