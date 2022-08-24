
import {  Box,  Flex,  } from "@chakra-ui/react";
import React from "react";
import Footer from "../../../components/site/footer/Footer";
import Navbar from "../../../components/site/navbar/Navbar";
import NewDetails from "../../../components/site/newdetailsmodal/NewDetails";
import { useNew } from "../../../context/NewContext";
import "./news.scss";

function News() {
  const { news } = useNew();
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="news-content">
          <Flex wrap="wrap" justifyContent="space-around">
            {news.map((newws, index) => (
              <Box
                key={index}
                className="card"
                m="0 10px 10px 0px "
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
              >
                <Box p="6">
                  <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    noOfLines={1}
                  >
                    {newws.konu}
                  </Box>

                  <Box>
                    
                    <Box as="span" color="gray.600" fontSize="sm">
                      {newws.tarih}
                    </Box>
                  </Box>

                  <Box  display="flex" justifyContent="flex-end"   >
                    <NewDetails news={newws}/>
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

export default News;
