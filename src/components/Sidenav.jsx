import { Box, HStack, Stack } from '@chakra-ui/react'
import React from 'react'
import {RxDashboard} from 'react-icons/rx'

const Sidenav = () => {

  const navLinks = [
    {
      icon: RxDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: RxDashboard,
      text: "Dashboard",
      link: "/",
    },
  ];

  return (<>
  <Stack>
    {
      navLinks.map(nav=>
        <HStack></HStack>
        )
    }

  </Stack>
  </>
    
   
  )
}

export default Sidenav