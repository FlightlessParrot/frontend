import { Checkbox,  FormControl, FormErrorMessage, FormLabel,Text } from "@chakra-ui/react";

import {useState } from "react";

import useImageEditor from "../../hooks/useImageEditor";


export default function ImageForm({fileRef, check, setCheck}) {
    const [dirty, setDirty]=useState(false)
    const editor=useImageEditor()
    const imageIsInvalid=!((fileRef.current?.files[0] ==null ||  editor(fileRef.current.files[0].name,['jpg','png','webp']))&&dirty)
  return (
    <FormControl  isInvalid={imageIsInvalid} >
    <FormLabel className='flex items-end p-4 cursor-pointer action-button gap-10' htmlFor="input" ><Checkbox p={1} isChecked={check} readOnly/> Dodaj zdjęcie</FormLabel>
    <Text color={"gray.500"} size='xs'>Dopuszczalne formaty to jpg, png oraz webp</Text>
    <input  name='image' data-testid='fileInput' className="hidden" id='input' onChange={e=>{setDirty(true); fileRef.current.files[0]!=null ? setCheck(true): setCheck(false)}} type="file" accept=".jpg,.png,.webp" ref={fileRef}></input>
    <FormErrorMessage>Format zdjęcia jest niewłaściwy.</FormErrorMessage>
</FormControl>
  )
}