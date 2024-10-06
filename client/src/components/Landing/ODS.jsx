import { Box, Flex, Image, Text, Wrap, WrapItem } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { useState } from "react";

const Ods = ({ ODS }) => {
  const { isOpen, onOpen, onClose } = useDisclosure(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const handleOpen = (ods) => {
    setName(ods.name);
    setDescription(ods.description);
    onOpen();
  };
  return (
    <>
      <Box>
        <Wrap p="1" align="center" justify="center">
          {Object.entries(ODS).map(([key, ods]) => (
            <WrapItem key={key} mb={4}>
              <Box
                _hover={{ ring: "2px", ringColor: "black", borderRadius: "10px", transition: "all 0.3s" }}
                onClick={handleOpen.bind(this, ods)}
              >
                <Image
                    borderRadius={"10px"}
                  _hover={{borderRadius: "10px ", transition: "all 0.3s"}} 
                  boxSize={["100px", "200px"]}
                  src={ods.image}
                  alt={ods.name}
                />
              </Box>
            </WrapItem>
          ))}
        </Wrap>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{name}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>{description}</ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
};

export default Ods;
