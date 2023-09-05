import { Button } from "@chakra-ui/react"
import useRemoveFromStatystics from "../../hooks/useRemoveFromStatystics"

export default function NotCountMe({testId,questionId, setResponseOk}) {
    const remover=useRemoveFromStatystics()
 return <Button onClick={()=>remover(testId,questionId, setResponseOk)} colorScheme="red">Literówka!!! Usuń mnie ze statystyk!</Button>
}