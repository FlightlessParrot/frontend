import { Button, Center, List, ListItem, Box, ListIcon } from "@chakra-ui/react"
import { CheckCircleIcon } from "@chakra-ui/icons"
export default function AccountRole({ role, price, onClick}) {
    const translator=(role)=>{
        switch(role)
        {
            case 'student':
                return 'student'
            case 'premium': 
            return'premium'
            case 'admin':
                return 'admin'
        }
    }
    const translatedRole=translator(role)
  return (
    <div>
        <div>
            <span>Typ konta </span> <b className="border rounded border-slate-500 p-2 m-2">{translatedRole}</b>
        </div>
        <div>
        {translatedRole==='student' &&
            <div className="p-2 my-8 rounded-md w-60 border-2 border-sea hover:bg-sel shadow-md">
                <Center><b>Skorzystaj z konta premium</b></Center>
                <Center my={[2]}><div className="w-3/4 h-1 bg-sel " /></Center>
                <div className="m-6 my-8     pr-12 flex justify-end "><b className="bold-serif text-xl p-2 rounded-md border-2  border-green-300">{price} zł</b></div>
                
                <Box my={[2,4,8]}>
        <b className="bold-sans-serif">Konto premium umożliwia:</b>
        <List m={[2,4]}>
        <ListItem >
            <ListIcon as={CheckCircleIcon} color='green.500' />
            Tworzenie grup
        </ListItem>
        <ListItem >
        <ListIcon as={CheckCircleIcon} color='green.500' />
            Zarządzanie grupami
        </ListItem>
        <ListItem >
        <ListIcon as={CheckCircleIcon} color='green.500' />
            Tworzenie egzaminów z pytaniami otwartymi
        </ListItem>
        <ListItem >
            <ListIcon as={CheckCircleIcon} color='green.500' />
            Ocenianie egzaminów
        </ListItem>
        </List>
        <Center><Button colorScheme="green" onClick={onClick}>Kupuję premium</Button></Center>
        </Box>
            </div>
        }
        </div>
    </div>
  )
}