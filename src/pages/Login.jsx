import {
  AbsoluteCenter,
  Box,
  Button,
  Center,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { MdAppRegistration, MdLogin } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const toast = useToast();
  return (
    <>
      <Flex
        // border="1px solid red"
        width="100vw"
        height="88vh"
        alignItems="center"
        justifyContent="center"
      >
        <Flex
          width="30%"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          paddingLeft="10"
          paddingRight="10"
          paddingBottom="20"
          gap={5}
        >
          <Heading>Login To Madfarms Admin</Heading>
          <FormControl>
            <FormLabel>Username</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl>
          <Button 
            onClick={() =>
              toast({
                title: `Invalid Email Address`,
                status: "error",
                isClosable: true,
              })
            }
            rightIcon={<MdLogin />} 
            alignSelf="start"
          >
            Login
          </Button>
          <Center bg="white" px="4">
            OR
          </Center>
          <Button
            rightIcon={<MdAppRegistration />}
            onClick={()=>{navigate('/register')}}
            width="100%"
          >
            Register As Admin
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default Login;
