import { EmailIcon } from "@chakra-ui/icons";
import { Box, IconButton } from "@chakra-ui/react";

export default function NotyficationIcon({onClick, notyficationsLength}) {


  return (
    <Box className="fixed top-20    right-2 md:right-20 z-40">
      <div className="z-50 absolute top-[-5px] right-[-5px] w-6 h-6 rounded-full bg-green-500 border-mediterrenian border flex justify-center items-center">
      {notyficationsLength}
      </div>
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