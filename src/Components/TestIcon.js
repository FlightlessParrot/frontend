import { CloseButton, Flex } from "@chakra-ui/react";

export default function TestIcon({name, id, onClick, path}) {
  return (
    <div className="relative top-0 rounded-lg border border-C_gray w-[200px] h-[200px] overflow-clip" key={id}>
        <img src={path} alt='' className="object-cover w-full h-full"  />
        <div className="absolute top-0 left-0 z-20 w-[200px] h-[200px]">
       <CloseButton  className="float-right" />
           <Flex justify={'center'} alignItems={'end'} h='full' p='8px'>
            <p className="text-center ">
            {name}

            </p>
            </Flex></div>
        
    </div>
  )
}

export function TestIconWithButton({TestIconDataObject, onClick,buttonText,  color})
{
    <div className="p-2 flex flex-row justify-center">
        <TestIcon {...TestIconDataObject} />
        <button className="action-button mt-4" style={{backgroundColor: color}} onClick={onClick}>{buttonText}</button>
    </div>
}