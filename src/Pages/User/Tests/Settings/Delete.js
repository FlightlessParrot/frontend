
import MyAlert from "../../../../Components/Alerts/MyAlert";
import { alertData, alertDeleteTest } from "../../../../Data/AlertData";
import { useEffect, useState } from "react"
import SearchTest from "../../../../Components/SearchBars/SearchTest"
import universalFetchSchema from "../../../../fetch/universalFetchSchema";
import { useDisclosure } from "@chakra-ui/react";

export default function Delete() {
  
    const [test, setTest]=useState('');
    const {isOpen, onClose, onOpen}=useDisclosure(false);
    const [response, setResponse]=useState()
    useEffect(
      ()=>{
        const fn=async ()=>{
        if(test.id)
        {
          const response = await universalFetchSchema(null,'/tests/'+test.id+'/delete',  'delete')
          setTest('')
          setResponse(response)
          onOpen()

        }}
        fn()
      },[test]
    )

    const alertData = response ? alertDeleteTest.positive : alertDeleteTest.negative;
  return (
    <>
     <MyAlert onClose={onClose} isOpen={isOpen} {...alertData} />
    <SearchTest choseTestHandler={setTest} buttonText={'Usuń'} color='red' custom={true}/>
    </>
        
  )
}