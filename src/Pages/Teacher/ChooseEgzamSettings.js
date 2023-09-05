import CreateTestInstance from "../User/Tests/CreateTestInstance";
import {  Box, Flex, useDisclosure } from "@chakra-ui/react"
import { Link, useActionData } from "react-router-dom";
import MyAlert from "../../Components/Alerts/MyAlert"
import { useEffect } from "react";
export default function ChooseEgzamSettings() {
    const {isOpen, onOpen, onClose}=useDisclosure()
    const actionData=useActionData()
    useEffect(
        ()=>{
            if(actionData?.status)
            {
                onOpen()
                window.scroll(0,0)
            }
        },[onOpen, actionData]
        )
        
  return (
    <Box>
      <MyAlert isOpen={isOpen} onClose={onClose} {...actionData} />
      {actionData?.status ? <Flex justify='end' p={4}><Link className="action-button" to={`egzams/${actionData.testId}/open-questions/create`}>Dodaj pytania otwarte do testu</Link></Flex>:
       <CreateTestInstance /> }

    </Box>
  )
}