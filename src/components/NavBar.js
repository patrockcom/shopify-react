import React, { useContext } from 'react'
import { Flex, Text,Icon, Image } from '@chakra-ui/react'
import { ShopContext } from '../context/shopContext'
import { MdMenu, MdShoppingBasket } from "react-icons/md";

const NavBar = () => {
    const { openCart, openMenu, checkout } = useContext(ShopContext)
    
    return (
        <Flex flexDir="row" justifyContent="space-between" p="2rem">
           <Icon fill="white" as{MdMenu}></Icon>
            <Text>Logo</Text>
            <Text>Cart</Text>
        </Flex>
    )
}

export default NavBar