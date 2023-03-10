import { Flex, Image } from '@chakra-ui/react';
import React from 'react';
import SearchInput from './SearchInput';
import RightContent from './RightContent/RightContent';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/src/firebase/clientApp';
import Directory from './Directory/Directory';


const Navbar:React.FC = () => {
  const [user, loading, error] = useAuthState(auth);
    return (
      <Flex bg="white" height="44px" padding="6px 12px">
        <Flex align="center" padding="0px 7px 0px 0px">
          <Image src="/images/redditFace.svg" height="30px" />
          <Image
            src="/images/redditText.svg"
            height="46px"
            display={{ base: "none", md: "unset" }}
          />
        </Flex>
        <Directory />
        <SearchInput user={user} />
        <RightContent user={user} />
      </Flex>
    );
};
export default Navbar;