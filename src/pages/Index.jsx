import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Container, Text, VStack, Button, Box, Image } from "@chakra-ui/react";
import { FaRunning } from "react-icons/fa";

const LandingPage = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="4xl">Welcome</Text>
        <Button as={Link} to="/running" colorScheme="teal" size="lg">
          Learn About Running
        </Button>
      </VStack>
    </Container>
  );
};

const RunningPage = () => {
  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={6}>
        <Text fontSize="3xl">All About Running</Text>
        <Box>
          <Text fontSize="xl">Running is a great way to stay fit and healthy. It improves cardiovascular health, strengthens muscles, and boosts mental well-being.</Text>
        </Box>
        <Box>
          <Image src="https://images.unsplash.com/photo-1488778578932-0f84d315fcae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxydW5uaW5nJTIwaWxsdXN0cmF0aW9ufGVufDB8fHx8MTcxNzUxMTIxNXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Running Illustration" />
        </Box>
        <Button as={Link} to="/" colorScheme="teal" size="lg" leftIcon={<FaRunning />}>
          Back to Welcome
        </Button>
      </VStack>
    </Container>
  );
};

const Index = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/running" element={<RunningPage />} />
      </Routes>
    </Router>
  );
};

export default Index;
