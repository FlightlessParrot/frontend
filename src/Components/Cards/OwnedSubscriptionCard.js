import { Box } from "@chakra-ui/react";

export default function OwnedSubscriptionCard({name, expiration_date}) {
  return (
    <Box className='p-4 rounded-md bg-sea shadow-black shadow-md w-60'>
        <b className="bold-serif">{name}</b>
        <p className=""><span>Twój dostęp do tej subskrypcji wygaśnie:</span> <b>{expiration_date}</b></p>

    </Box>
  )
}