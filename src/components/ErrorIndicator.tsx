
import { ApolloError } from '@apollo/client';
import { Card, CardHeader, CardBody } from '@chakra-ui/react';

function ErrorIndicator(props: {
    error: ApolloError
}){
    return props.error ? (<Card color="red.500">
        <CardHeader>
            {props.error.name}
        </CardHeader>
        <CardBody>
            {props.error.message}
        </CardBody>
      </Card>) : <></>
}

export default ErrorIndicator;
