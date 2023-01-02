import { UnorderedList } from '@chakra-ui/react';
import {
  Tabs, TabList, TabPanels, TabPanel, 
  Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, 
  Box, List, ListItem, Icon
} from '@chakra-ui/react'

import { FaGraduationCap } from 'react-icons/fa'
import { SiStarship } from 'react-icons/si'
import { Person } from "../gql/graphql";
import { useQuery } from '@apollo/client';
import { graphql } from '../../src/gql';
import TeacherTabTitleList from './TeacherTabTitleList';
import LoadingIndicator from './LoadingIndicator';
import ErrorIndicator from './ErrorIndicator';

const allPeopleQueryDocument = graphql(
    `query People($first: Int!) {
      allPeople(first: $first) {
        people {
          name
          birthYear
          gender
        }
      }
    }`
  )

function ClassroomOverview(props: {residents: Person[]}): JSX.Element | null {
    let { data, loading, error } = useQuery(allPeopleQueryDocument, { variables: { first: 200 } });
    if (loading) return <LoadingIndicator loading={loading}/>;
    if (error) return <ErrorIndicator error={error}/>;
    if(data){
        return (
            <Tabs>
              <Box margin={3} fontSize={16}>
                Teachers:
              </Box>
              <TabList>
                <TeacherTabTitleList residents={props.residents} />
              </TabList>
              <TabPanels>
                {props.residents.filter(resident=>resident?.starshipConnection?.starships?.length).map(
                  (resident, i) => {
                      return (
                        <TabPanel key={`subjList-${i}`}>
                          <Box mt={3} mb={6} padding={3} backgroundColor="gray.100" borderRadius="3">
                            <Box margin={1}>
                              Subjects:
                            </Box>
                            <List spacing={1} margin={5}>
                              {resident?.starshipConnection?.starships?.map((s, k) => {
                                return (
                                  <ListItem key={`sub-${k}`}><Icon as={SiStarship} color='blue.300' mr={2} /> {s?.name}</ListItem>
                                )
                              })}
                            </List>
                          </Box>
      
                          <Box margin={3}>
                            Students:
                          </Box>
                          
                          <Accordion allowMultiple>
                            {data && data?.allPeople?.people?.filter((person) => {
                              return person?.name !== resident.name
                            }).map(
                              (person, i) => {
                                return (
                                  <AccordionItem key={`std-${i}`}>
                                    <AccordionButton _expanded={{ bg: 'gray.100' }}>
                                      <Box as="span" flex='1' textAlign='left'>
                                      <Icon as={FaGraduationCap} color="blue.300" mr={2} /> Student: {person?.name}
                                      </Box>
                                      <AccordionIcon />
                                    </AccordionButton>
                                    <AccordionPanel pb={4}>
                                      <UnorderedList>
                                        <ListItem>Birth Year: {person?.birthYear}</ListItem>
                                        <ListItem>Gender:    {person?.gender}</ListItem>
                                      </UnorderedList>
                                    </AccordionPanel>
                                  </AccordionItem>
                                );
                              }
                            )}
                          </Accordion>
                        </TabPanel>
                      )
                    
                  })}
              </TabPanels>
            </Tabs>)
    } else {
        return null;
    }
    

    
  }

  export default ClassroomOverview;