import { Container, Text, VStack, Heading, Box, Button, Flex, IconButton } from "@chakra-ui/react";
import { FaRunning, FaDumbbell, FaHeartbeat } from "react-icons/fa";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">Fitness Tracker</Heading>
        <Text fontSize="lg" textAlign="center">Track your workouts, monitor your progress, and stay motivated!</Text>
        <Flex justifyContent="center" width="100%" wrap="wrap" gap={6}>
          <Box textAlign="center">
            <IconButton aria-label="Running" icon={<FaRunning />} size="lg" isRound />
            <Text mt={2}>Running</Text>
          </Box>
          <Box textAlign="center">
            <IconButton aria-label="Weight Lifting" icon={<FaDumbbell />} size="lg" isRound />
            <Text mt={2}>Weight Lifting</Text>
          </Box>
          <Box textAlign="center">
            <IconButton aria-label="Heart Rate" icon={<FaHeartbeat />} size="lg" isRound />
            <Text mt={2}>Heart Rate</Text>
          </Box>
        </Flex>
        <Button as={Link} to="/log-workout" colorScheme="teal" size="lg">Log Workout</Button>
      </VStack>
    </Container>
  );
};

export default Index;