import { createColumnHelper } from "@tanstack/react-table";
import React, { useRef } from "react";
import { DataTable } from "../components/Datatable";
import {
  Badge,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  IconButton,
  Input,
  List,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  VStack,
  calc,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon, ViewIcon } from "@chakra-ui/icons";
const ManageRecords = () => {
  const initialRef = useRef(null);
  const {
    isOpen: isViewOpen,
    onOpen: onViewOpen,
    onClose: onViewClose,
  } = useDisclosure();
  const {
    isOpen: isEditOpen,
    onOpen: onEditOpen,
    onClose: onEditClose,
  } = useDisclosure();
  const {
    isOpen: isDeleteOpen,
    onOpen: onDeleteOpen,
    onClose: onDeleteClose,
  } = useDisclosure();

  const data = [
    {
      srNo: 1,
      name: "Abc",
      color: "Brown",
      gender: "female",
      dob: "20-10-2012",
      view: (
        <IconButton
          onClick={onViewOpen}
          icon={<ViewIcon />}
          colorScheme="green"
        />
      ),
      edit: <IconButton onClick={onEditOpen} icon={<EditIcon />} colorScheme="blue" />,
      delete: (
        <IconButton
          onClick={onDeleteOpen}
          icon={<DeleteIcon />}
          colorScheme="red"
        />
      ),
    },
    {
      srNo: 1,
      name: "Abc",
      color: "Brown",
      gender: "female",
      dob: "20-10-2012",
      view: <IconButton icon={<ViewIcon />} colorScheme="green" />,
      edit: <IconButton icon={<EditIcon />} colorScheme="blue" />,
      delete: <IconButton icon={<DeleteIcon />} colorScheme="red" />,
    },
    {
      srNo: 1,
      name: "Abc",
      color: "Brown",
      gender: "female",
      dob: "20-10-2012",
      view: <IconButton icon={<ViewIcon />} colorScheme="green" />,
      edit: <IconButton icon={<EditIcon />} colorScheme="blue" />,
      delete: <IconButton icon={<DeleteIcon />} colorScheme="red" />,
    },
    {
      srNo: 1,
      name: "Abc",
      color: "Brown",
      gender: "female",
      dob: "20-10-2012",
      view: <IconButton icon={<ViewIcon />} colorScheme="green" />,
      edit: <IconButton icon={<EditIcon />} colorScheme="blue" />,
      delete: <IconButton icon={<DeleteIcon />} colorScheme="red" />,
    },
    {
      srNo: 1,
      name: "Abc",
      color: "Brown",
      gender: "female",
      dob: "20-10-2012",
      view: <IconButton icon={<ViewIcon />} colorScheme="green" />,
      edit: <IconButton icon={<EditIcon />} colorScheme="blue" />,
      delete: <IconButton icon={<DeleteIcon />} colorScheme="red" />,
    },
    {
      srNo: 1,
      name: "Abc",
      color: "Brown",
      gender: "female",
      dob: "20-10-2012",
      view: <IconButton icon={<ViewIcon />} colorScheme="green" />,
      edit: <IconButton icon={<EditIcon />} colorScheme="blue" />,
      delete: <IconButton icon={<DeleteIcon />} colorScheme="red" />,
    },
    {
      srNo: 1,
      name: "Abc",
      color: "Brown",
      gender: "female",
      dob: "20-10-2012",
      view: <IconButton icon={<ViewIcon />} colorScheme="green" />,
      edit: <IconButton icon={<EditIcon />} colorScheme="blue" />,
      delete: <IconButton icon={<DeleteIcon />} colorScheme="red" />,
    },
    {
      srNo: 1,
      name: "Abc",
      color: "Brown",
      gender: "female",
      dob: "20-10-2012",
      view: <IconButton icon={<ViewIcon />} colorScheme="green" />,
      edit: <IconButton icon={<EditIcon />} colorScheme="blue" />,
      delete: <IconButton icon={<DeleteIcon />} colorScheme="red" />,
    },
    {
      srNo: 1,
      name: "Abc",
      color: "Brown",
      gender: "female",
      dob: "20-10-2012",
      view: <IconButton icon={<ViewIcon />} colorScheme="green" />,
      edit: <IconButton icon={<EditIcon />} colorScheme="blue" />,
      delete: <IconButton icon={<DeleteIcon />} colorScheme="red" />,
    },
    {
      srNo: 1,
      name: "Abc",
      color: "Brown",
      gender: "female",
      dob: "20-10-2012",
      view: <IconButton icon={<ViewIcon />} colorScheme="green" />,
      edit: <IconButton icon={<EditIcon />} colorScheme="blue" />,
      delete: <IconButton icon={<DeleteIcon />} colorScheme="red" />,
    },
    {
      srNo: 1,
      name: "Abc",
      color: "Brown",
      gender: "female",
      dob: "20-10-2012",
      view: <IconButton icon={<ViewIcon />} colorScheme="green" />,
      edit: <IconButton icon={<EditIcon />} colorScheme="blue" />,
      delete: <IconButton icon={<DeleteIcon />} colorScheme="red" />,
    },
    {
      srNo: 1,
      name: "Abc",
      color: "Brown",
      gender: "female",
      dob: "20-10-2012",
      view: <IconButton icon={<ViewIcon />} colorScheme="green" />,
      edit: <IconButton icon={<EditIcon />} colorScheme="blue" />,
      delete: <IconButton icon={<DeleteIcon />} colorScheme="red" />,
    },
    {
      srNo: 1,
      name: "Abc",
      color: "Brown",
      gender: "female",
      dob: "20-10-2012",
      view: <IconButton icon={<ViewIcon />} colorScheme="green" />,
      edit: <IconButton icon={<EditIcon />} colorScheme="blue" />,
      delete: <IconButton icon={<DeleteIcon />} colorScheme="red" />,
    },
    {
      srNo: 1,
      name: "Abc",
      color: "Brown",
      gender: "female",
      dob: "20-10-2012",
      view: <IconButton icon={<ViewIcon />} colorScheme="green" />,
      edit: <IconButton icon={<EditIcon />} colorScheme="blue" />,
      delete: <IconButton icon={<DeleteIcon />} colorScheme="red" />,
    },
    {
      srNo: 1,
      name: "Abc",
      color: "Brown",
      gender: "female",
      dob: "20-10-2012",
      view: <IconButton icon={<ViewIcon />} colorScheme="green" />,
      edit: <IconButton icon={<EditIcon />} colorScheme="blue" />,
      delete: <IconButton icon={<DeleteIcon />} colorScheme="red" />,
    },
    {
      srNo: 1,
      name: "Abc",
      color: "Brown",
      gender: "female",
      dob: "20-10-2012",
      view: <IconButton icon={<ViewIcon />} colorScheme="green" />,
      edit: <IconButton icon={<EditIcon />} colorScheme="blue" />,
      delete: <IconButton icon={<DeleteIcon />} colorScheme="red" />,
    },
    {
      srNo: 1,
      name: "Abc",
      color: "Brown",
      gender: "female",
      dob: "20-10-2012",
      view: <IconButton icon={<ViewIcon />} colorScheme="green" />,
      edit: <IconButton icon={<EditIcon />} colorScheme="blue" />,
      delete: <IconButton icon={<DeleteIcon />} colorScheme="red" />,
    },
    {
      srNo: 1,
      name: "Abc",
      color: "Brown",
      gender: "female",
      dob: "20-10-2012",
      view: <IconButton icon={<ViewIcon />} colorScheme="green" />,
      edit: <IconButton icon={<EditIcon />} colorScheme="blue" />,
      delete: <IconButton icon={<DeleteIcon />} colorScheme="red" />,
    },
    {
      srNo: 1,
      name: "Abc",
      color: "Brown",
      gender: "female",
      dob: "20-10-2012",
      view: <IconButton icon={<ViewIcon />} colorScheme="green" />,
      edit: <IconButton icon={<EditIcon />} colorScheme="blue" />,
      delete: <IconButton icon={<DeleteIcon />} colorScheme="red" />,
    },
    {
      srNo: 1,
      name: "Abc",
      color: "Brown",
      gender: "female",
      dob: "20-10-2012",
      view: <IconButton icon={<ViewIcon />} colorScheme="green" />,
      edit: <IconButton icon={<EditIcon />} colorScheme="blue" />,
      delete: <IconButton icon={<DeleteIcon />} colorScheme="red" />,
    },
    {
      srNo: 1,
      name: "Abc",
      color: "Brown",
      gender: "female",
      dob: "20-10-2012",
      view: <IconButton icon={<ViewIcon />} colorScheme="green" />,
      edit: <IconButton icon={<EditIcon />} colorScheme="blue" />,
      delete: <IconButton icon={<DeleteIcon />} colorScheme="red" />,
    },
    {
      srNo: 1,
      name: "Abc",
      color: "Brown",
      gender: "female",
      dob: "20-10-2012",
      view: <IconButton icon={<ViewIcon />} colorScheme="green" />,
      edit: <IconButton icon={<EditIcon />} colorScheme="blue" />,
      delete: <IconButton icon={<DeleteIcon />} colorScheme="red" />,
    },
    {
      srNo: 1,
      name: "Abc",
      color: "Brown",
      gender: "female",
      dob: "20-10-2012",
      view: <IconButton icon={<ViewIcon />} colorScheme="green" />,
      edit: <IconButton icon={<EditIcon />} colorScheme="blue" />,
      delete: <IconButton icon={<DeleteIcon />} colorScheme="red" />,
    },
    {
      srNo: 1,
      name: "Abc",
      color: "Brown",
      gender: "female",
      dob: "20-10-2012",
      view: <IconButton icon={<ViewIcon />} colorScheme="green" />,
      edit: <IconButton icon={<EditIcon />} colorScheme="blue" />,
      delete: <IconButton icon={<DeleteIcon />} colorScheme="red" />,
    },
    {
      srNo: 1,
      name: "Abc",
      color: "Brown",
      gender: "female",
      dob: "20-10-2012",
      view: <IconButton icon={<ViewIcon />} colorScheme="green" />,
      edit: <IconButton icon={<EditIcon />} colorScheme="blue" />,
      delete: <IconButton icon={<DeleteIcon />} colorScheme="red" />,
    },
    {
      srNo: 1,
      name: "Abc",
      color: "Brown",
      gender: "female",
      dob: "20-10-2012",
      view: <IconButton icon={<ViewIcon />} colorScheme="green" />,
      edit: <IconButton icon={<EditIcon />} colorScheme="blue" />,
      delete: <IconButton icon={<DeleteIcon />} colorScheme="red" />,
    },
    {
      srNo: 1,
      name: "Abc",
      color: "Brown",
      gender: "female",
      dob: "20-10-2012",
      view: <IconButton icon={<ViewIcon />} colorScheme="green" />,
      edit: <IconButton icon={<EditIcon />} colorScheme="blue" />,
      delete: <IconButton icon={<DeleteIcon />} colorScheme="red" />,
    },
    {
      srNo: 1,
      name: "Abc",
      color: "Brown",
      gender: "female",
      dob: "20-10-2012",
      view: <IconButton icon={<ViewIcon />} colorScheme="green" />,
      edit: <IconButton icon={<EditIcon />} colorScheme="blue" />,
      delete: <IconButton icon={<DeleteIcon />} colorScheme="red" />,
    },
    {
      srNo: 1,
      name: "Abc",
      color: "Brown",
      gender: "female",
      dob: "20-10-2012",
      view: <IconButton icon={<ViewIcon />} colorScheme="green" />,
      edit: <IconButton icon={<EditIcon />} colorScheme="blue" />,
      delete: <IconButton icon={<DeleteIcon />} colorScheme="red" />,
    },
    {
      srNo: 1,
      name: "Abc",
      color: "Brown",
      gender: "female",
      dob: "20-10-2012",
      view: <IconButton icon={<ViewIcon />} colorScheme="green" />,
      edit: <IconButton icon={<EditIcon />} colorScheme="blue" />,
      delete: <IconButton icon={<DeleteIcon />} colorScheme="red" />,
    },
    {
      srNo: 1,
      name: "Abc",
      color: "Brown",
      gender: "female",
      dob: "20-10-2012",
      view: <IconButton icon={<ViewIcon />} colorScheme="green" />,
      edit: <IconButton icon={<EditIcon />} colorScheme="blue" />,
      delete: <IconButton icon={<DeleteIcon />} colorScheme="red" />,
    },
    {
      srNo: 1,
      name: "Abc",
      color: "Brown",
      gender: "female",
      dob: "20-10-2012",
      view: <IconButton icon={<ViewIcon />} colorScheme="green" />,
      edit: <IconButton icon={<EditIcon />} colorScheme="blue" />,
      delete: <IconButton icon={<DeleteIcon />} colorScheme="red" />,
    },
    {
      srNo: 1,
      name: "Abc",
      color: "Brown",
      gender: "female",
      dob: "20-10-2012",
      view: <IconButton icon={<ViewIcon />} colorScheme="green" />,
      edit: <IconButton icon={<EditIcon />} colorScheme="blue" />,
      delete: <IconButton icon={<DeleteIcon />} colorScheme="red" />,
    },
    {
      srNo: 1,
      name: "Abc",
      color: "Brown",
      gender: "female",
      dob: "20-10-2012",
      view: <IconButton icon={<ViewIcon />} colorScheme="green" />,
      edit: <IconButton icon={<EditIcon />} colorScheme="blue" />,
      delete: <IconButton icon={<DeleteIcon />} colorScheme="red" />,
    },
    {
      srNo: 1,
      name: "Abc",
      color: "Brown",
      gender: "female",
      dob: "20-10-2012",
      view: <IconButton icon={<ViewIcon />} colorScheme="green" />,
      edit: <IconButton icon={<EditIcon />} colorScheme="blue" />,
      delete: <IconButton icon={<DeleteIcon />} colorScheme="red" />,
    },
    {
      srNo: 1,
      name: "Abc",
      color: "Brown",
      gender: "female",
      dob: "20-10-2012",
      view: <IconButton icon={<ViewIcon />} colorScheme="green" />,
      edit: <IconButton icon={<EditIcon />} colorScheme="blue" />,
      delete: <IconButton icon={<DeleteIcon />} colorScheme="red" />,
    },
    {
      srNo: 1,
      name: "Abc",
      color: "Brown",
      gender: "female",
      dob: "20-10-2012",
      view: <IconButton icon={<ViewIcon />} colorScheme="green" />,
      edit: <IconButton icon={<EditIcon />} colorScheme="blue" />,
      delete: <IconButton icon={<DeleteIcon />} colorScheme="red" />,
    },
    {
      srNo: 1,
      name: "Abc",
      color: "Brown",
      gender: "female",
      dob: "20-10-2012",
      view: <IconButton icon={<ViewIcon />} colorScheme="green" />,
      edit: <IconButton icon={<EditIcon />} colorScheme="blue" />,
      delete: <IconButton icon={<DeleteIcon />} colorScheme="red" />,
    },
    {
      srNo: 1,
      name: "Abc",
      color: "Brown",
      gender: "female",
      dob: "20-10-2012",
      view: <IconButton icon={<ViewIcon />} colorScheme="green" />,
      edit: <IconButton icon={<EditIcon />} colorScheme="blue" />,
      delete: <IconButton icon={<DeleteIcon />} colorScheme="red" />,
    },
    {
      srNo: 1,
      name: "Abc",
      color: "Brown",
      gender: "female",
      dob: "20-10-2012",
      view: <IconButton icon={<ViewIcon />} colorScheme="green" />,
      edit: <IconButton icon={<EditIcon />} colorScheme="blue" />,
      delete: <IconButton icon={<DeleteIcon />} colorScheme="red" />,
    },
    {
      srNo: 1,
      name: "Abc",
      color: "Brown",
      gender: "female",
      dob: "20-10-2012",
      view: <IconButton icon={<ViewIcon />} colorScheme="green" />,
      edit: <IconButton icon={<EditIcon />} colorScheme="blue" />,
      delete: <IconButton icon={<DeleteIcon />} colorScheme="red" />,
    },
    {
      srNo: 1,
      name: "Abc",
      color: "Brown",
      gender: "female",
      dob: "20-10-2012",
      view: <IconButton icon={<ViewIcon />} colorScheme="green" />,
      edit: <IconButton icon={<EditIcon />} colorScheme="blue" />,
      delete: <IconButton icon={<DeleteIcon />} colorScheme="red" />,
    },
    {
      srNo: 1,
      name: "Abc",
      color: "Brown",
      gender: "female",
      dob: "20-10-2012",
      view: <IconButton icon={<ViewIcon />} colorScheme="green" />,
      edit: <IconButton icon={<EditIcon />} colorScheme="blue" />,
      delete: <IconButton icon={<DeleteIcon />} colorScheme="red" />,
    },
  ];

  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor("srNo", {
      cell: (info) => info.getValue(),
      header: "Sr.No",
    }),
    columnHelper.accessor("name", {
      cell: (info) => info.getValue(),
      header: "Name",
    }),
    columnHelper.accessor("gender", {
      cell: (info) => info.getValue(),
      header: "Gender",
    }),
    columnHelper.accessor("color", {
      cell: (info) => info.getValue(),
      header: "Color",
    }),
    columnHelper.accessor("dob", {
      cell: (info) => info.getValue(),
      header: "Date Of Birth",
    }),
    columnHelper.accessor("view", {
      cell: (info) => info.getValue(),
      header: "View",
    }),
    columnHelper.accessor("edit", {
      cell: (info) => info.getValue(),
      header: "Edit",
    }),
    columnHelper.accessor("delete", {
      cell: (info) => info.getValue(),
      header: "Delete",
    }),
  ];

  return (
    <>
      <Flex
        // border="2px red solid"
        paddingLeft="10%"
        paddingRight="10%"
        paddingTop="1%"
      >
        <VStack width="100%"  gap="10">
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: useBreakpointValue({ base: "20%", md: "30%" }),
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "blue.400",
                zIndex: -1,
              }}
            >
              Manage
            </Text>{" "}
            <Text color={"blue.400"} as={"span"}>
              Cattles
            </Text>{" "}
          </Heading>
          <DataTable  data={data} columns={columns} />
        </VStack>
      </Flex>

      {/* View Modal */}

      <Modal isOpen={isViewOpen} onClose={onViewClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Cattle Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <List spacing={2}>
              <ListItem>
                <Text as={"span"} fontWeight={"bold"}>
                  Name:
                </Text>{" "}
                Abc
              </ListItem>
              <ListItem>
                <Text as={"span"} fontWeight={"bold"}>
                  Gender:
                </Text>{" "}
                Female
              </ListItem>
              <ListItem>
                <Text as={"span"} fontWeight={"bold"}>
                  IdNUmber:
                </Text>{" "}
                13467890
              </ListItem>
              <ListItem>
                <Text as={"span"} fontWeight={"bold"}>
                  Date Of Birth:
                </Text>{" "}
                20-10-2012
              </ListItem>
              <ListItem>
                <Text as={"span"} fontWeight={"bold"}>
                  Weight:
                </Text>{" "}
                310
              </ListItem>
              <ListItem>
                <Text as={"span"} fontWeight={"bold"}>
                  Height:
                </Text>{" "}
                3.2
              </ListItem>
              <ListItem>
                <Text as={"span"} fontWeight={"bold"}>
                  Length:
                </Text>{" "}
                5.1
              </ListItem>
            </List>
          </ModalBody>

          <ModalFooter>
            <Button mr={3} onClick={onViewClose}>
              Close
            </Button>
            {/* <Button colorScheme='red'>Delete</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Edit Modal */}
      <Modal
        scrollBehavior="inside"
        initialFocusRef={initialRef}
        isOpen={isEditOpen}
        onClose={onEditClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input ref={initialRef} value="Abc" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Gender</FormLabel>
              <Input value="female" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Gender</FormLabel>
              <Input value="female" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Gender</FormLabel>
              <Input value="female" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Gender</FormLabel>
              <Input value="female" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Gender</FormLabel>
              <Input value="female" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Gender</FormLabel>
              <Input value="female" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onEditClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Delete Modal */}
      <Modal isOpen={isDeleteOpen} onClose={onDeleteClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delete Cattle</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Delete this record?
            <br />
            <Badge colorScheme="red">This action can not be reversed</Badge>
          </ModalBody>

          <ModalFooter>
            <Button mr={3} onClick={onDeleteClose}>
              Close
            </Button>
            <Button colorScheme="red">Delete</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ManageRecords;
