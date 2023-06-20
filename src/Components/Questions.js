
export default function Questions({type, question, buttonText, onClick, color})
{

    return(
        <Flex direction='column' gap={6}>
            <p><b className="bold-sans-serif">typ pytania: </b>{type}</p>
            <p><b className="bold-sans-serif">Treść pytania: </b>{question}</p>
            <button className="action-button" onClick={onClick} style={{color: color}}>{buttonText}</button>
        </Flex>
    )
}