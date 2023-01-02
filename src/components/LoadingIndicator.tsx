
import { Progress } from '@chakra-ui/react';

function LoadingIndicator(props: {loading: boolean}): JSX.Element{
    return props.loading ? <Progress size='xs' isIndeterminate /> : <></>;  
  }

export default LoadingIndicator;