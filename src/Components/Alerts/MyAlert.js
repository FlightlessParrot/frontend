import { Alert, AlertDescription, AlertIcon, CloseButton, AlertTitle, Box } from "@chakra-ui/react"


export default function MyAlert({isOpen, status, title, description, onClose}) {
  const props={isOpen, status, title, description, onClose}
  return (props.isOpen ?
   <Alert className="animate__animated animate__bounce" status={props.status} color='black' position={{md:'absolute'}} top='60px' right='60px'  width={{md:'fit-content'}} maxWidth={{md:'500px'}} zIndex={'100'} margin={'20px'}>
    <AlertIcon />
    <Box>
        <AlertTitle>{props.title}</AlertTitle>
        <AlertDescription>
            {props.description}
        </AlertDescription>
    </Box>
    <CloseButton alignSelf='flex-start' onClick={props.onClose} />

    </Alert>: <></>
  )
}