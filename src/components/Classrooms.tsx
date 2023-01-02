import { useQuery } from '@apollo/client';
import { graphql } from '../../src/gql';
import { Person } from '../../src/gql/graphql';
import { Tabs, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Icon, Link, Center, Button } from '@chakra-ui/react';
import { IoIosPeople } from 'react-icons/io';
import LoadingIndicator from './LoadingIndicator';
import ClassroomOverview from './ClassroomOverview';
import ErrorIndicator from './ErrorIndicator';

const allPlanetsQueryDocument = graphql(
    `query allPlanetsQuery($first: Int!) {
      allPlanets(first: $first) {
        planets {
          name 
          residentConnection {
            residents {
              name
              starshipConnection {
                starships {
                  pilotConnection {
                    pilots {
                      
                      name
                    }
                  }
                  name
                }
              }
            }
          }
        }
      }
    }
  `);
  
  function Classrooms() {
    
    let { data, loading, error } = useQuery(allPlanetsQueryDocument, { variables: { first: 100 } });
    
    if (loading) return <LoadingIndicator loading={loading}/>;
    if (error) return <ErrorIndicator error={error}/>;
     
    return data ? (
          <>
          <Center mt={4} mb={8} >
                <Button mr={2}>Classrooms Overview</Button> 
                <Button isActive width={'195px'}><Link href="/classroom-form">Add Classroom</Link></Button> 
            </Center>
          
            <Accordion allowMultiple>
            {
              // filter planets where at least one of habitants is a pilot (teacher)
              data?.allPlanets?.planets?.filter(planet => planet?.residentConnection?.residents?.some(resident => resident?.starshipConnection?.starships?.length))?.map(
                
                (planet, i) => {
                  
                  const residents = planet?.residentConnection?.residents as Person[];
  
          
                  return (
                   
                    <AccordionItem key={`cr-${i}`}>
                      <h2>
                        <AccordionButton _expanded={{ bg: 'gray.100' }}>
                          
                          <Box as="span" flex='1' textAlign='left' fontSize={20} >
                            <Icon as={IoIosPeople} color="blue.300" mr={2} boxSize={5} />  Classroom: {planet?.name}
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        <Tabs>
                          <ClassroomOverview residents={residents} />
                        </Tabs>
                      </AccordionPanel>
                    </AccordionItem>
                    
                  )
                }
              )
            }
            </Accordion>
          </>
    ) : null
  }

  export default Classrooms;