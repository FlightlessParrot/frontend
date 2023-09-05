import { EmailIcon } from "@chakra-ui/icons";
import { Box, IconButton } from "@chakra-ui/react";

export default function NotyficationIcon({onClick}) {


  return (
    <Box className="fixed top-20    right-2 md:right-20 z-50">
    <IconButton
    className=""
    onClick={onClick}
    isRound={true}
    variant='solid'
    colorScheme="yellow"
    aria-label="Zobacz powiadomienie"
    size={'lg'}
    fontSize={25}
    icon={<EmailIcon />}

    />
</Box>
  )
}