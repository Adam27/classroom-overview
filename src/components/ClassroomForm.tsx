import {
    FormControl,
    FormLabel,
    Input,
    Button,
    Link,
    Container,
    Center
} from '@chakra-ui/react';
import { graphql } from '../../src/gql';
import React, { useState } from 'react';
function ClassroomForm() {

    //     const ADD_CASSROOM_MUTATION = graphql(`
    //     mutation addPlanet($classroom: ClassroomInput!) {
    //       createClassroom(classroom: $classroom) {
    //         name
    //         teachers 
    //         subjects 
    //         students 
    //       }
    //     }
    //   `);

    const [formState, setFormState] = useState({
        classroom: '',
        teachers: '',
        subjects: '',
        students: '',
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // make the mutation request here with the form state values
        console.dir(formState);
    };

    return (
        <Container maxW='4xl'>
            <Center mt={4} mb={6} >
                <Button mr={2}><Link href="/">Classrooms Overview</Link></Button> 
                <Button isActive width={'195px'}>Add Classroom</Button> 
            </Center>

            <form onSubmit={handleSubmit}>
                <FormControl mb={5}>
                    <FormLabel htmlFor="classroom">Classroom Name</FormLabel>
                    <Input
                        type="text"
                        id="classroom"
                        name="classroom"
                        value={formState.classroom}
                        onChange={handleInputChange}
                        placeholder="Enter classroom name"
                    />
                </FormControl>
                <FormControl mb={5}>
                    <FormLabel htmlFor="teachers">Teachers</FormLabel>
                    <Input
                        type="text"
                        id="teachers"
                        name="teachers"
                        value={formState.teachers}
                        onChange={handleInputChange}
                        placeholder="Enter names separated by a comma"
                    />
                </FormControl>
                <FormControl mb={5}>
                    <FormLabel htmlFor="students">Students</FormLabel>
                    <Input
                        type="text"
                        id="students"
                        name="students"
                        value={formState.students}
                        onChange={handleInputChange}
                        placeholder="Enter names separated by a comma"
                    />
                </FormControl>
                <FormControl mb={5}>
                    <FormLabel htmlFor="subjects">Subjects</FormLabel>
                    <Input
                        type="text"
                        id="subjects"
                        name="subjects"
                        value={formState.subjects}
                        onChange={handleInputChange}
                        placeholder="Enter names separated by a comma"
                    />
                </FormControl>
                <Button mt={4} type="submit">Submit</Button>
            </form>
        </Container>);
}

export default ClassroomForm;