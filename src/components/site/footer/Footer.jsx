import { Flex, Text, HStack, Button, VStack, Link } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <Flex
      h={"160px"}
      bgGradient="linear(to-l, #8e0e00, #1f1c18)"
      color={"white"}
      justify={"center"}
      mt={20}
    >
      <VStack>
        <Text my={"26px"}>© Copyright 2012-2022 CMV. All Rights Reserved</Text>
        <HStack>
          <Button
            borderRadius={"15px"}
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            _hover={{
              bgGradient: "linear(to-r, red.500, yellow.500)",
            }}
            variant={"solid"}
            bg={"#0863be"}
            size="sm"
            leftIcon={<FaLinkedin />}
          >
            <Link
              _hover={{ textDecoration: "none" }}
              target={"_blank"}
              href={
                "https://www.linkedin.com/in/ahmet-emre-g%C3%B6kg%C3%B6z-82b5311b1/"
              }
            >
              LinkedIn
            </Link>
          </Button>
          <Button
            borderRadius={"15px"}
            bgGradient="linear(to-r, teal.500, green.500)"
            _hover={{
              bgGradient: "linear(to-r, red.500, yellow.500)",
            }}
            variant={"solid"}
            bg={"red"}
            size="sm"
            leftIcon={<FaGithub />}
          >
            <Link
              _hover={{ textDecoration: "none" }}
              target={"_blank"}
              href={"https://github.com/emregkgz"}
            >
              GitHub
            </Link>
          </Button>
        </HStack>
      </VStack>
    </Flex>
  );
}

export default Footer;
