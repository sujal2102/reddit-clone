import { authModalState } from "@/src/atoms/authModalAtom";
import { auth } from "@/src/firebase/clientApp";
import { Center, Divider, Text } from "@chakra-ui/react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Flex,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilState } from "recoil";
import AuthInputs from "./AuthInputs";
import OAuthButtons from "./OAuthButtons";
import ResetPassword from "./ResetPassword";

const AuthModal: React.FC = () => {
  const [modalState, setModalState] = useRecoilState(authModalState);
  const [user, loading, error] = useAuthState(auth);
  const handleClose = () => {
    setModalState((prev) => ({
      ...prev,
      open: false,
    }));
  };

  useEffect(() => {
    if (user) handleClose();
  }, [user]);

  return (
    <>
      <Modal
        isOpen={modalState.open}
        onClose={handleClose}
        isCentered
        size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader ml={68} fontSize="20pt" mt={8} mb={1}>
            {modalState.view === "login" && "Log In"}
            {modalState.view === "signup" && "Sign Up"}
            {modalState.view === "resetPassword" && ""}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            pb={6}>
            <Flex
              direction="column"
              align="center"
              justify="center"
              width="70%">
              {modalState.view === "login" || modalState.view === "signup" ? (
                <>
                  <Text fontSize="8pt" mt={0} mb={5}>
                    By continuing, you agree are setting up a Reddit account and
                    agree to our User Agreement and Privacy Policy.
                  </Text>
                  <OAuthButtons />
                  <Text color="gray.500" fontWeight={700}>
                    OR
                  </Text>
                  <Center width="180px" mt={4} mb={4}>
                    <Divider orientation="horizontal" />
                  </Center>
                  <AuthInputs />
                </>
              ) : (
                <ResetPassword />
              )}
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default AuthModal;
