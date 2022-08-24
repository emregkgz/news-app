
import {  Box, Image, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Footer from "../../../components/site/footer/Footer";
import Navbar from "../../../components/site/navbar/Navbar";
import { useAnnouncement } from "../../../context/AnnouncementContext";
import "./announcemets.scss";

function Announcements() {
  const {announcements}= useAnnouncement()
  console.log(announcements);
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="announcement-content">
          <Flex wrap="wrap" justifyContent="space-around">
            {announcements.map((announcements, index) => (
              <Box
                key={index}
                className="card"
                m="0 10px 10px 0px "
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
              >
                <Image src={announcements.img} alt="" />
                <Box p="6">
                  <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    noOfLines={1}
                  >
                    {announcements.konu}
                  </Box>

                  <Box>
                    <Text className="p-icerik">
                      {announcements.icerik}
                    </Text>
                  </Box>

                  <Box display="flex" mt="2" alignItems="center">
                    <Box as="span" ml="2" color="gray.600" fontSize="sm">
                      {announcements.tarih}
                    </Box>
                  </Box>
                </Box>
              </Box>
            ))}
          </Flex>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Announcements;
