import { Box, Button, Center, List, ListIcon, ListItem} from "@chakra-ui/react";
import {CheckCircleIcon} from "@chakra-ui/icons"
export default function ProductCard({name,price, tests, license_duration, id ,OnClickReturnId, buttonText='Kupuję'}) {
    const listItems=tests.map(
        (test)=><ListItem key={test.id}>
            <ListIcon as={CheckCircleIcon} color='green.500' />
            {test.name}
        </ListItem>
    )
    const setLicense=()=>{
        switch(license_duration){
            case 'month': return 'miesiąc';
            case 'year' : return 'rok'
            default:return 'miesiąc';
        }
    }
  return (
    <div className="w-62 p-4 rounded-lg hover:bg-sea hover:shadow-lg border-2 shadow-md  shadow-black border-sea">
       <Center>{name} </Center>
        <Center> <div className="w-3/4 h-1 rounded mt-6 bg-sea"></div></Center>
        <Box my='20px'>
        <div className="m-6 my-8     pr-12 flex justify-end "><b className="bold-serif text-xl p-2 rounded-md border-2  border-green-300">{price} zł</b></div>
        <p className="bold-sans-serif text-lg">{setLicense()} dostępu do naszych testów</p></Box>
        <div className="m-2">
            <Box my={[2,4,8]}>
        <b className="bold-sans-serif">Subskrypcja zawiera pakiety:</b>
        <List m={[2,4]}>
            {listItems}
        </List>
        </Box>
        </div >
            <Center my='30px'><Button colorScheme="green" onClick={e=>OnClickReturnId(id)}>{buttonText}</Button></Center>
        </div>
  )
}