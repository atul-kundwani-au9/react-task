import React from "react";
import {
  Box,
  Container,
  Grid,
  GridItem,
  Input,
  Select,
} from "@chakra-ui/react";
import { HiOutlineLocationMarker, HiOutlineStar } from "react-icons/hi";
import { BsBuildings, BsCloudMoon } from "react-icons/bs";
import { AiOutlineCalendar } from "react-icons/ai";
import { TbNetwork } from "react-icons/tb";
import { BiBed } from "react-icons/bi";
import { IoSearch } from "react-icons/io5";
const borderColor = "#d9dce0";
const themeColor = "hsl(189.19deg 100% 40.98%)";

const Card = () => {
  return (
    // card main box
    <Box
      width={"80vw"}
      height={"50vh"}
      bg={"#fff"}
      position={"absolute"}
      top={"40%"}
      left={"calc(50% - 40vw)"}
      boxShadow={"4px 2px 10px rgba(0,0,0,0.5)"}
      borderRadius={20}
      p={" 50px 0"}
    >
      {/* card container started */}
      <Container maxW="90%">
        {/* First Row */}
        <Grid h="100px" templateColumns="45% 45%" columnGap={10}>
          {/* First column of first row */}
          <GridItem>
            <Box
              w={"100%"}
              h={"100%"}
              border={`1px solid ${borderColor}`}
              borderRadius={10}
              p={"20px"}
            >
              <Grid h="100%" templateColumns="60% 40%" columnGap={0}>
                <GridItem
                  borderRight={`1px solid ${borderColor}`}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  columnGap={"20px"}
                >
                  <Box fontSize={"1.8em"} color={themeColor}>
                    <HiOutlineLocationMarker />
                  </Box>

                  <Box>
                    <label>Enter destination or property</label>
                    <Input
                      placeholder="Enter destination"
                      _placeholder={{
                        color: themeColor,
                        fontWeight: "500",
                        fontSize: "14px",
                      }}
                      focusBorderColor="0"
                      border={0}
                      pl={"5px"}
                      borderLeft={`2px solid ${themeColor}`}
                      borderRadius={0}
                      height={"20px"}
                    />
                  </Box>
                </GridItem>
                <GridItem
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  columnGap={"10px"}
                >
                  <Box fontSize={"1.7em"} color={themeColor}>
                    <BsBuildings />
                  </Box>

                  <Box>
                    <label>Country or City</label>
                    <Box color={themeColor} fontWeight={500} fontSize={"14px"}>
                      Search
                    </Box>
                  </Box>
                </GridItem>
              </Grid>
            </Box>
          </GridItem>

          {/* second column of first row */}
          <GridItem>
            <Box
              w={"100%"}
              h={"100%"}
              border={`1px solid ${borderColor}`}
              borderRadius={10}
              p={"20px"}
            >
              <Grid h="100%" templateColumns="60% 40%" columnGap={0}>
                <GridItem
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  columnGap={"20px"}
                >
                  <Box fontSize={"1.8em"} color={themeColor}>
                    <AiOutlineCalendar />
                  </Box>

                  <Box>
                    <label>Travel Dates</label>
                    <Box color={themeColor} fontWeight={500} fontSize={"13px"}>
                      <span>29 Mar 2023</span> <span> To</span>{" "}
                      <span>31 Mar 2023</span>
                    </Box>
                  </Box>
                </GridItem>
                <GridItem
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  columnGap={"10px"}
                >
                  <Box fontSize={"1.7em"} color={themeColor}>
                    <BsCloudMoon />
                  </Box>

                  <Box>
                    <label>Total Nights</label>
                    <Box color={themeColor} fontWeight={500} fontSize={"14px"}>
                      2
                    </Box>
                  </Box>
                </GridItem>
              </Grid>
            </Box>
          </GridItem>
        </Grid>

        {/* Second Row */}
        <Grid
          h="100px"
          mt={10}
          templateColumns="27% 27% 24% 10%"
          columnGap={10}
        >
          {/* First column of second row */}
          <GridItem>
            <Box
              w={"100%"}
              h={"100%"}
              border={`1px solid ${borderColor}`}
              borderRadius={10}
              p={"20px"}
            >
              <Box
                display={"flex"}
                justifyContent={"flex-start"}
                alignItems={"center"}
                columnGap={"20px"}
              >
                <Box fontSize={"2em"} color={themeColor}>
                  <TbNetwork />
                </Box>
                <Box>
                  <label>Nationality or Residency</label>
                  <Select
                    placeholder="India"
                    fontSize={"14px"}
                    height={"20px"}
                    color={themeColor}
                    fontWeight={500}
                    w={100}
                    border={0}
                    focusBorderColor="none"
                    cursor={"pointer"}
                  >
                    <option value="India">India</option>
                    <option value="Bangladesh">Bangladesh</option>
                  </Select>
                </Box>
              </Box>
            </Box>
          </GridItem>

          {/* second column of second row */}
          <GridItem>
            <Box
              w={"100%"}
              h={"100%"}
              border={`1px solid ${borderColor}`}
              borderRadius={10}
              p={"20px"}
            >
              <Box
                display={"flex"}
                justifyContent={"flex-start"}
                alignItems={"center"}
                columnGap={"20px"}
              >
                <Box fontSize={"2em"} color={themeColor}>
                  <BiBed />
                </Box>
                <Box>
                  <label>Total Rooms</label>
                  <Box color={themeColor} fontWeight={500} fontSize={"13px"}>
                    <span>1 Room,</span> <span> 2 Adult,</span>{" "}
                    <span> 0 Child</span>
                  </Box>
                </Box>
              </Box>
            </Box>
          </GridItem>

          {/* Third column of second row */}
          <GridItem>
            <Box
              w={"100%"}
              h={"100%"}
              border={`1px solid ${borderColor}`}
              borderRadius={10}
              p={"20px"}
            >
              <Box
                display={"flex"}
                justifyContent={"flex-start"}
                alignItems={"center"}
                columnGap={"20px"}
              >
                <Box fontSize={"2em"} color={themeColor}>
                  <HiOutlineStar />
                </Box>
                <Box>
                  <label>Hotel Category</label>
                  <Select
                    placeholder="Select Category"
                    fontSize={"14px"}
                    height={"20px"}
                    color={themeColor}
                    fontWeight={500}
                    border={0}
                    focusBorderColor="none"
                    cursor={"pointer"}
                  >
                    <option value="Category1">Category 1</option>
                    <option value="Category2">Category 2</option>
                  </Select>
                </Box>
              </Box>
            </Box>
          </GridItem>

          {/* Fourth column of second row */}
          <GridItem>
            <Box
              w={"92%"}
              h={"100%"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              bg={themeColor}
              borderRadius={"50%"}
              fontSize={"2.5em"}
              color={"#fff"}
            >
              <IoSearch/>
              
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default Card;
