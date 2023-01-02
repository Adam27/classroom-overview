import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider, Container } from '@chakra-ui/react';
import { Center, Icon } from '@chakra-ui/react'
import { ApolloProvider } from '@apollo/client';
import client from './apolloClient';
import Classrooms from './components/Classrooms';
import ClassroomForm from './components/ClassroomForm';
import { FaUniversity } from 'react-icons/fa'

function App() {
  return (
    <Router>
    <ApolloProvider client={client}>
      <ChakraProvider>
        <Container maxW='4xl' mb={20}>
        <Center mt={2} mb={0} >
          <Icon as={FaUniversity} color="gray.400" mr={2} boxSize={36} />
        </Center> 
          
        <Routes>
          <Route path="/" element={<Classrooms />} />
          <Route path="/classroom-form" element={<ClassroomForm />} />
        </Routes>

        </Container>
      </ChakraProvider>
    </ApolloProvider>
    </Router>
  );
}

export default App;
