import { Link, useLoaderData } from "react-router-dom"
import { Alert, AlertIcon, Box } from "@chakra-ui/react"

export default function VerifyEmail() {
    const loaderData = useLoaderData()
    
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Alert maxH={'400px'} maxW={'400px'} display={'flex'} flexDir={'column'} padding={6} gap={6} color={'black'}    status={loaderData.status}>
        <AlertIcon />
        <Box flexGrow={'1'}>{loaderData.description}</Box>
        <Link className="text-sel rounded border border-sel m-10 p-2" to='/user'>Wracam do aplikacji!</Link>
    </Alert></div>
  )
}