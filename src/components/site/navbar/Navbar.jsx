import React from "react";
import { Flex, Menu, Heading, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Flex
      bg="var(--main-color)"
      color="black"
      h="70px"
      justify="space-between"
      alignItems="center"
      p="20px 40px"
      boxShadow="md"
    >
      <Link to="/">
        <Heading
          bgGradient="linear(to-l, #00d2ff  , #3a7bd5)"
          bgClip="text"
          fontSize="3xl"
          fontWeight="extrabold"
        >
          CMV Technology
        </Heading>
      </Link>
      <Flex>
        <Menu>
          <Flex>
            <Link to="/">
              <Button borderRadius={"10px"} border={"none"} mr={"20px"}>
                Haberler
              </Button>
            </Link>
            <Link to="/announcements">
              <Button borderRadius={"10px"} border={"none"} mr={"20px"}>
                Duyurular
              </Button>
            </Link>
          </Flex>
        </Menu>
      </Flex>
    </Flex>
  );
}

export default Navbar;
