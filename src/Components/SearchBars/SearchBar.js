import { FormControl, FormLabel, Input, InputGroup, InputRightElement, IconButton} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export default function SearchBar({labelText, value, onChange, maxWidth='auto', onClick}) {
  return (
    <FormControl maxW={maxWidth}>
        <FormLabel>{labelText}</FormLabel>
    <InputGroup>
    <Input placeholder="Wyszukaj" value={value} onChange={onChange} />
    <InputRightElement>
    <IconButton colorScheme="whiteAlpha" aria-label='Kliknij, aby wyszukać' icon={<SearchIcon />} onClick={onClick}/>
    </InputRightElement>
    </InputGroup>
    </FormControl>
  )
}