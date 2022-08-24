import React, { useRef } from "react";
import { Button } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

const NewDetails = ({ news }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  return (
    <>
      <div className="btn-detail">
        <Button borderRadius="lg" margin="5px" onClick={onOpen}>
          Details
        </Button>
      </div>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{news.konu}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text mb="1rem">{news.tarih}</Text>
            <Text mb="1rem">{news.icerik}</Text>
            <hr />
            <a href={news.url}>Haber Kaynağına Git</a>

           
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default NewDetails;
