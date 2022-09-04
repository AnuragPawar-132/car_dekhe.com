import React from 'react'
import { Button, ButtonGroup, HStack, Box, Image, Input } from '@chakra-ui/react'
import cardekhe_logo from "../images/cardekhe_logo_2.jpeg"
import styles from "./TopNavbar.module.css"

const TopNavbar = () => {
  return (
    <HStack className={styles.topnavbar} >
        <Box><Image src={cardekhe_logo} alt='Cardekhe' className={styles.topnavbar_logo} /></Box>
        <Input placeholder='Search For Car or Bike' size='lg' className={styles.topnavbar_input}/>
        <HStack gap="4%" >
            <Button bg="rgb(245, 128, 65)" >Login</Button>
            <Button bg="rgb(245, 128, 65)" >Signup</Button>
        </HStack>
    </HStack>
  )
}

export default TopNavbar