import { Box, HStack, Link, Button } from '@chakra-ui/react'
import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider
  } from '@chakra-ui/react'
  import {ChevronDownIcon} from "@chakra-ui/icons"

const Navbar = () => {
  return (
    <HStack w="100%"  >
        
        <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} >Find New Car</MenuButton>
            <MenuList>
                <MenuItem>Cars</MenuItem>
                <MenuItem>Compare Cars</MenuItem>
                <MenuItem>Upcoming Cars</MenuItem>
                <MenuItem>Car Loan Calculator</MenuItem>
            </MenuList>
        </Menu>

        <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} >Find New Bike</MenuButton>
            <MenuList>
                <MenuItem>Bikes</MenuItem>
                <MenuItem>Compare Bikes</MenuItem>
                <MenuItem>Upcoming Bikes</MenuItem>
                <MenuItem>Bikes Loan Calculator</MenuItem>
            </MenuList>
        </Menu>
        
        <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} >News</MenuButton>
            <MenuList>
                <MenuItem>Cars</MenuItem>
                <MenuItem>Bikes</MenuItem>
                <MenuItem>Industry</MenuItem>
            </MenuList>
        </Menu>

        <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} >Reviews</MenuButton>
            <MenuList>
                <MenuItem>Cars</MenuItem>
                <MenuItem>Bikes</MenuItem>
            </MenuList>
        </Menu>

        <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} >News</MenuButton>
            <MenuList>
                <MenuItem>Cars</MenuItem>
                <MenuItem>Bikes</MenuItem>
                <MenuItem>Industry</MenuItem>
            </MenuList>
        </Menu>

        <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} >Galleries</MenuButton>
            <MenuList>
                <MenuItem>Images</MenuItem>
            </MenuList>
        </Menu>

        <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} >Readers Corner</MenuButton>
            <MenuList>
                <MenuItem>Travel Blogs</MenuItem>
                <MenuItem>Blogs</MenuItem>
            </MenuList>
        </Menu>

    </HStack>
  )
}

export default Navbar