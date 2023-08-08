import SearchBar from "../SearchBars/SearchBar";
import { Flex } from "@chakra-ui/react";
export default function ModifyQuestion({title,underTitle, onChange, value, children, searchButtonHandler})
{

    return(
        <div>
            <h2 className="lead">{title}</h2>
            <i className="m-4 mt-2 mb-8 block ">{underTitle}</i>
            
            <SearchBar maxWidth="600px" labelText={'Wyszukaj pytanie'} onChange={onChange} value={value} onClick={searchButtonHandler}/>
            <Flex wrap={'wrap'} className='my-16 gap-16'>
                {children}
            </Flex>
            
        </div>


    )
}