import { Person } from "../gql/graphql";
import { GiTeacher } from 'react-icons/gi';
import { Tab, Icon } from '@chakra-ui/react';

function TeacherTabTitleList(props: {residents: Person[]}) {
    return (<>{props.residents.filter(resident=>resident?.starshipConnection?.starships?.length).map(
      (resident, i) => (<Tab key={`tchr-${i}`}><Icon as={GiTeacher} color="blue.300" mr={2} boxSize={4} />{resident.name}</Tab>)
      )}</>)
  }

export default TeacherTabTitleList;