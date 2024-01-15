import { CloseButton, Flex } from "@chakra-ui/react";
import IconImage from "./Image/IconImage";
export default function TestIcon({name, id, onClick=null, path}) {

  return (
    <IconImage path={process.env.REACT_APP_BACKEND+path} alt='' >
        {onClick!==null &&<CloseButton onClick={onClick}  className="float-right" />}
           <Flex justify={'center'} alignItems={'end'} h='full' p='8px'>
            <p className="text-center ">
            {name}
            </p>
            </Flex>
        </IconImage>
  )
}

export function TestIconWithButton({TestIconDataObject, onClick,buttonText,  color})
{
  
 return   <div className="p-2 flex flex-col border justify-center sel rounded-md">
        <TestIcon {...TestIconDataObject} onClick={null} />
        <button className="action-button mt-4 mb-4" style={{backgroundColor: color}} onClick={onClick}>{buttonText}</button>
    </div>
}