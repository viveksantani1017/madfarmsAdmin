import {
  Box,
  Flex,
  Grid,
  Heading,
  SimpleGrid,
  Stack,
  Stat,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Chart } from "react-google-charts";
import Stats from "../components/Stats";
const Home = () => {
  const data = [
    ["Months", "Sales", "Expenses"],
    ["April", 1000, 400],
    ["May", 660, 1120],
    ["June", 1170, 460],
  ];
  const pieData = [
    ["Category", "Sales"],
    ["Dahi", 1000],
    ["Paneer", 660],
    ["Milk", 1170],
  ];
  const options = {
    title: "Madfarms Last Three Months Performance",
    curveType: "function",
    legend: { position: "bottom" },
  };
  const pieOptions = {
    title: "Madfarms Category-Wise Sales",
    curveType: "function",
    legend: { position: "bottom" },
  };
  return (
    <>
      <Box maxW="7xl" mx={"auto"}  mb="20" px={{ base: 2, sm: 12, md: 17 }}>
        <Heading textAlign="center" mt="10" mb="20">
          Company Sales Information
        </Heading>
        <SimpleGrid
          // columns={2}
          columns={{ base: 1, md: 2 }}
          spacing={{ base: 5, lg: 8 }}
        >
          <Chart
            chartType="LineChart"
            minWidth="430px"
            height="400px"
            data={data}
            options={options}
          />
          <Chart
            chartType="PieChart"
            minWidth="430px"
            height="400px"
            data={pieData}
            options={pieOptions}
          />
        </SimpleGrid>
      </Box>
      <Stats />
    </>
  );
};

export default Home;
