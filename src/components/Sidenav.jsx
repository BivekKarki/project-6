import { Box, HStack, Icon, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import {RxDashboard} from 'react-icons/rx'
import {BsArrowDownUp} from 'react-icons/bs'

const Sidenav = () => {

  const navLinks = [
    {
      icon: RxDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: BsArrowDownUp,
      text: "Transaction",
      link: "/transactions",
    },
  ];

  return (<>
  <Stack>
    {
      navLinks.map((nav)=>
        <HStack key={nav.text}>
          <Icon as={nav.icon}/>
          <Text>{nav.text}</Text>
        </HStack>
        )
    }

  </Stack>
  </>
    
   
  )
}

export default Sidenav