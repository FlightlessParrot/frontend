import SearchBar from "./SearchBars/SearchBar";

export default function ModifyQuestion({title, onChange, value, children})
{

    return(
        <div>
            <h2 className="lead">{title}</h2>
            <i className="m-4 mt-2 ">Możesz usunąć pytanie z własnego testu</i>
            
            <SearchBar maxWidth="600px" labelText={'Wyszukaj pytanie'} onChange={onChange} value={value}/>
            <Flex className='m-4'>
                {children}
            </Flex>
            
        </div>


    )
}