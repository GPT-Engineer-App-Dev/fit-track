import { useState } from "react";
import { Container, Heading, VStack, FormControl, FormLabel, Input, Button, Textarea } from "@chakra-ui/react";

const LogWorkout = () => {
  const [workout, setWorkout] = useState({
    type: "",
    duration: "",
    date: "",
    notes: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWorkout((prevWorkout) => ({
      ...prevWorkout,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the workout data to a server or save it in local storage
    console.log("Workout logged:", workout);
    // Reset form
    setWorkout({
      type: "",
      duration: "",
      date: "",
      notes: ""
    });
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4} as="form" onSubmit={handleSubmit}>
        <Heading as="h1" size="xl">Log Workout</Heading>
        <FormControl id="type" isRequired>
          <FormLabel>Type of Exercise</FormLabel>
          <Input name="type" value={workout.type} onChange={handleChange} />
        </FormControl>
        <FormControl id="duration" isRequired>
          <FormLabel>Duration (minutes)</FormLabel>
          <Input name="duration" value={workout.duration} onChange={handleChange} />
        </FormControl>
        <FormControl id="date" isRequired>
          <FormLabel>Date</FormLabel>
          <Input type="date" name="date" value={workout.date} onChange={handleChange} />
        </FormControl>
        <FormControl id="notes">
          <FormLabel>Notes</FormLabel>
          <Textarea name="notes" value={workout.notes} onChange={handleChange} />
        </FormControl>
        <Button colorScheme="teal" type="submit">Log Workout</Button>
      </VStack>
    </Container>
  );
};

export default LogWorkout;