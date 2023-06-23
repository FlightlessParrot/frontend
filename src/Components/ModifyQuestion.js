import SearchBar from "./SearchBars/SearchBar";
import { Flex } from "@chakra-ui/react";
export default function ModifyQuestion({title,underTitle, onChange, value, children})
{

    return(
        <div>
            <h2 className="lead">{title}</h2>
            <i className="m-4 mt-2 mb-8 block ">{underTitle}</i>
            
            <SearchBar maxWidth="600px" labelText={'Wyszukaj pytanie'} onChange={onChange} value={value}/>
            <Flex className='my-16 gap-8'>
                {children}
            </Flex>
            
        </div>


    )
}