import { ChevronDownIcon } from "@chakra-ui/icons";
import {
    Menu,
    Text,
  MenuButton,
  MenuList,
  Flex,
  Icon} from "@chakra-ui/react";
import React from "react";
import {TiHome} from 'react-icons/ti'
import Communities from "./Communities";

const UserMenu: React.FC = () => {
 
  return (
    <Menu  >
      <MenuButton
        cursor="pointer"
        padding="0px 6px"
        borderRadius={4}
              _hover={{ outline: "1px solid", outlineColor: "gray.200" }}>
              <Flex align="center" justify="space-between" width={{ base: "auto", lg: "200px"}}>
              <Flex align="center">
                  <Icon as={TiHome} fontSize={24} mr={{base: 1, md: 2}} />
                  <Flex align="center" display={{base: "none" , lg: "flex"}}>
                      <Text fontWeight={530} fontSize="11pt" >Home</Text>
                      </Flex>
                      </Flex>
             <ChevronDownIcon />
              </Flex>
      </MenuButton>
          <MenuList>
              <Communities />
          </MenuList>
    </Menu>
  );
};
export default UserMenu;
