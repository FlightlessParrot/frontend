import { Flex } from "@chakra-ui/react"

export default function Question({type, question, buttonText, onClick, color})
{

    return(
        <Flex direction='column' maxW={'250px'} gap={4}>
            <p><b className="bold-sans-serif">typ pytania: </b>{type}</p>
            <p><b className="bold-sans-serif">Treść pytania: </b>{question}</p>
            <button className="action-button self-center" onClick={onClick} style={{backgroundColor: color}}>{buttonText}</button>
        </Flex>
    )
}